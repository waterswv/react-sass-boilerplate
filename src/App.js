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
  }
]
class App extends Component {
  state = {
    sideDrawerOpen: false
  };
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
  };
  componentDidMount() {
    if (google) {
      this.map = new window.google.maps.Map(this.refs.map, {
        center: {
          lat: 38.6640092,
          lng: -122.9342897
        },
        zoom: 10
      });
    }
  }
  render() {
    let backdrop;
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
        </Container>
        <Container className={"secondary-search wrapper"}>
          {  /* Regional Searches go here... */ }
        </Container>
        <Container className={"wrapper"}>
          <div className="column-6 column-s-12">
            <div className="column-12 map-container">
              {wineries.map(winery => <AddMarker winery={winery} click={() => this.addMarker(winery)} />)}
              <div ref="map" className="map" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
