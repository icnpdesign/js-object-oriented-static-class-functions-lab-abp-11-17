'use strict';

class Question {
  constructor(content){
    this.content = content
    this.save()
  }

  save(){
    this.constructor._All.push(this);
  }
  static All() {
    return this._All;
  }
}

Question._All = [];

let newQuestion = newQuestion("Where are you right now?")

newQuestion.save();

