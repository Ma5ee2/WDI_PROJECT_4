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

    const foodbankImage = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Google-location-icon-color_icons_green_home.png',
      scaledSize: new google.maps.Size(32, 63)
    };

    this.foodbankMarker = new google.maps.Marker({
      map: this.map,
      position: this.props.foodbank.location,
      animation: google.maps.Animation.DROP,
      icon: foodbankImage
    });

    const image = {
      url: 'https://image.flaticon.com/icons/png/128/34/34343.png',
      scaledSize: new google.maps.Size(50, 50)
    };

    navigator.geolocation.getCurrentPosition(position => {
      const { coords: { latitude: lat, longitude: lng } } = position;

      this.userMarker = new google.maps.Marker({
        map: this.map,
        position: { lat, lng },
        animation: google.maps.Animation.BOUNCE,
        icon: image
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
