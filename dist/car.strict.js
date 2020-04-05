function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Car = /*#__PURE__*/function () {
  function Car() {
    var make = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Toyota";
    var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Camry";
    var year = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "2016";

    _classCallCheck(this, Car);

    this.make = make;
    this.model = model;
    this.year = year;
  }

  _createClass(Car, [{
    key: "getMake",
    value: function getMake() {
      return this.make;
    }
  }, {
    key: "getModel",
    value: function getModel() {
      return this.model;
    }
  }, {
    key: "getYear",
    value: function getYear() {
      return this.year;
    }
  }]);

  return Car;
}();

export default Car;
