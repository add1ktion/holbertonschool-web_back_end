const _cloneCar = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CloneConstructor = this.constructor;
    return new CloneConstructor();
  }
}
