var Car = /*#__PURE__*/function () {
  function Car(make, model, year) {
    if (make === void 0) {
      make = "Toyota";
    }

    if (model === void 0) {
      model = "Camry";
    }

    if (year === void 0) {
      year = "2016";
    }

    this.make = make;
    this.model = model;
    this.year = year;
  }

  var _proto = Car.prototype;

  _proto.getMake = function getMake() {
    return this.make;
  };

  _proto.getModel = function getModel() {
    return this.model;
  };

  _proto.getYear = function getYear() {
    return this.year;
  };

  return Car;
}();

export default Car;
