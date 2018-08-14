import React, { Component } from 'react';
import logo from './logo.svg';
const google = window.google;
const apiKey = 'AIzaSyDV5HMbW_2loRPhf5xa0IzXP5SfOP1TF-Q';


class App extends Component {


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

    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
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
