var points = {Brave: 0, Hardy: 0, Docile: 0, Timid: 0, Relaxed: 0, Jolly: 0, Naive: 0, Sassy: 0, Impish: 0, Quirky: 0, Hasty: 0};

var questions = [
	{
		question: "A delinquent is hassling a girl on a busy street! What will you do?",
		answers: [
			{answer: "Help without hesitation", points: {Brave: 3}},
			{answer: "Help, even if scared", points: {Hardy: 2, Brave: 2}},
			{answer: "Call the police", points: {Docile: 1, Timid: 1, Relaxed: 1}},
			{answer: "Do nothing out of fear", points: {Timid: 2}}
		]
	},
	{
		question: "A foreign person has started up a conversation with you. To be honest, you don't have a clue what this fellow is saying. How do you reply?",
		answers: [
			{answer: "Haha! Yes. Very funny!", points: {Jolly: 3}},
			{answer: "Um, could you say that again?", points: {Hardy: 2}},
			{answer: "Right...well I gotta go", points: {Timid: 2}}
		]
	},
	{
		question: "A friend brought over something you'd forgotten. How do you thank your friend?",
		answers: [
			{answer: "Say thank you regularly", points: {Docile: 2}},
			{answer: "Say thanks with a joke", points: {Naive: 1, Lonely: 1}},
			{answer: "Say thanks, but be cool", points: {Sassy: 2}}
		]
	}
];

function generateQuestion()
{
	if (questions.length === 0)
	{
		var questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		var answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		var resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		resultElement.innerHTML = "You are a " + calculateResult() + " Pokemon";
		return;
	}
	
	var resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	var questionIndex = Math.floor(Math.random() * questions.length);
	var question = questions[questionIndex];

	var questionElement = document.getElementById("question");
	questionElement.innerHTML = question.question;

	var answersElement = document.getElementById("answers");
	answersElement.innerHTML = "";
	
	for (var n = 0; n < question.answers.length; n++)
	{
		
		var answer = question.answers[n];
		var button = document.createElement("button");
		
		button.innerHTML = answer.answer;
		
		button.onclick = (function(points)
		{
			return function()
			{
				for (var category in points)
				{
					if (points.hasOwnProperty(category))
					{
						points[category] += points[category];
					}
				}

				questions.splice(questionIndex, 1);

				generateQuestion();
			};
	
		})
		(answer.points);

		answersElement.appendChild(button);
		
	}
};

function calculateResult()
{
	var bravePoints = points.Brave;
	var hardyPoints = points.Hardy;
	var docilePoints = points.Docile;
	var timidPoints = points.Timid;
	var relaxedPoints = points.Relaxed;
	var jollyPoints = points.Jolly;
	var naivePoints = points.Naive;
	var sassyPoints = points.Sassy;
	var impishPoints = points.Impish;
	var quirkyPoints = points.Quirky;

	var maxPoints = Math.max(bravePoints, hardyPoints, docilePoints, timidPoints, relaxedPoints, jollyPoints, naivePoints, sassyPoints, impishPoints, quirkyPoints);
  
	if (maxPoints === bravePoints)
	{
		return "Brave";
	}
	else if (maxPoints === hardyPoints)
	{
		return "Hardy";
	}
	else if (maxPoints === docilePoints)
	{
		return "Docile";
	}
	else if (maxPoints === timidPoints)
	{
		return "Timid";
	}
	else if (maxPoints === relaxedPoints)
	{
		return "Relaxed";
	}
	else if (maxPoints === jollyPoints)
	{
		return "Jolly";
	}
	else if (maxPoints === naivePoints)
	{
		return "Naive";
	}
	else if (maxPoints === sassyPoints)
	{
		return "Sassy";
	}
	else if (maxPoints === impishPoints)
	{
		return "Impish";
	}
	else if (maxPoints === quirkyPoints)
	{
		return "Quirky";
	}
}