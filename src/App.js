import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import Container from './Container';
import AddMarker from './MapComponents/AddMarker';

const google = window.google;
const wineries = [
  {
    name: 'Unti',
    position: {
      lat: 38.6640092,
      lng: -122.9342897
      }
  },
  {
    name: 'Roth',
    position: {
      lat: 38.5706633,
      lng: -122.7795547
    }
  },
  {
    name: 'Bella',
    position: {
      lat: 38.7056274,
      lng: -122.9804787
    }
  },
  {
    name: 'Comstock',
    position: {
      lat: 38.6326374,
      lng: -122.8973365
    }
  },
  {
    name: 'Fog Crest',
    position: {
      lat: 38.4286098,
      lng: -122.8444916
    }
  }
]
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideDrawerOpen: false,
      isLoading: false,
    }
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
   addMarker = (data) => {

    this.marker = new window.google.maps.Marker({
      position: data.position,
      map: this.map,
      title: data.name
    });
    this.addDirectionsDisplay(data.position)
  };
  addDirectionsDisplay = (end) => {
    this.setState( state => state.isLoading = true)
    this.directionsService.route({
         origin: {
           lat: 38.6640092,
           lng: -122.9342897
         },
         destination: end,
         travelMode: 'DRIVING'
       }, (response, status) => {
         if (status === 'OK') {
           this.directionsDisplay.setDirections(response);
           this.setState( state => state.isLoading = false)
         } else {
           window.alert('Directions request failed due to ' + status);
         }
       })
  }
  componentDidMount() {
    if (google) {
      this.directionsDisplay = new window.google.maps.DirectionsRenderer;
      this.directionsService = new window.google.maps.DirectionsService;
      this.map = new window.google.maps.Map(this.refs.map, {
        center: {
          lat: 38.6640092,
          lng: -122.9342897
        },
        zoom: 9,
        disableDefaultUI: true,
      });
      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.setPanel(this.refs.directions)
    }
  }
  render() {
    let backdrop;
    const {isLoading} = this.state;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Container className={"main-search wrapper"}>
          {  /* Explore Taste Searches go here... */ }
          <a>Explore</a><a>Taste</a>
        </Container>
        <Container className={"column-12 wrapper"}>
          {  /* Regional Searches go here... */ }
          <div>Wineries:</div>
          <div className="column-12 map-container">
            {wineries.map(winery => <AddMarker winery={winery} click={() => this.addMarker(winery)} />)}
          </div>
        </Container>
        <Container className={"wrapper column-12"}>
            <div className="column-12 map-container">
              {isLoading ? <Backdrop /> : null}
              <div ref="map" className="map" />
            </div>
        </Container>
        <Container className={"wrapper column-12 map"}>
          <div ref="directions"></div>
        </Container>
      </div>
    );
  }
}

export default App;
