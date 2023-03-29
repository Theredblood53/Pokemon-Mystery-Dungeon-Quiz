var genpoints = {Brave: 0, Hardy: 0, Docile: 0, Timid: 0, Relaxed: 0, Jolly: 0, Naive: 0, Sassy: 0, Impish: 0, Quirky: 0, Hasty: 0, Calm: 0, Lonely: 0};

var questionsRB = [
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
	},
	{
		question: "Do others tell you to watch what you say?",
		answers: [
			{answer: "Yes", points: {Sassy: 2, Impish: 1}},
			{answer: "No", points: {Calm: 2}}
		]
	},
	{
		question: "Do you dream of lounging around idly without much excitement?",
		answers: [
			{answer: "Yes", points: {Calm: 2}},
			{answer: "No", points: {Impish: 2}}
		]
	},
	{
		question: "Do you fall asleep without noticing?",
		answers: [
			{answer: "Yes", points: {Calm: 1, Relaxed: 2}},
			{answer: "No", points: {Hardy: 2}}
		]
	},
	{
		question: "Do you feel lonesome when you are alone?",
		answers: [
			{answer: "Yes", points: {Timid: 1, Lonely: 2}},
			{answer: "No", points: {Sassy: 2}}
		]
	},
	{
		question: "Do you get the feeling you've slowed down lately?",
		answers: [
			{answer: "Yes", points: {Relaxed: 2}},
			{answer: "No", points: {Impish: 1, Hasty: 2}}
		]
	},
	{
		question: "Do you hate to be the last person to leave class at the end of a school day?",
		answers: [
			{answer: "Yes", points: {Timid: 1, Lonely: 2}},
			{answer: "No", points: {Brave: 3, Relaxed: 1}}
		]
	},
	{
		question: "Do you like groan-inducing puns?",
		answers: [
			{answer: "Love them!", points: {Naive: 3, Impish: 1}},
			{answer: "A little", points: {Jolly: 2}},
			{answer: "Spare me", points: {Sassy: 2}}
		]
	},
	{
		question: "Do you get the feeling you've slowed down lately?",
		answers: [
			{answer: "Yes", points: {Impish: 2}},
			{answer: "No", points: {Docile: 1, Relaxed: 1}}
		]
	},
	{
		question: "Do you like to fight?",
		answers: [
			{answer: "Yes", points: {Timid: 2, Impish: 1}},
			{answer: "No", points: {Calm: 2, Lonely: 1}}
		]
	},
	{
		question: "Do you like to imagine things for your own amusement?",
		answers: [
			{answer: "Yes", points: {Naive: 2}},
			{answer: "No", points: {Hasty: 2}}
		]
	},
	{
		question: "Do you like to noisily enjoy yourself with others?",
		answers: [
			{answer: "Yes", points: {Lonely: 1, Jolly: 2}},
			{answer: "No", points: {Timid: 1}}
		]
	},
	{
		question: "Do you often yawn?",
		answers: [
			{answer: "Yes", points: {Calm: 2, Relaxed: 1}},
			{answer: "No", points: {Hardy: 1, Hasty: 2}}
		]
	},
	{
		question: "Do you occasionally consider yourself to be dull and over cautious?",
		answers: [
			{answer: "Yes", points: {Calm: 2, Lonely: 1}},
			{answer: "No", points: {Hardy: 2}}
		]
	},
	{
		question: "Do you sometimes run out of things to do all of a sudden?",
		answers: [
			{answer: "Yes", points: {Quirky: 2}},
			{answer: "No", points: {Hardy: 2}}
		]
	},
	{
		question: "Do you tend to laugh a lot?",
		answers: [
			{answer: "Yes", points: {Docile: 1, Naive: 2}},
			{answer: "No", points: {Quirky: 2}}
		]
	},
	{
		question: "Do you think you are cool? Be honest.",
		answers: [
			{answer: "Yes", points: {Sassy: 2}},
			{answer: "No", points: {Relaxed: 2}}
		]
	},
	{
		question: "Grab any finger on your left hand. Which digit did you grab?",
		answers: [
			{answer: "Thumb", points: {Timid: 2}},
			{answer: "Index finger", points: {Hasty: 2}},
			{answer: "Middle finger", points: {Jolly: 2}},
			{answer: "Ring finger", points: {Sassy: 2}},
			{answer: "Little finger", points: {Lonely: 2}}
		]
	},
	{
		question: "Have you ever made a pitfall trap?",
		answers: [
			{answer: "Yes", points: {Lonely: 1, Impish: 2}},
			{answer: "No", points: {Calm: 2}}
		]
	}
];

var questionsminus8 = questionsRB.length - 8;

function generateQuestionRB()
{
	if (questionsRB.length === questionsminus8)
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
	
	var questionIndex = Math.floor(Math.random() * questionsRB.length);
	var question = questionsRB[questionIndex];

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
						genpoints[category] += points[category];
					}
				}

				questionsRB.splice(questionIndex, 1);

				generateQuestionRB();
			};
	
		})
		(answer.points);

		answersElement.appendChild(button);
		
	}
};

function calculateResult()
{
	var bravePoints = genpoints.Brave;
	var hardyPoints = genpoints.Hardy;
	var docilePoints = genpoints.Docile;
	var timidPoints = genpoints.Timid;
	var relaxedPoints = genpoints.Relaxed;
	var jollyPoints = genpoints.Jolly;
	var naivePoints = genpoints.Naive;
	var sassyPoints = genpoints.Sassy;
	var impishPoints = genpoints.Impish;
	var quirkyPoints = genpoints.Quirky;
	var hastyPoints = genpoints.Hasty;
	var calmPoints = genpoints.Calm;
	var lonelyPoints = genpoints.Lonely;

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