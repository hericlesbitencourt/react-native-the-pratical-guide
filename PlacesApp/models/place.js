class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { latitude: 0.342112, longitude: 0.321321}
    this.id = new Date().toString() + Math.random().toString();
  }
}
