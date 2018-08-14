import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

const google = window.google;


class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }
  addMarker = () => {
    this.marker = new window.google.maps.Marker({position: {lat: 38.6640092,
    lng: -122.9342897}, map: this.map})
  }
  componentDidMount(){
    if(google){
      this.map = new window.google.maps.Map(this.refs.map, {
        center: {lat: 38.6640092,
        lng: -122.9342897},
        zoom: 10
        });}
  }
  render() {
    let sideDrawer
    let backdrop
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="App">
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />        
        {backdrop}
        <div className="wrapper">
          <div className="row">
            <div className="column-6 column-s-12">I Should be 6 columns on the Left</div>
            <div className="column-6 column-s-12">I should be 6 columns on the Right</div>
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
          <div className="column-6 column-s-12">
              <div className="row">
                <div className="column-12">
                  <button onClick={this.addMarker}>Add Marker</button>
                  <div ref='map' style={{height: '500px', width: '500px'}}></div>
              </div>
            </div>
          </div>
          <div className="column-6 column-s-12">
            Bottom Right 6 Columns
         </div>
       </div>
     </div>
    </div>
    );
  }
}

export default App;
