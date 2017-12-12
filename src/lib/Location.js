import Promise from 'bluebird';

class Location {
  static getCurrentLocation() {

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        const { coords: { latitude: lat, longitude: lng } } = position;
        resolve({ lat, lng });
      }, error => reject(error));
    })

  }
}

export default Location;
