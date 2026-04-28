export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
  
      if (this.constructor !== Building && !this.constructor.prototype.hasOwnProperty('evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    evacuationWarningMessage() {
      return 'Evacuate immediately!';
    }
  
    get evacuationWarning() {
      return this.evacuationWarningMessage();
    }
  
    get sqft() {
      return this._sqft;
    }
  }