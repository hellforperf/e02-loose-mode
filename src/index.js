class Car {
  constructor (make = "Toyota", model = "Camry", year = "2016") {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getMake () {
    return this.make;
  }

  getModel () {
    return this.model;
  }

  getYear () {
    return this.year;
  }
}

export default Car;
