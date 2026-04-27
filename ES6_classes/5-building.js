export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
  
      // Déplace le bloc IF ici, juste après l'assignation
      if (this.constructor !== Building && !this.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    get sqft() {
      return this._sqft;
    }
  }