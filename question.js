class Question {
  constructor(content){
    this.content = content
  }
  
  static All() {
    return this._All;
  }
}
 Question._All = [];


save () {
  this.constructor._All.push(this)
}
