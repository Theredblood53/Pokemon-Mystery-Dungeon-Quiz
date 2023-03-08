let questions = ["Have you ever blurted something out without thinking about the consequences first?","sex-"];
let answer1 = ["Yes.","bomb, "];
let answer2 = ["No.","sex-bomb"];

var numb = Math.floor(Math.random() * questions.length)

/*function rnd()
{
	numb = Math.floor(Math.random() * questions.length);
}*/

function question()
{
	document.write(questions[numb]);
	questions.splice(numb, 1);
}

function answerOne()
{
	document.write(answer1[numb]);
	answer1.splice(numb, 1);
}

function answerTwo()
{
	document.write(answer2[numb]);
	answer2.splice(numb, 1);
}