class Question {
  static All() {
    return this._All;
  }
}


save () {
  this.constructor._All.push(this)
}
