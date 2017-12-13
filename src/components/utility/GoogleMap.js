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
      scaledSize: new google.maps.Size(40, 60)
    };

    this.foodbankMarker = new google.maps.Marker({
      map: this.map,
      position: this.props.foodbank.location,
      animation: google.maps.Animation.DROP,
      icon: foodbankImage
    });

    const image = {
      url: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-08-128.png',
      scaledSize: new google.maps.Size(40, 60)
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
