function Question( question,choices, answer){

  this.question = question;
  this.choices = choices;
  this.answer = answer;
}


Question.prototype.correctAnswer = function(choices){
  return choices === this.answer;
}
