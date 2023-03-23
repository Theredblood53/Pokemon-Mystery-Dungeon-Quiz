var points = {Brave: 0, Hardy: 0, Docile: 0, Timid: 0, Relaxed: 0, Jolly: 0, Naive: 0, Sassy: 0, Impish: 0, Quirky: 0, Hasty: 0, Calm: 0, Lonely: 0};

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
	},
	{
		question: "A human hand extends out of a toilet! What would you do?",
		answers: [
			{answer: "Scream and run", points: {Timid: 2}},
			{answer: "Close the lid without a word", points: {Hardy: 1, Calm: 2}},
			{answer: "Shake hands with it", points: {Naive: 1, Brave: 2, Impish: 1}}
		]
	},
	{
		question: "A test is coming up. How do you study for it?",
		answers: [
			{answer: "Study hard", points: {Hardy: 2}},
			{answer: "At the last second", points: {Relaxed: 2}},
			{answer: "Ignore it and play", points: {Impish: 2}}
		]
	},
	{
		question: "Are there many things you would like to do?",
		answers: [
			{answer: "Yes", points: {Hardy: 1, Impish: 2}},
			{answer: "No", points: {Quirky: 2, Sassy: 1}}
		]
	},
	{
		question: "Are you a cheerful personality?",
		answers: [
			{answer: "Yes", points: {Naive: 1, Jolly: 2}},
			{answer: "No", points: {Quirky: 1, Sassy: 1}}
		]
	},
	{
		question: "Are you often late for school or meetings?",
		answers: [
			{answer: "Yes", points: {Sassy: 1, Relaxed: 2}},
			{answer: "No", points: {Hardy: 2, Hasty: 1}}
		]
	},
	{
		question: "Can you focus on something you like?",
		answers: [
			{answer: "Yes", points: {Hardy: 2, Docile: 1}},
			{answer: "No", points: {Quirky: 2}}
		]
	},
	{
		question: "Can you go into a haunted house?",
		answers: [
			{answer: "No problem", points: {Brave: 3}},
			{answer: "Uh...n-no...", points: {Timid: 2}},
			{answer: "With someone I like", points: {Sassy: 2}}
		]
	},
	{
		question: "Can you sincerely thank someone when you are grateful?",
		answers: [
			{answer: "Yes", points: {Calm: 1, Docile: 2}},
			{answer: "No", points: {Quirky: 1, Sassy: 2}}
		]
	},
	{
		question: "Do others sometimes call you childish?",
		answers: [
			{answer: "Yes", points: {Naive: 2, Jolly: 1}},
			{answer: "No", points: {Calm: 2}}
		]
	}
];

function generateQuestion()
{
	if (questions.length === 4)
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
	var hastyPoints = points.Hasty;
	var calmPoints = points.Calm;
	var lonelyPoints = points.Lonely;

	var maxPoints = Math.max(bravePoints, hardyPoints, docilePoints, timidPoints, relaxedPoints, jollyPoints, naivePoints, sassyPoints, impishPoints, quirkyPoints, hastyPoints, calmPoints, lonelyPoints);
  
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
	else if (maxPoints === hastyPoints)
	{
		return "Hasty";
	}
	else if (maxPoints === calmPoints)
	{
		return "Calm";
	}
	else if (maxPoints === lonelyPoints)
	{
		return "Lonely";
	}
}