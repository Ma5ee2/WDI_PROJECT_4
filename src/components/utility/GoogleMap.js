import React from 'react';

// import Location from '../../lib/Location';

class GoogleMap extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.foodbank.location,
      zoom: 12,
      clickableIcons: false,
      disableDefaultUI: true
    });

    this.foodbankMarker = new google.maps.Marker({
      map: this.map,
      position: this.props.foodbank.location,
      animation: google.maps.Animation.DROP
    });

    navigator.geolocation.getCurrentPosition(position => {
      const { coords: { latitude: lat, longitude: lng } } = position;

      this.userMarker = new google.maps.Marker({
        map: this.map,
        position: { lat, lng },
        animation: google.maps.Animation.DROP
      });
    });
  }

  componentWillUnmount() {
    this.foodbankMarker.setMap(null);
    this.userMarker.setMap(null);
    this.foodbankMarker = null;
    this.userMarker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;
