var genpoints = {Brave: 0, Hardy: 0, Docile: 0, Timid: 0, Relaxed: 0, Jolly: 0, Naive: 0, Sassy: 0, Impish: 0, Quirky: 0, Hasty: 0, Calm: 0, Lonely: 0, Bold: 0, Rash: 0, Quiet:0, Other: 0};

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
	},
	{
		question: "How quickly do you respond to email?",
		answers: [
			{answer: "Reply right away", points: {Hardy: 1, Hasty: 1}},
			{answer: "May reply, may not", points: {Quirky: 2}},
			{answer: "Too much trouble", points: {Sassy: 2}}
		]
	},
	{
		question: "It's a pleasant day at the beach. How do you feel?",
		answers: [
			{answer: "This feels great!", points: {Jolly: 2}},
			{answer: "Snore...", points: {Relaxed: 2}},
			{answer: "I want to go home soon!", points: {Hasty: 2}}
		]
	},
	{
		question: "It's a weekend, but no one will play with you. What do you do?",
		answers: [
			{answer: "Go on a trip", points: {Lonely: 1, Jolly: 1}},
			{answer: "Hang around vacantly", points: {Calm: 1, Relaxed: 2}},
			{answer: "Huddle in a corner", points: {Timid: 1, Lonely: 3}}
		]
	},
	{
		question: "It's the summer festival! Do you like carnivals?",
		answers: [
			{answer: "Love them!", points: {Jolly: 2}},
			{answer: "Don't care", points: {Quirky: 1, Sassy: 1}}
		]
	},
	{
		question: "It's the summer holidays! Where would you like to go?",
		answers: [
			{answer: "The beach!", points: {Jolly: 2}},
			{answer: "Spas", points: {Calm: 2}},
			{answer: "Anywhere", points: {Quirky: 2}}
		]
	},
	{
		question: "On vacation outings, you want to...",
		answers: [
			{answer: "Go alone", points: {Quirky: 1, Hasty: 1}},
			{answer: "Go with others", points: {Lonely: 1, Jolly: 1}}
		]
	},
	{
		question: "Somebody calls you ''weird but funny'' How does that make you feel?",
		answers: [
			{answer: "Happy!", points: {Lonely: 1, Naive: 1}},
			{answer: "Not happy", points: {Hasty: 1, Sassy: 1}}
		]
	},
	{
		question: "The road forks to the right and left. You are told there is treasure on the right. What do you do?",
		answers: [
			{answer: "Instantly go right", points: {Docile: 2}},
			{answer: "It's a trap! Go left!", points: {Sassy: 2}},
			{answer: "Choose either side", points: {Quirky: 2}}
		]
	},
	{
		question: "There is a bucket. If you put water in it, how high will you fill it?",
		answers: [
			{answer: "Full", points: {Hardy: 2}},
			{answer: "Half", points: {Calm: 2}},
			{answer: "A little", points: {Quirky: 2}}
		]
	},
	{
		question: "There is a person you like, but here is no opportunity to get close. What do you do?",
		answers: [
			{answer: "Bravely declare my love", points: {Hardy: 1, Brave: 3}},
			{answer: "Might say hello", points: {Quirky: 2}},
			{answer: "Pull a prank to get attention", points: {Impish: 2}},
			{answer: "Look from afar", points: {Timid: 2}}
		]
	},
	{
		question: "There is a scream from behind a door! How will you react?",
		answers: [
			{answer: "Yank open the door", points: {Hardy: 1, Brave: 2}},
			{answer: "Scream in unison!", points: {Naive: 2}}
		]
	},
	{
		question: "There is a wallet on the side of the road. What do you do?",
		answers: [
			{answer: "Turn it in to the police", points: {Docile: 2}},
			{answer: "Yay! Yay!", points: {Naive: 2}},
			{answer: "Is anyone watching...", points: {Impish: 2}}
		]
	},
	{
		question: "There is an alien invasion! What will you do?",
		answers: [
			{answer: "Fight", points: {Other: 1}},
			{answer: "Run", points: {Timid: 2}},
			{answer: "Ignore it", points: {Relaxed: 2}}
		]
	},
	{
		question: "You valiantly fight the aliens...but you are defeated. An alien tells you, ''YOU HAVE IMPRESSED US. IT WAS A PLEASURE TO SEE. JOIN US, AND TOGETHER WE SHALL RULE THE WORLD.'' How do you reply?",
		answers: [
			{answer: "Rule with the aliens!", points: {Sassy: 1, Relaxed: 1}},
			{answer: "Refuse", points: {Brave: 4}}
		]
	},
	{
		question: "What do you do with you room's light when you go to bed?",
		answers: [
			{answer: "Leave it on", points: {Timid: 1, Lonely: 2}},
			{answer: "Turn it off", points: {Calm: 2}}
		]
	},
	{
		question: "When the going gets tough, do you get going?",
		answers: [
			{answer: "Yes", points: {Hardy: 2, Brave: 2}},
			{answer: "No", points: {Quirky: 2, Sassy: 2}}
		]
	},
	{
		question: "You are offered a choice of two gifts. Which one will you take?",
		answers: [
			{answer: "Big Box", points: {Docile: 2, Naive: 1}},
			{answer: "Small Box", points: {Timid: 2, Calm: 1}}
		]
	},
	{
		question: "You are suddenly locked inside a pitch black room! What do you do?",
		answers: [
			{answer: "Kick the door", points: {Timid: 2}},
			{answer: "Cry", points: {Lonely: 2}},
			{answer: "Clean it", points: {Quirky: 1, Impish: 2}}
		]
	},
	{
		question: "You broke a rotten egg in your room! What do you do?",
		answers: [
			{answer: "Open a window right away", points: {Docile: 2, Hasty: 1}},
			{answer: "Sniff it first", points: {Relaxed: 1, Naive: 2}}
		]
	},
	{
		question: "You come across a treasure chest! What do you do?",
		answers: [
			{answer: "Open it right away!", points: {Hasty: 2}},
			{answer: "No...It could be a trap...", points: {Timid: 2}},
			{answer: "It's going to be empty...", points: {Sassy: 2}}
		]
	},
	{
		question: "You win a lottery! What do you do with the money?",
		answers: [
			{answer: "Spend it now", points: {Hasty: 1, Jolly: 2}},
			{answer: "Save it", points: {Hardy: 1, Quirky: 1}},
			{answer: "Give it away", points: {Quirky: 2, Brave: 2}}
		]
	},
	{
		question: "You receive a gift! But you don't know what's in it. What do you do?",
		answers: [
			{answer: "Open it now", points: {Hasty: 2}},
			{answer: "Open it later", points: {Calm: 2}},
			{answer: "Get someone to open it", points: {Timid: 2}}
		]
	},
	{
		question: "Your country's leader is in front of you. How do you speak to him or her?",
		answers: [
			{answer: "Speak calmly", points: {Hardy: 2}},
			{answer: "Speak nervously", points: {Docile: 2}},
			{answer: "WHATEVER!", points: {Sassy: 2}}
		]
	},
	{
		question: "Your friend fails to show up for a meeting at the promised time. What do you do?",
		answers: [
			{answer: "Become irritated", points: {Docile: 1, Hasty: 2}},
			{answer: "Wait patiently", points: {Relaxed: 2}},
			{answer: "Get angry and bail", points: {Hasty: 3}}
		]
	},
	{
		question: "Your friend is being bullied! What do you do?",
		answers: [
			{answer: "Face up to the bully", points: {Brave: 3}},
			{answer: "Caution the bully from afar", points: {Timid: 2}},
			{answer: "Heckle the bully from behind", points: {Impish: 2}}
		]
	},
	{
		question: "You're going bungee jumping for the first time. Since it's scary you decide to test the rope with a doll...The bungee cord snaps! Do you still try to make the jump?",
		answers: [
			{answer: "Yes", points: {Brave: 3, Impish: 1}},
			{answer: "No", points: {Timid: 1, Docile: 2}}
		]
	}
];

var questionsTD = [
	{
		question: "Do you think that you might be a genius?",
		answers: [
			{answer: "Certainly!", points: {Sassy: 4, Naive: 2, Jolly: 2}},
			{answer: "Well, not really...", points: {Hardy: 2}}
		]
	},
	{
		question: "Have you had any hobbies for a long time?",
		answers: [
			{answer: "Yes", points: {Hardy: 4}},
			{answer: "No", points: {Quirky: 4, Hasty: 2}}
		]
	},
	{
		question: "Have you ever accidentally revealed a personal secret that someone shared with you?",
		answers: [
			{answer: "Yes", points: {Rash: 4, Lonely: 4}},
			{answer: "No", points: {Hardy: 2}}
		]
	},
	{
		question: "Do you like to do things according to plan?",
		answers: [
			{answer: "Of course!", points: {Hardy: 4}},
			{answer: "I'm not good at planning", points: {Quirky: 4, Rash: 2}},
			{answer: "Plans? Who needs plans?", points: {Relaxed: 4}}
		]
	},
	{
		question: "You have to move a heavy suitcase. What will you do?",
		answers: [
			{answer: "Carry it by myself", points: {Hardy: 4, Brave: 2}},
			{answer: "Ask someone to help", points: {Docile: 2}},
			{answer: "Make someone else do it!", points: {Bold: 4, Sassy: 2}}
		]
	},
	{
		question: "You have a really important test tomorrow! What do you do?",
		answers: [
			{answer: "Study all night long", points: {Hardy: 4}},
			{answer: "Wing it! I'm sure it will be fine!", points: {Relaxed: 4}},
			{answer: "Test?! I think I have a fever...", points: {Naive: 4}}
		]
	},
	{
		question: "You attend a fine dinner at a friend's house. How do you behave?",
		answers: [
			{answer: "Devour the food heartily!", points: {Impish: 4, Naive: 4}},
			{answer: "Enjoy the meal in polite moderation", points: {Hardy: 2}},
			{answer: "Ask to take the leftovers home!", points: {Bold: 4}}
		]
	},
	{
		question: "Would you ever consider sticking to a plan to do ten sit-ups a day?",
		answers: [
			{answer: "Yes! That's easy!", points: {Impish: 4, Sassy: 4}},
			{answer: "Yes. Hard work, though", points: {Hardy: 4}},
			{answer: "No! Who'd want to do that?!", points: {Quirky: 4}}
		]
	},
	{
		question: "You're packing your classroom's snacks for a picnic when you get hungry. What do you do?",
		answers: [
			{answer: "Eat just a tiny bit", points: {Hasty: 4}},
			{answer: "Hold myself back and pack it all up", points: {Hardy: 4}},
			{answer: "What snacks? They're in my belly!", points: {Rash: 4}}
		]
	},
	{
		question: "You've just stuffed yourself with a good meal when a great dessert arrives. What do you do?",
		answers: [
			{answer: "Eat it. Who cares if I'm stuffed?", points: {Hasty: 4, Rash: 4}},
			{answer: "Turn it down. It's too fattening!", points: {Hardy: 4}},
			{answer: "Yum! I love dessert the most!", points: {Bold: 4, Jolly: 4, Relaxed: 2}}
		]
	},
	{
		question: "You're in the final mile of a marathon, but the last stretch is exhausting! What will you do?",
		answers: [
			{answer: "Hang in there and finish!", points: {Hardy: 4, Brave: 2}},
			{answer: "Stop running", points: {Quirky: 4}},
			{answer: "Find a shortcut", points: {Bold: 4, Rash: 2}}
		]
	},
	{
		question: "You've spent forever stacking dominoes... One more and you're done... OH, NO! You knocked them over! What do you do?",
		answers: [
			{answer: "I'm too crushed to start again", points: {Hardy: 4}},
			{answer: "I unleash my full fury!", points: {Docile: 4}},
			{answer: "I set up the dominoes again...", points: {Calm: 4, Bold: 4}}
		]
	},
	{
		question: "What do you do with your allowance?",
		answers: [
			{answer: "Save it!", points: {Hardy: 4}},
			{answer: "Spend it!", points: {Quirky: 4, Hasty: 2}},
			{answer: "Spend half, save half", points: {Calm: 2}},
			{answer: "I don't get an allowance!", points: {Lonely: 4}}
		]
	},
	{
		question: "Can you strike up conversations with new people easily?",
		answers: [
			{answer: "Yes!", points: {Jolly: 4, Bold: 4}},
			{answer: "No", points: {Timid: 2, Docile: 2}}
		]
	},
	{
		question: "If you don't know something, do you come clean and admit it?",
		answers: [
			{answer: "Of course", points: {Docile: 4, Bold: 2}},
			{answer: "That's not easy to admit!", points: {Timid: 4, Lonely: 2}}
		]
	},
	{
		question: "Do you find yourself jumping to the wrong conclusion a lot of the time?",
		answers: [
			{answer: "Yes", points: {Hasty: 4, Rash: 4}},
			{answer: "No", points: {Docile: 2, Quiet: 2}}
		]
	},
	{
		question: "A fortune-teller says that you have a bad future ahead of you. How do you react?",
		answers: [
			{answer: "Worry about it!", points: {Docile: 4, Timid: 2}},
			{answer: "Forget about it", points: {Jolly: 4, Relaxed: 2, Bold: 2}}
		]
	},
	{
		question: "How do you blow up a balloon?",
		answers: [
			{answer: "As close to breaking as possible!", points: {Brave: 4, Impish: 4}},
			{answer: "Big... but not too big!", points: {Quiet: 2}},
			{answer: "I don't... It could pop!", points: {Timid: 4, Docile: 2}}
		]
	},
	{
		question: "Do you think that lies are sometimes necessary?",
		answers: [
			{answer: "Yes", points: {Quiet: 4, Bold: 4}},
			{answer: "No", points: {Brave: 4}},
			{answer: "I don't know", points: {Docile: 4}}
		]
	},
	{
		question: "You hear a rumor that might make you rich! What do you do?",
		answers: [
			{answer: "Keep it all to myself", points: {Bold: 4, Timid: 2}},
			{answer: "Share it with friends", points: {Docile: 4, Rash: 4}},
			{answer: "Spread a different rumor!", points: {Impish: 4}}
		]
	},
	{
		question: "Your friend says that your shirt is inside out. What do you do?",
		answers: [
			{answer: "Get embarrassed!", points: {Docile: 4}},
			{answer: "Laugh out loud!", points: {Rash: 4}},
			{answer: "Say that it's the latest fashion!", points: {Jolly: 4}}
		]
	},
	{
		question: "Your friend tells a joke that's horribly corny! How do you react?",
		answers: [
			{answer: "Roll around the floor laughing!", points: {Jolly: 4, Naive: 2}},
			{answer: "Just let it go by...", points: {Impish: 2, Docile: 2}},
			{answer: "Slap my forehead and groan", points: {Brave: 4}}
		]
	},
	{
		question: "You're on a walk when you smell something delicious. What do you do?",
		answers: [
			{answer: "Try to imagine what it is", points: {Docile: 4}},
			{answer: "Find out what it is!", points: {Naive: 2 , Rash: 2}},
			{answer: "Think about how hungry I am...", points: {Impish: 4}}
		]
	},
	{
		question: "You're eating at a restaurant when you abruptly realize that everyone's gone! What do you do?",
		answers: [
			{answer: "Alone?! I look for an employee!", points: {Lonely: 4, Docile: 4}},
			{answer: "Who's worried? I keep eating", points: {Jolly: 4, Relaxed: 4}},
			{answer: "I swipe food from other tables!", points: {Bold: 4}}
		]
	},
	{
		question: "You're told to wait in a big, empty room. What do you do?",
		answers: [
			{answer: "Wait quietly", points: {Docile: 4}},
			{answer: "Search for something to do", points: {Naive: 4}},
			{answer: "Wander outside", points: {Rash: 4}},
			{answer: "Cradle my knees and sit in the corner!", points: {Lonely: 4}}
		]
	},
	{
		question: "Hey, what's that? There's someone behind you! So... did you look just now?",
		answers: [
			{answer: "Don't do that! It scared me!", points: {Timid: 4}},
			{answer: "OK, I admit it. You tricked me", points: {Docile: 4}},
			{answer: "No way. I didn't fall for it", points: {Sassy: 4, Lonely: 4}},
			{answer: "Huh? What?", points: {Relaxed: 4}}
		]
	},
	{
		question: "Your friend takes a spectacular fall! What do you do?",
		answers: [
			{answer: "Help my friend up!", points: {Brave: 4, Lonely: 2}},
			{answer: "Laugh! It's too funny!", points: {Naive: 4, Impish: 4, Rash: 4}}
		]
	},
	{
		question: "Do you think that anything goes when it comes to winning?",
		answers: [
			{answer: "Of course!", points: {Quiet: 4, Sassy: 4}},
			{answer: "No way!", points: {Brave: 4}}
		]
	},
	{
		question: "You discover a secret passage in a basement. What do you do?",
		answers: [
			{answer: "Go through it!", points: {Impish: 4, Brave: 4, Rash: 2, Hasty: 4}},
			{answer: "Stay away from it", points: {Timid: 2}}
		]
	},
	{
		question: "Would you feel comfortable stating your opinion to a very important person?",
		answers: [
			{answer: "Of course!", points: {Sassy: 4, Brave: 4, Bold: 2}},
			{answer: "Not really", points: {Timid: 2}}
		]
	},
	{
		question: "Do you state your opinion even when it's not what everyone else thinks?",
		answers: [
			{answer: "Yes!", points: {Brave: 4, Bold: 2}},
			{answer: "No", points: {Lonely: 4, Timid: 2}},
			{answer: "It depends on the situation", points: {Calm: 2, Quirky: 2}}
		]
	},
	{
		question: "You're on a stroll when a TV crew pounces on you for an interview. What do you do?",
		answers: [
			{answer: "Run away! How embarrassing!", points: {Timid: 4}},
			{answer: "Answer questions properly", points: {Brave: 4, Sassy: 4}},
			{answer: "Yuck it up! Woo-hoo! I'm on TV!", points: {Naive: 4, Bold: 2}}
		]
	},
	{
		question: "You see a cake that is past its expiration date, but only by one day. What do you do?",
		answers: [
			{answer: "Not a problem! Chow time!", points: {Brave: 4, Relaxed: 2}},
			{answer: "Think about it briefly, then decide", points: {Timid: 2}},
			{answer: "Get someone to try it first", points: {Bold: 4}}
		]
	},
	{
		question: "You're in class when you realize that you really have to go to the restroom! What do you do?",
		answers: [
			{answer: "Ask for permission to leave", points: {Brave: 4, Bold: 4}},
			{answer: "Sneak out", points: {Hasty: 2}},
			{answer: "Hold on until class ends!", points: {Timid: 2}}
		]
	},
	{
		question: "Someone who works at a store suggests an item that isn't quite what you're looking for. But you like this person. What do you do?",
		answers: [
			{answer: "Say you don't want it", points: {Brave: 2, Quiet: 2}},
			{answer: "Say thanks...but say no", points: {Calm: 4, Lonely: 2}},
			{answer: "Cave in and buy it", points: {Rash: 2, Timid: 2}}
		]
	},
	{
		question: "You want to reveal that you like someone a whole bunch! What do you do?",
		answers: [
			{answer: "Show it a little by playing together", points: {Jolly: 4, Calm: 2}},
			{answer: "Make it obvious by... playing a prank!", points: {Lonely: 4, Naive: 2}},
			{answer: "State it clearly for all to hear!", points: {Brave: 4, Impish: 4, Bold: 2}},
			{answer: "Keep it to myself! It's too risky!", points: {Timid: 2}}
		]
	},
	{
		question: "Do you find yourself humming or singing often?",
		answers: [
			{answer: "All the time!", points: {Relaxed: 4, Jolly: 2}},
			{answer: "Never", points: {Quiet: 2}}
		]
	},
	{
		question: "You feel a burst of happiness! How about expressing it with a little dance?",
		answers: [
			{answer: "Yes!", points: {Jolly: 4, Lonely: 2}},
			{answer: "No", points: {Calm: 2}}
		]
	},
	{
		question: "You see a parade coming down the street. What do you do?",
		answers: [
			{answer: "Stay on the sidelines", points: {Calm: 2}},
			{answer: "Join the parade!", points: {Jolly: 4, Naive: 4}},
			{answer: "Walk away", points: {Sassy: 4, Lonely: 2}}
		]
	},
	{
		question: "You're in a play with friends. What kind of a role do you prefer?",
		answers: [
			{answer: "Starring role!", points: {Bold: 4}},
			{answer: "Supporting role", points: {Jolly: 4}},
			{answer: "Just a bit part", points: {Quirky: 4}}
		]
	},
	{
		question: "You spot a deserted ship on the high seas! What do you think the ship holds?",
		answers: [
			{answer: "Precious loot!", points: {Naive: 4, Jolly: 2}},
			{answer: "Ghosts!", points: {Timid: 2}},
			{answer: "Nothing! The ship is merely a mirage!", points: {Quiet: 2}}
		]
	},
	{
		question: "You're daydreaming...when your friend sprays you with water! What do you do?",
		answers: [
			{answer: "Get mad!", points: {Hasty: 4}},
			{answer: "Get sad", points: {Lonely: 4}},
			{answer: "Woo-hoo! Water fight!", points: {Jolly: 4, Naive: 4, Impish: 4}}
		]
	},
	{
		question: "You're about to take the last cookie when your friend wolfs it down! What do you do?",
		answers: [
			{answer: "Whatever. It's just a cookie", points: {Calm: 4}},
			{answer: "I unleash my cookie fury!", points: {Relaxed: 4, Jolly: 4}},
			{answer: "I weep for my lost cookie", points: {Lonely: 4}}
		]
	},
	{
		question: "Do you get injured a lot?",
		answers: [
			{answer: "Yes!", points: {Impish: 4, Rash: 4}},
			{answer: "No", points: {Calm: 2}}
		]
	},
	{
		question: "What do you think of jungle exploration?",
		answers: [
			{answer: "Sounds fun!", points: {Impish: 4, Naive: 2}},
			{answer: "Not interested", points: {Quirky: 3, Timid: 2}}
		]
	},
	{
		question: "Have you ever upset a friend when you were just kidding around?",
		answers: [
			{answer: "Yes", points: {Naive: 4, Impish: 2}},
			{answer: "No", points: {Calm: 4}}
		]
	},
	{
		question: "You see a ball on the ground. What do you do?",
		answers: [
			{answer: "Kick it!", points: {Hasty: 2, Sassy: 2}},
			{answer: "Throw it!", points: {Impish: 2}},
			{answer: "Spiff it up, shiny and new!", points: {Lonely: 4}}
		]
	},
	{
		question: "Have you ever wanted to communicate with aliens from another planet?",
		answers: [
			{answer: "Yes!", points: {Naive: 4}},
			{answer: "No", points: {Quiet: 2}}
		]
	},
	{
		question: "Your friends seem to be having a fun chat out of earshot. What do you do?",
		answers: [
			{answer: "Join them and chat along!", points: {Naive: 4}},
			{answer: "Nothing... I'm not interested", points: {Lonely: 4}},
			{answer: "Eavesdrop from a distance!", points: {Timid: 2}}
		]
	},
	{
		question: "You think you hear someone call your name. But no one's around... so what was it?",
		answers: [
			{answer: "Just my imagination", points: {Relaxed: 4}},
			{answer: "Someone fooling around", points: {Naive: 4, Bold: 2}},
			{answer: "A ghost! ", points: {Timid: 4}}
		]
	},
	{
		question: "You muster your courage and go to a graveyard at night... and see a woman soaked to the skin just standing there! What do you do?",
		answers: [
			{answer: "Run away at full speed!", points: {Timid: 2}},
			{answer: "So what? It's just a lady", points: {Naive: 4, Sassy: 2}},
			{answer: "Drop down and play dead!", points: {Rash: 4}}
		]
	},
	{
		question: "The phone's ringing! What do you do?",
		answers: [
			{answer: "Answer right away!", points: {Hasty: 4, Lonely: 4}},
			{answer: "Wait a bit before answering", points: {Quiet: 2}},
			{answer: "Ignore it and let it ring", points: {Timid: 2}}
		]
	},
	{
		question: "Your friend is crying right in front of you! What made that happen?",
		answers: [
			{answer: "Someone bullied my friend!", points: {Hasty: 4}},
			{answer: "My friend fell down, no doubt!", points: {Quiet: 4}},
			{answer: "I wonder if it's my fault?", points: {Timid: 2}}
		]
	},
	{
		question: "You run into a new person that you haven't talked to very much before. What do you do?",
		answers: [
			{answer: "Make small talk", points: {Calm: 2}},
			{answer: "Say nothing!", points: {Quirky: 2}},
			{answer: "Make an excuse to get away!", points: {Timid: 4}}
		]
	},
	{
		question: "Do you change the channels often while watching TV?",
		answers: [
			{answer: "Yes!", points: {Hasty: 4}},
			{answer: "No", points: {Calm: 2}}
		]
	},
	{
		question: "You don't get bothered by noise and ruckus nearby, do you?",
		answers: [
			{answer: "Yes!", points: {Bold: 4, Relaxed: 2}},
			{answer: "Not at all", points: {Lonely: 4, Hasty: 2}}
		]
	},
	{
		question: "Do you have lots of stuff you bought, thinking it was all cool, but don't use anymore?",
		answers: [
			{answer: "Yes", points: {Quirky: 4, Rash: 2, Hasty: 2}},
			{answer: "No", points: {Quiet: 2}}
		]
	},
	{
		question: "You find something at a great bargain! What do you do?",
		answers: [
			{answer: "Buy it right away!", points: {Hasty: 4}},
			{answer: "Think about whether you need it", points: {Quiet: 2}},
			{answer: "Demand an even bigger discount!", points: {Bold: 4}}
		]
	},
	{
		question: "Are you a rebel at heart?",
		answers: [
			{answer: "Totally!", points: {Sassy: 4}},
			{answer: "Of course not", points: {Calm: 2}}
		]
	},
	{
		question: "Do you like being the center of attention?",
		answers: [
			{answer: "Yes!", points: {Lonely: 4, Sassy: 4}},
			{answer: "Not at all", points: {Relaxed: 2}}
		]
	},
	{
		question: "When walking in a group, do you tend to be the one at the front?",
		answers: [
			{answer: "Of course!", points: {Sassy: 4, Lonely: 2}},
			{answer: "No", points: {Calm: 4, Quirky: 2}}
		]
	},
	{
		question: "Are you a city person or a country person?",
		answers: [
			{answer: "I like the city!", points: {Lonely: 4, Sassy: 2}},
			{answer: "I like the country!", points: {Calm: 4}},
			{answer: "I like them both!", points: {Quirky: 4}}
		]
	},
	{
		question: "Do you often cancel plans to meet others at the last second?",
		answers: [
			{answer: "Yes", points: {Quirky: 4, Rash: 4}},
			{answer: "No", points: {Calm: 2}}
		]
	},
	{
		question: "Do you often forget to lock the door when you go out?",
		answers: [
			{answer: "Yes", points: {Rash: 4, Bold: 2}},
			{answer: "No", points: {Quiet: 2}}
		]
	}
];

var questionsEOS = [
	{
		question: "Are you truly sincere when you apologize?",
		answers: [
			{answer: "Of course", points: {Bold: 1, Docile: 2}},
			{answer: "That's not easy to admit!", points: {Lonely: 1, Timid: 2}}
		]
	},
	{
		question: "Did you make any New Year's resolutions?",
		answers: [
			{answer: "Of course!", points: {Hardy: 2}},
			{answer: "Nope", points: {Quirky: 2, Rash: 1}},
			{answer: "What are those?", points: {Relaxed: 2}}
		]
	},
	{
		question: "Do you like karaoke?",
		answers: [
			{answer: "Yes", points: {Jolly: 2, Sassy: 2}},
			{answer: "No", points: {Hasty: 1, Timid: 1}}
		]
	},
	{
		question: "Do you like lively parties?",
		answers: [
			{answer: "Yes", points: {Jolly: 2, Lonely: 1}},
			{answer: "No", points: {Quiet: 1}}
		]
	},
	{
		question: "Do you prefer to be busy or to have a lot of free time?",
		answers: [
			{answer: "Being busy", points: {Lonely: 2, Sassy: 1}},
			{answer: "Free time", points: {Calm: 2}},
			{answer: "In between", points: {Quirky: 2}}
		]
	},
	{
		question: "Do you prefer to play outside rather than inside?",
		answers: [
			{answer: "Yes", points: {Bold: 1, Jolly: 2, Relaxed: 1}},
			{answer: "No", points: {Calm: 1}}
		]
	},
	{
		question: "Do you think blaming something you did on someone else is sometimes necessary?",
		answers: [
			{answer: "Of course!", points: {Quiet: 2, Sassy: 2}},
			{answer: "No way!", points: {Brave: 2}}
		]
	},
	{
		question: "Do you think it's important to always aim to be the best?",
		answers: [
			{answer: "Of course!", points: {Lonely: 1, Sassy: 1}},
			{answer: "No", points: {Calm: 2, Quirky: 1}}
		]
	},
	{
		question: "Do you think it's important to be fashionably late?",
		answers: [
			{answer: "Yes", points: {Bold: 2, Quiet: 2}},
			{answer: "No", points: {Brave: 2}},
			{answer: "I don't know", points: {Docile: 2}}
		]
	},
	{
		question: "Do you think that, no matter what, life goes on?",
		answers: [
			{answer: "All the time!", points: {Jolly: 1, Relaxed: 2}},
			{answer: "Never", points: {Quiet: 1}}
		]
	},
	{
		question: "Do you think you have good study habits?",
		answers: [
			{answer: "Yes", points: {Docile: 2}},
			{answer: "No", points: {Naive: 2, Rash: 1}},
			{answer: "Well, I never lose at sports!", points: {Impish: 2}}
		]
	},
	{
		question: "Do you want to be famous?",
		answers: [
			{answer: "Yes", points: {Lonely: 2, Sassy: 2}},
			{answer: "No", points: {Relaxed: 1}}
		]
	},
	{
		question: "Do you want to be taller someday?",
		answers: [
			{answer: "Totally!", points: {Sassy: 2}},
			{answer: "Of course not", points: {Calm: 1}}
		]
	},
	{
		question: "Everyone around you is laughing hard at something you think is pretty boring. What do you do?",
		answers: [
			{answer: "Nothing, really", points: {Brave: 2, Bold: 1}},
			{answer: "Laugh along", points: {Lonely: 1, Timid: 2}},
			{answer: "It depends on the situation", points: {Quiet: 1, Quirky: 1}}
		]
	},
	{
		question: "Everyone's sharing a dessert, and there's an extra piece. What do you do?",
		answers: [
			{answer: "Don't tell anyone", points: {Bold: 2, Timid: 1}},
			{answer: "Let everyone know", points: {Docile: 2, Rash: 2}},
			{answer: "First come, first served!", points: {Impish: 2}}
		]
	},
	{
		question: "Good news and bad news... Which one do you want to hear first?",
		answers: [
			{answer: "The good news", points: {Relaxed: 2}},
			{answer: "The bad news", points: {Bold: 1, Naive: 2}},
			{answer: "I don't want either", points: {Timid: 2}}
		]
	},
	{
		question: "Have you ever accidentally called a teacher ''Mom'' or ''Dad''?",
		answers: [
			{answer: "Yes", points: {Rash: 2}},
			{answer: "No", points: {Quiet: 2}}
		]
	},
	{
		question: "Have you ever blurted something out without thinking about the consequences first?",
		answers: [
			{answer: "Yes", points: {Lonely: 2, Relaxed: 2}},
			{answer: "No", points: {Hardy: 1}}
		]
	},
	{
		question: "Have you ever forgotten you bought something and bought another one?",
		answers: [
			{answer: "Yes", points: {Hasty: 1, Quirky: 2, Rash: 1}},
			{answer: "No", points: {Quiet: 1}}
		]
	},
	{
		question: "Have you ever looked at your reflection in a mirror and thought, ''What a cool person''?",
		answers: [
			{answer: "Certanly", points: {Jolly: 1, Naive: 1, Sassy: 2}},
			{answer: "Well, not really...", points: {Hardy: 1}}
		]
	},
	{
		question: "Have you ever realized you were hogging the conversation?",
		answers: [
			{answer: "Yes", points: {Rash: 2, Sassy: 2}},
			{answer: "No", points: {Docile: 1, Quiet: 1}}
		]
	},
	{
		question: "Have you ever said ''nice to meet you'' to someone you've met previously?",
		answers: [
			{answer: "Yes", points: {Brave: 2, Relaxed: 1}},
			{answer: "No", points: {Calm: 1}}
		]
	},
	{
		question: "Have you ever thought that if you dug in your backyard you could find buried treasure?",
		answers: [
			{answer: "Yes", points: {Naive: 2}},
			{answer: "No", points: {Quiet: 1}}
		]
	},
	{
		question: "Have you ever told a joke that just completely fell flat?",
		answers: [
			{answer: "Yes", points: {Impish: 1, Naive: 2}},
			{answer: "No", points: {Calm: 2}}
		]
	},
	{
		question: "Hey, what's that? There's someone behind you! So... did you look just now?",
		answers: [
			{answer: "Don't do that! It scared me!", points: {Timid: 2}},
			{answer: "OK, I admit it. You tricked me", points: {Docile: 2}},
			{answer: "No way. I didn't fall for it", points: {Lonely: 2, Sassy: 2}},
			{answer: "Huh? What?", points: {Relaxed: 2}}
		]
	},
	{
		question: "How are your mornings?",
		answers: [
			{answer: "Always in a rush!", points: {Brave: 2, Impish: 2}},
			{answer: "Always perfect", points: {Quiet: 1}},
			{answer: "They are OK", points: {Docile: 1, Timid: 2}}
		]
	},
	{
		question: "If you saw someone doing something bad, could you scold them?",
		answers: [
			{answer: "Of course!", points: {Bold: 1, Brave: 2, Sassy: 2}},
			{answer: "Not really", points: {Timid: 1}}
		]
	},
	{
		question: "Once you've decided something, do you see it through to the end?",
		answers: [
			{answer: "Yes", points: {Hardy: 2}},
			{answer: "No", points: {Quirky: 2}}
		]
	},
	{
		question: "The people at the next table are singing for someone's birthday. What do you do?",
		answers: [
			{answer: "Stay on the sidelines", points: {Calm: 1}},
			{answer: "Sing along!", points: {Jolly: 2, Naive: 2}},
			{answer: "Walk away", points: {Lonely: 1, Sassy: 2}}
		]
	},
	{
		question: "The phone's ringing! What do you do?",
		answers: [
			{answer: "Answer right away!", points: {Hasty: 2, Lonely: 2}},
			{answer: "Wait a bit before answering", points: {Quiet: 1}},
			{answer: "Ignore it and let it ring", points: {Timid: 1}}
		]
	},
	{
		question: "There's a rumor around about a ghost haunting the school bathrooms! What do you do?",
		answers: [
			{answer: "Scary...bathrooms!", points: {Docile: 2, Timid: 1}},
			{answer: "Go in there anyway", points: {Bold: 1, Jolly: 2, Relaxed: 1}}
		]
	},
	{
		question: "What's your studying style?",
		answers: [
			{answer: "Working hard, every day", points: {Hardy: 2}},
			{answer: "If I remember to...", points: {Quirky: 2, Hasty: 1}},
			{answer: "I just cover what I need to", points: {Quiet: 1}},
			{answer: "I can't really do it alone...", points: {Lonely: 2}}
		]
	},
	{
		question: "When you see a switch, do you feel an overwhelming urge to flip it?",
		answers: [
			{answer: "Yes", points: {Hasty: 2}},
			{answer: "No", points: {Calm: 1}}
		]
	},
	{
		question: "You discover a beat-up-looking treasure chest in some ruins. What do you do?",
		answers: [
			{answer: "Open it!", points: {Brave: 2, Hasty: 2, Impish: 2, Rash: 1}},
			{answer: "Get help opening it", points: {Timid: 1}}
		]
	},
	{
		question: "You fail miserably! Everyone found out, and they're disappointed in you... What do you do?",
		answers: [
			{answer: "Try and hide", points: {Timid: 1}},
			{answer: "Think of an excuse", points: {Naive: 2, Sassy: 1}},
			{answer: "Drop down and play dead!", points: {Rash: 2}}
		]
	},
	{
		question: "You find something at a great bargain price! What do you do?",
		answers: [
			{answer: "Buy it right away!", points: {Hasty: 2}},
			{answer: "Think about whether you need it", points: {Quiet: 1}},
			{answer: "Demand an even bigger discount!", points: {Bold: 2}}
		]
	},
	{
		question: "You have a really important test tomorrow! What do you do?",
		answers: [
			{answer: "Study all night long", points: {Hardy: 2}},
			{answer: "Wing it! I'm sure it will be fine!", points: {Relaxed: 2}},
			{answer: "Test?! I think I have a fever...", points: {Naive: 2}}
		]
	},
	{
		question: "You notice that a toy you bought for full price yesterday is marked down to half price today! How do you feel?",
		answers: [
			{answer: "Heartbroken...", points: {Hardy: 2}},
			{answer: "Aaaargh!", points: {Docile: 2}},
			{answer: "Bad timing, I guess...", points: {Bold: 2, Calm: 2}}
		]
	},
	{
		question: "You run into a new person that you haven't talked to very much before. What do you do?",
		answers: [
			{answer: "Make small talk", points: {Calm: 1}},
			{answer: "Say nothing!", points: {Quirky: 1}},
			{answer: "Make an excuse to get away!", points: {Timid: 2}}
		]
	},
	{
		question: "You see a big and comfortable bed. Your first reaction is to...",
		answers: [
			{answer: "Jump on it!", points: {Hasty: 1, Sassy: 1}},
			{answer: "Belly flop!", points: {Impish: 2}},
			{answer: "Curl up", points: {Lonely: 2}}
		]
	},
	{
		question: "You see a cake that is past its expiration date, but only by one day. What do you do?",
		answers: [
			{answer: "Not a problem! Chow time!", points: {Brave: 2, Relaxed: 1}},
			{answer: "Think about it briefly, then decide", points: {Timid: 1}},
			{answer: "Get someone to try it first", points: {Bold: 2}}
		]
	},
	{
		question: "You take off your shoes to realize your socks are two different colors! What do you do?",
		answers: [
			{answer: "Get embarrassed!", points: {Docile: 2}},
			{answer: "Again?!", points: {Rash: 2}},
			{answer: "I meant to do that!", points: {Jolly: 2}}
		]
	},
	{
		question: "You want to reveal that you like someone a whole bunch! What do you do?",
		answers: [
			{answer: "Show it a little by playing together", points: {Jolly: 2, Quiet: 1}},
			{answer: "Make it obvious by...playing a prank!", points: {Lonely: 2, Naive: 1}},
			{answer: "State it clearly for all to hear!", points: {Bold: 1, Brave: 2, Impish: 2}},
			{answer: "Keep it to myself! It's too risky!", points: {Timid: 1}}
		]
	},
	{
		question: "Your friend has made a meal that tastes terrible. They ask, ''How is it?'' You say...?",
		answers: [
			{answer: "''Terrible!''", points: {Brave: 1, Quiet: 1}},
			{answer: "Just smile", points: {Calm: 2, Lonely: 1}},
			{answer: "''Um, it's...good''", points: {Rash: 1, Timid: 1}}
		]
	},
	{
		question: "Your friend is running a little late to meet you. Is that OK?",
		answers: [
			{answer: "Yes", points: {Bold: 2, Relaxed: 1}},
			{answer: "Not at all!", points: {Hasty: 1, Lonely: 2}}
		]
	},
	{
		question: "Your friend offers to treat you to dinner. What do you do?",
		answers: [
			{answer: "I'm there!", points: {Bold: 2}},
			{answer: "Allow me", points: {Jolly: 2}},
			{answer: "Thanks...", points: {Quirky: 2}}
		]
	},
	{
		question: "Your friend suddenly won't listen to you, when everything was fine yesterday. What happened?",
		answers: [
			{answer: "Maybe they're sick", points: {Hasty: 2}},
			{answer: "They're lost in thought", points: {Quiet: 2}},
			{answer: "What?! Why?!", points: {Timid: 1}}
		]
	},
	{
		question: "Your friend takes a spectacular fall! What do you do?",
		answers: [
			{answer: "Help my friend up!", points: {Brave: 2, Lonely: 1}},
			{answer: "Laugh! It's too funny!", points: {Impish: 2, Naive: 2, Rash: 1}}
		]
	},
	{
		question: "Your friends seem to be making plans to hang out, just out of earshot. You think...",
		answers: [
			{answer: "I want to go too!", points: {Naive: 2}},
			{answer: "No big deal", points: {Lonely: 2}},
			{answer: "Will they invite me?", points: {Timid: 1}}
		]
	},
	{
		question: "You're about to buy a popular game when someone else gets the last copy! How do you feel?",
		answers: [
			{answer: "Whatever", points: {Calm: 2}},
			{answer: "Annoyed. I was here first!", points: {Jolly: 2, Relaxed: 2}},
			{answer: "I shed a few tears", points: {Lonely: 2}}
		]
	},
	{
		question: "You're at a movie theater. What are you there to see?",
		answers: [
			{answer: "An action movie", points: {Impish: 2, Sassy: 1}},
			{answer: "A drama", points: {Hardy: 2}},
			{answer: "A romantic movie", points: {Quirky: 2}}
		]
	},
	{
		question: "You're daydreaming...when your friend sprays you with water! What do you do?",
		answers: [
			{answer: "Answer right away!", points: {Hasty: 2}},
			{answer: "Wait a bit before answering", points: {Lonely: 2}},
			{answer: "Woo-hoo! Water fight!", points: {Impish: 2, Jolly: 2, Naive: 2}}
		]
	},
	{
		question: "You're eating at a very fancy restaurant known for its food. Which course do you select?",
		answers: [
			{answer: "Seared steak", points: {Impish: 2, Naive: 2}},
			{answer: "Healthy fish", points: {Hardy: 1}},
			{answer: "Anything! It's all good!", points: {Bold: 2}}
		]
	},
	{
		question: "You're hiking up a mountain when you reach diverging paths. Which kind do you take?",
		answers: [
			{answer: "Narrow", points: {Impish: 2, Naive: 1}},
			{answer: "Wide", points: {Quirky: 2, Timid: 1}}
		]
	},
	{
		question: "You're in a completely silent assembly when you suddenly hear someone pass gas! How do you react?",
		answers: [
			{answer: "Roll on the floor laughing!", points: {Jolly: 2, Naive: 2}},
			{answer: "Just let it go by...", points: {Docile: 1, Impish: 1}},
			{answer: "Who was that?!", points: {Brave: 2}}
		]
	},
	{
		question: "You're in class when you realize that you really have to go to the restroom! What do you do?",
		answers: [
			{answer: "Ask for permission to leave", points: {Brave: 2, Bold: 2}},
			{answer: "Sneak out", points: {Hasty: 1}},
			{answer: "Hold on until class ends!", points: {Timid: 1}}
		]
	},
	{
		question: "You're on a stroll when a TV crew pounces on you for an interview. What do you do?",
		answers: [
			{answer: "Run away! How embarrassing!", points: {Timid: 2}},
			{answer: "Answer questions properly", points: {Brave: 2, Sassy: 2}},
			{answer: "Yuck it up! Woo-hoo! I'm on TV!", points: {Bold: 1, Naive: 2}}
		]
	},
	{
		question: "You're packing your classroom's snacks for a picnic when you get hungry. What do you do?",
		answers: [
			{answer: "Eat just a tiny bit", points: {Hasty: 2}},
			{answer: "Hold myself back and pack it all up", points: {Hardy: 2}},
			{answer: "What snacks? They're in my belly!", points: {Rash: 2}}
		]
	},
	{
		question: "You're running a marathon, and at the start you fall flat on your face! What will you do?",
		answers: [
			{answer: "I'm not giving up yet!", points: {Brave: 1, Hardy: 2}},
			{answer: "Just give up", points: {Quirky: 2}},
			{answer: "Shout, ''START OVER!''", points: {Bold: 2, Rash: 1}}
		]
	},
	{
		question: "You've been asked to do a difficult task. What will you do?",
		answers: [
			{answer: "Do it myself", points: {Brave: 1, Hardy: 2}},
			{answer: "Ask someone to help", points: {Codile: 2}},
			{answer: "Make someone else do it!", points: {Bold: 2, Sassy: 1}}
		]
	},
	{
		question: "You've been handed a large bag as a souvenir. What do you do?",
		answers: [
			{answer: "Wait until I get home to open it", points: {Docile: 2}},
			{answer: "Shake it!", points: {Naive: 2}},
			{answer: "Open it!", points: {Rash: 2}},
			{answer: "It's smaller than everyone else's...", points: {Lonely: 2}}
		]
	},
	{
		question: "You've been invited to a wonderful party. It's time for the party to start, but there's nobody there! You think...?",
		answers: [
			{answer: "Did something happen?", points: {Docile: 2, Lonely: 2}},
			{answer: "Maybe I have the day wrong?", points: {Jolly: 2, Relaxed: 2}},
			{answer: "Let's get this party started!", points: {Bold: 2}}
		]
	},
	{
		question: "You've just stuffed yourself with a good meal when a great dessert arrives. What do you do?",
		answers: [
			{answer: "Eat it. Who cares if I'm stuffed?", points: {Hasty: 2, Rash: 1}},
			{answer: "Turn it down. It's too fattening!", points: {Hardy: 1}},
			{answer: "Yum! I love dessert the most!", points: {Bold: 2, Jolly: 2, Relaxed: 1}}
		]
	},
	{
		question: "You've won big on a raffle ticket! You say...",
		answers: [
			{answer: "Woo-hoo!", points: {Jolly: 1, Naive: 2}},
			{answer: "I can't believe it...", points: {Timid: 1}},
			{answer: "This is my little secret", points: {Quiet: 2}}
		]
	}
];

var Bulbasaur = document.createElement("img");
var Charmander = document.createElement("img");
var Squirtle = document.createElement("img");
var Pikachu = document.createElement("img");
var Meowth = document.createElement("img");
var Psyduck = document.createElement("img");
var Machop = document.createElement("img");
var Cubone = document.createElement("img");
var Vulpix = document.createElement("img");
var Eevee = document.createElement("img");
var Chikorita = document.createElement("img");
var Cyndaquil = document.createElement("img");
var Totodile = document.createElement("img");
var Phanpy = document.createElement("img");
var Treecko = document.createElement("img");
var Torchic = document.createElement("img");
var Mudkip = document.createElement("img");
var Skitty = document.createElement("img");
var Turtwig = document.createElement("img");
var Chimchar = document.createElement("img");
var Piplup = document.createElement("img");
var Munchlax = document.createElement("img");
var Shinx = document.createElement("img");
var Riolu = document.createElement("img");
var MissingImage = document.createElement("img");

Bulbasaur.src = "Portraits/Bulbasaur.png";
Charmander.src = "Portraits/Charmander.png";
Squirtle.src = "Portraits/Squirtle.png";
Pikachu.src = "Portraits/Pikachu.png";
Meowth.src = "Portraits/Meowth.png";
Psyduck.src = "Portraits/Psyduck.png";
Machop.src = "Portraits/Machop.png";
Cubone.src = "Portraits/Cubone.png";
Vulpix.src = "Portraits/Vulpix.png";
Eevee.src = "Portraits/Eevee.png";
Chikorita.src = "Portraits/Chikorita.png";
Cyndaquil.src = "Portraits/Cyndaquil.png";
Totodile.src = "Portraits/Totodile.png";
Phanpy.src = "Portraits/Phanpy.png";
Treecko.src = "Portraits/Treecko.png";
Torchic.src = "Portraits/Torchic.png";
Mudkip.src = "Portraits/Mudkip.png";
Skitty.src = "Portraits/Skitty.png";
Turtwig.src = "Portraits/Turtwig.png";
Chimchar.src = "Portraits/Chimchar.png";
Piplup.src = "Portraits/Piplup.png";
Munchlax.src = "Portraits/Munchlax.png";
Shinx.src = "Portraits/Shinx.png";
Riolu.src = "Portraits/Riolu.png";
MissingImage.src = "Portraits/MissingImage.png";

var questionIndex = 0;

var questionsRBminus8 = questionsRB.length - 8;
var questionsTDminus8 = questionsTD.length - 8;
var questionsEOSminus8 = questionsEOS.length - 8;

var question;
var questionElement;
var answersElement;
var resultElement;
var textMElement;
var textFElement;
var portraitMElement;
var portraitFElement;
var retryElement
var parent;
var endspeech;

function generateQuestionRB()
{
	if (questionsRB.length === questionsRBminus8)
	{
		questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		
		textMElement = document.getElementById("textM");
		textMElement.style.display = "block";
	
		textFElement = document.getElementById("textF");
		textFElement.style.display = "block";
		
		portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
	
		portraitFElement = document.getElementById("portraitF");
		portraitFElement.style.display = "block";
		
		retryElement = document.getElementById("retry");
		retryElement.style.display = "block";
		
		switch(calculateResult())
		{
			case "Docile":
			{
				endspeech = "<p>You seem to be...</p><p>The Docile type!</p><p>You're quite sensitive to others!</p><p>You listen attentively and respectfully, and you're quick to pick up on things.</p><p>Because you're so good at listening, do you find that your friends tell you their problems and concerns often?</p><p>Perhaps people laugh at you sometimes for being so earnest and not recognizing jokes for what they are.</p><p>But you're always honestly surprised and bashful about this aspect of yourself...</p><p>And then honestly laugh about it!</p><p>So, a Docile, sensitive type like you must be...</p><p>";
				break;
			}
			case "Hardy":
			{
				endspeech = "<p>You seem to be...</p><p>The Hardy type!</p><p>And you're so determined!</p><p>You don't whine or feel sorry for yourself, and you never need help with anything. You also have a strong sense of responsibility.</p><p>You work toward your goals steadily and never require attention along the way.</p><p>Your resilient spirit is the only thing you need to guide you toward your goals.</p><p>But be careful! You risk wearing yourself out if you work too long all on your own!</p><p>You should recognize that sometimes you need help from friends.</p><p>So, a Hardy, determined type like you must be...</p><p>";
				break;
			}
			case "Jolly":
			{
				endspeech = "<p>You seem to be...</p><p>The Jolly type!</p><p>You have a good sense of humor, and you're compassionate. You're always making others around you laugh.</p><p>You have a sunny, positive outlook, and you have a vitality that raises the lowest of spirits to giddy heights!</p><p>Yet, for all your great cheer, you're also open to tears...</p><p>But you bounce between laughter and tears so easily!</p><p>What an adventure life must be like for you, bouncing around like that all day!</p><p>So, a Jolly type like you must be...</p><p>";
				break;
			}
			case "Impish":
			{
				endspeech = "<p>You seem to be...</p><p>The Impish type!</p><p>You really like to play a lot! And you enjoy eating a lot!</p><p>You love competition, but you hate losing.</p><p>Your personality seems crystal clear to others. With you, what you see is what you get! You cheer others with your dazzling smile.</p><p>But you may be afraid of showing what's in your heart and revealing your true self.</p><p>You may not want to keep your worries to yourself. You're only human, so ask your friends for advice when you need it.</p><p>So, an Impish type like you must be...<p>";
				break;
			}
			case "Quirky":
			{
				endspeech = "<p>You seem to be...</p><p>The Quirky type!</p><p>You want to be on the cutting edge of fashion! You want to own all the latest stuff, right?</p><p>But you grow bored of your old things and only like new things!</p><p>You're true to your emotions, and you follow your desires.</p><p>People have a hard time keeping up with you because you change so quickly.</p><p>You may want to reflect upon how your words and actions affect others.</p><p>So, a Quirky type like you must be...<p>";
				break;
			}
			case "Relaxed":
			{
				endspeech = "<p>You seem to be...</p><p>The Relaxed type!</p><p>You're so casual, leisurely, and carefree.</p><p>You don't rush or stress yourself out, and you don't worry about anything.</p><p>You like to take a seat and kick up your feet!</p><p>Oh, yes! You definitely have an easygoing personality, and you don't sweat the details.</p><p>People naturally flock to you because they find you to be a free spirit, which is so refreshing!</p><p>So, a Relaxed type like you must be...<p>";
				break;
			}
			case "Brave":
			{
				endspeech = "<p>You seem to be...</p><p>The Brave type!</p><p>You don't know the meaning of fear! You're not afraid to keep moving forward in the face of danger.</p><p>You also have a strong sense of justice and can't turn a blind eye to someone in trouble.</p><p>But you sometimes push your own personal sense of justice a little too hard. Be careful that you don't get too pushy!</p><p>So, a Brave type like you must be...<p>";
				break;
			}
			case "Lonely":
			{
				endspeech = "<p>You seem to be...</p><p>The Lonely type, at least a little bit!</p><p>You might find that surprising, but do you think it might be a little true?</p><p>You know what they say, though... We're all a bit lonely every now and then!</p><p>You probably keep this fact of life to yourself, though.</p><p>But if there's one thing that brings us all together... it's our need to go it solo!</p><p>So, a Lonely and solitary type like you must be...<p>";
				break;
			}
			case "Timid":
			{
				endspeech = "<p>You seem to be...</p><p>The Timid type. You're quite gentle!</p><p>You're sometimes a little shy about new things, aren't you?</p><p>Do you miss out on some experiences because you get worried about the newness of the challenge?</p><p>Of course, there's also a great benefit in being cautious, isn't there?</p><p>After all, it keeps you nice and safe!</p><p>You live life at your own speed, with no hurries and no worries!</p><p>So, a Timid and gentle type like you must be...<p>";
				break;
			}
			case "Naive":
			{
				endspeech = "<p>You seem to be...</p><p>The Naive type! You're so open and innocent!</p><p>What a strong sense of curiosity you have! And you state your opinions purely, sharing exactly what you think.</p><p>You also have an artistic spirit that isn't restrained by social conventions! You startle people with your spontaneity and vision.</p><p>But when you overdo it, other people can have a hard time keeping up with you...</p><p>Have you noticed people looking at you oddly? As if for no apparent reason?</p><p>So, a Naive, innocent type like you must be...<p>";
				break;
			}
			case "Sassy":
			{
				endspeech = "<p>You seem to be...</p><p>The Sassy type! Or at least somewhat sassy!</p><p>You don't like taking orders. You're a little rebellious and like to disagree.</p><p>You're a lone wolf! You like to keep your distance from groups and go off to do things on your own.</p><p>Older folks may be the ones who find you the most disagreeable, even selfish.</p><p>But people younger than you tend to really admire you!</p><p>So, a Sassy type like you must be...<p>";
				break;
			}
			case "Hasty":
			{
				endspeech = "<p>You seem to be...</p><p>The Hasty type!</p><p>You talk quickly! You eat quickly! You walk quickly!</p><p>People often see you as a hard worker because you're always moving around so fast!</p><p>But be careful! If you always rush so fast, you may make mistakes more often than others do. And what a waste that would be!</p><p>Relax every now and then with a nice, deep breath!</p><p>So, a Hasty type like you must be...<p>";
				break;
			}
			case "Calm":
			{
				endspeech = "<p>You seem to be...</p><p>The Calm type!</p><p>You're very compassionate and considerate, and you put friends ahead of yourself.</p><p>You're so generous and kindhearted that you can laugh, forgive and forget when your friends make mistakes.</p><p>But be aware that your compassion can sometimes get the best of you, putting you too far behind everyone else!</p><p>So, a Calm type like you must be...<p>";
				break;
			}
			default:
			{
				endspeech = "<p>You seem to be...</p><p>The... uh, strange...</p><p>You must be a very... something person.</p><p>However, you are reading this, thus it means that something went wrong on my end.</p><p>But, be aware, you did nothing wrong!</p><p>So, uh... i suggest you try it again, sorry for the inconvinience, and if the problem persists, let me know on github.";
				break;
			}
		}
		
		resultElement.innerHTML = endspeech;
		
		parent = document.getElementById("portraitM");
		
		switch(calculateResult())
		{
			case "Docile":
			{
				parent.appendChild(Bulbasaur);
				break;
			}
			case "Hardy":
			{
				parent.appendChild(Charmander);
				break;
			}
			case "Jolly":
			{
				parent.appendChild(Squirtle);
				break;
			}
			case "Impish":
			{
				parent.appendChild(Pikachu);
				break;
			}
			case "Quirky":
			{
				parent.appendChild(Meowth);
				break;
			}
			case "Relaxed":
			{
				parent.appendChild(Psyduck);
				break;
			}
			case "Brave":
			{
				parent.appendChild(Machop);
				break;
			}
			case "Lonely":
			{
				parent.appendChild(Cubone);
				break;
			}
			case "Timid":
			{
				parent.appendChild(Cyndaquil);
				break;
			}
			case "Naive":
			{
				parent.appendChild(Totodile);
				break;
			}
			case "Sassy":
			{
				parent.appendChild(Treecko);
				break;
			}
			case "Hasty":
			{
				parent.appendChild(Torchic);
				break;
			}
			case "Calm":
			{
				parent.appendChild(Mudkip);
				break;
			}
			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}
		
		parent = document.getElementById("portraitF");
		
		switch(calculateResult())
		{
			case "Calm":
			{
				parent.appendChild(Bulbasaur);
				break;
			}
			case "Brave":
			{
				parent.appendChild(Charmander);
				break;
			}
			case "Relaxed":
			{
				parent.appendChild(Squirtle);
				break;
			}
			case "Hardy":
			{
				parent.appendChild(Pikachu);
				break;
			}
			case "Lonely":
			{
				parent.appendChild(Psyduck);
				break;
			}
			case "Impish":
			{
				parent.appendChild(Cubone);
				break;
			}
			case "Naive":
			{
				parent.appendChild(Eevee);
				break;
			}
			case "Docile":
			{
				parent.appendChild(Chikorita);
				break;
			}
			case "Jolly":
			{
				parent.appendChild(Totodile);
				break;
			}
			case "Quirky":
			{
				parent.appendChild(Treecko);
				break;
			}
			case "Sassy":
			{
				parent.appendChild(Torchic);
				break;	
			}
			case "Timid":
			{
				parent.appendChild(Mudkip);
				break;
			}
			case "Hasty":
			{
				parent.appendChild(Skitty);
				break;
			}
			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}

		
		return;
	}
	
	textMElement = document.getElementById("textM");
	textMElement.style.display = "none";
	
	textFElement = document.getElementById("textF");
	textFElement.style.display = "none";
	
	portraitMElement = document.getElementById("portraitM");
	portraitMElement.style.display = "none";
	
	portraitFElement = document.getElementById("portraitF");
	portraitFElement.style.display = "none";
	
	resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	retryElement = document.getElementById("retry");
	retryElement.style.display = "none";
	
	if(genpoints.Other == 0)
	{
		questionIndex = Math.floor(Math.random() * questionsRB.length);
	}
	else
	{
		genpoints.Other = 0;
	}
	
	question = questionsRB[questionIndex];

	questionElement = document.getElementById("question");
	questionElement.innerHTML = question.question;

	answersElement = document.getElementById("answers");
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
		})(answer.points);

		answersElement.appendChild(button);
		
	}
}

function generateQuestionTD()
{
	if (questionsTD.length === questionsTDminus8)
	{
		questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		
		textMElement = document.getElementById("textM");
		textMElement.style.display = "block";
	
		textFElement = document.getElementById("textF");
		textFElement.style.display = "block";
		
		portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
	
		portraitFElement = document.getElementById("portraitF");
		portraitFElement.style.display = "block";
		
		retryElement = document.getElementById("retry");
		retryElement.style.display = "block";
		
		switch(calculateResult())
		{
			case "Lonely":
			{
				endspeech = "<p>You seem to be...</p><p>The Lonely type, at least a little bit!</p><p>You might find that surprising, but do you think it might be a little true?</p><p>You know what they say, though... We're all a bit lonely every now and then!</p><p>You probably keep this fact of life to yourself, though.</p><p>But if there's one thing that brings us all together... it's our need to go it solo!</p><p>So, a Lonely and solitary type like you must be...<p>";
				break;
			}
			case "Docile":
			{
				endspeech = "<p>You seem to be...</p><p>The Docile type!</p><p>You're quite sensitive to others!</p><p>You listen attentively and respectfully, and you're quick to pick up on things.</p><p>Because you're so good at listening, do you find that your friends tell you their problems and concerns often?</p><p>Perhaps people laugh at you sometimes for being so earnest and not recognizing jokes for what they are.</p><p>But you're always honestly surprised and bashful about this aspect of yourself...</p><p>And then honestly laugh about it!</p><p>So, a Docile, sensitive type like you must be...<p>";
				break;
			}
			case "Quirky":
			{
				endspeech = "<p>You seem to be...</p><p>The Quirky type!</p><p>You want to be on the cutting edge of fashion! You want to own all the latest stuff, right?</p><p>But you grow bored of your old things and only like new things!</p><p>You're true to your emotions, and you follow your desires.</p><p>People have a hard time keeping up with you because you change so quickly.</p><p>You may want to reflect upon how your words and actions affect others.</p><p>So, a Quirky type like you must be...<p>";
				break;
			}
			case "Brave":
			{
				endspeech = "<p>You seem to be...</p><p>The Brave type!</p><p>You don't know the meaning of fear! You're not afraid to keep moving forward in the face of danger.</p><p>You also have a strong sense of justice and can't turn a blind eye to someone in trouble.</p><p>But you sometimes push your own personal sense of justice a little too hard. Be careful that you don't get too pushy!</p><p>So, a Brave type like you must be...<p>";
				break;
			}
			case "Sassy":
			{
				endspeech = "<p>You seem to be...</p><p>The Sassy type! Or at least somewhat sassy!</p><p>You don't like taking orders. You're a little rebellious and like to disagree.</p><p>You're a lone wolf! You like to keep your distance from groups and go off to do things on your own.</p><p>Older folks may be the ones who find you the most disagreeable, even selfish.</p><p>But people younger than you tend to really admire you!</p><p>So, a Sassy type like you must be...<p>";
				break;
			}
			case "Calm":
			{
				endspeech = "<p>You seem to be...</p><p>The Calm type!</p><p>You're very compassionate and considerate, and you put friends ahead of yourself.</p><p>You're so generous and kindhearted that you can laugh, forgive and forget when your friends make mistakes.</p><p>But be aware that your compassion can sometimes get the best of you, putting you too far behind everyone else!</p><p>So, a Calm type like you must be...<p>";
				break;
			}
			case "Timid":
			{
				endspeech = "<p>You seem to be...</p><p>The Timid type. You're quite gentle!</p><p>You're sometimes a little shy about new things, aren't you?</p><p>Do you miss out on some experiences because you get worried about the newness of the challenge?</p><p>Of course, there's also a great benefit in being cautious, isn't there?</p><p>After all, it keeps you nice and safe!</p><p>You live life at your own speed, with no hurries and no worries!</p><p>So, a Timid and gentle type like you must be...<p>";
				break;
			}
			case "Jolly":
			{
				endspeech = "<p>You seem to be...</p><p>The Jolly type!</p><p>You have a good sense of humor, and you're compassionate. You're always making others around you laugh.</p><p>You have a sunny, positive outlook, and you have a vitality that raises the lowest of spirits to giddy heights!</p><p>Yet, for all your great cheer, you're also open to tears...</p><p>But you bounce between laughter and tears so easily!</p><p>What an adventure life must be like for you, bouncing around like that all day!</p><p>So, a Jolly type like you must be...<p>";
				break;
			}
			case "Quiet":
			{
				endspeech = "<p>You seem to be...</p><p>The Quiet type! And very calm!</p><p>You're great with numbers, and you analyze information before making decisions.</p><p>You rarely make mistakes, because you make decisions so calmly and rationally.</p><p>You also may find it hard to guess what others are thinking, and they may find you a touch cold at times.</p><p>You may not want to keep your feelings to yourself so much of the time.</p><p>So, a Quiet and calm type like you must be...<p>";
				break;
			}
			case "Hardy":
			{
				endspeech = "<p>You seem to be...</p><p>The Hardy type! And you're so determined!</p><p>You don't whine or feel sorry for yourself, and you never need help with anything. You also have a strong sense of responsibility.</p><p>You work toward your goals steadily and never require attention along the way.</p><p>Your resilient spirit is the only thing you need to guide you toward your goals.</p><p>But be careful! You risk wearing yourself out if you work too long all on your own!</p><p>You should recognize that sometimes you need help from friends.</p><p>So, a Hardy, determined type like you must be...<p>";
				break;
			}
			case "Rash":
			{
				endspeech = "<p>You seem to be...</p><p>The Rash type, just a little bit hasty at times!</p><p>You may run out of your house and forget to lock the door once in a while.</p><p>And you may leave things like umbrellas behind when you leave places.</p><p>Maybe you even dash outside in your slippers every now and then!</p><p>Perhaps you even wear your shirts inside out all the time!</p><p>Oh, is that even rasher than you really are? So sorry!</p><p>But know that your friends think your funny little flubs are adorable!</p><p>So, a rash and hasty type like you...</p><p>Oh, wait! One more thing!</p><p>You also sometimes reveal your friends' secrets by accident, don't you!</p><p>Sorry. It had to be said!</p><p>So, without further ado... a Rash type like you must be...<p>";
				break;
			}
			case "Hasty":
			{
				endspeech = "<p>You seem to be...</p><p>The Hasty type!</p><p>You talk quickly! You eat quickly! You walk quickly!</p><p>People often see you as a hard worker because you're always moving around so fast!</p><p>But be careful! If you always rush so fast, you may make mistakes more often than others do. And what a waste that would be!</p><p>Relax every now and then with a nice, deep breath!</p><p>So, a Hasty type like you must be...<p>";
				break;
			}
			case "Bold":
			{
				endspeech = "<p>You seem to be...</p><p>The Bold type!</p><p>You're so brave, and you never back down from anything! And you're also gutsy and brash in a way that others aren't!</p><p>You're not shy about asking to take home all the leftovers at restaurants, right?</p><p>If someone's treating you to dinner, you have no problem with ordering lots of good stuff!</p><p>And you aren't fazed by doing things that most others would think twice about doing.</p><p>Perhaps you don't even notice when others are upset with you!</p><p>You know, you have the potential to become a truly great person... because you'll be the last one standing!</p><p>So, a Bold type like you must be...<p>";
				break;
			}
			case "Naive":
			{
				endspeech = "<p>You seem to be...</p><p>The Naive type! You're so open and innocent!</p><p>What a strong sense of curiosity you have! And you state your opinions purely, sharing exactly what you think.</p><p>You also have an artistic spirit that isn't restrained by social conventions! You startle people with your spontaneity and vision.</p><p>But when you overdo it, other people can have a hard time keeping up with you...</p><p>Have you noticed people looking at you oddly? As if for no apparent reason?</p><p>So, a Naive, innocent type like you must be...<p>";
				break;
			}
			case "Impish":
			{
				endspeech = "<p>You seem to be...</p><p>The Impish type!</p><p>You really like to play a lot! And you enjoy eating a lot!</p><p>You love competition, but you hate losing.</p><p>Your personality seems crystal clear to others. With you, what you see is what you get! You cheer others with your dazzling smile.</p><p>But you may be afraid of showing what's in your heart and revealing your true self.</p><p>You may not want to keep your worries to yourself. You're only human, so ask your friends for advice when you need it.</p><p>So, an Impish type like you must be...<p>";
				break;
			}
			case "Relaxed":
			{
				endspeech = "<p>You seem to be...</p><p>The Relaxed type!</p><p>You're so casual, leisurely, and carefree.</p><p>You don't rush or stress yourself out, and you don't worry about anything.</p><p>You like to take a seat and kick up your feet!</p><p>Oh, yes! You definitely have an easygoing personality, and you don't sweat the details.</p><p>People naturally flock to you because they find you to be a free spirit, which is so refreshing!</p><p>So, a Relaxed type like you...";
				break;
			}
			default:
			{
				endspeech = "<p>You seem to be...</p><p>The... uh, strange...</p><p>You must be a very... something person.</p><p>However, you are reading this, thus it means that something went wrong on my end.</p><p>But, be aware, you did nothing wrong!</p><p>So, uh... i suggest you try it again, sorry for the inconvinience, and if the problem persists, let me know on github.";
				break;
			}
		}
		
		resultElement.innerHTML = endspeech;
		
		parent = document.getElementById("portraitM");
		
		switch(calculateResult())
		{
			case "Lonely":
			{
				parent.appendChild(Bulbasaur);
				break;
			}
			case "Docile":
			{
				parent.appendChild(Charmander);
				break;
			}
			case "Quirky":
			{
				parent.appendChild(Squirtle);
				break;
			}
			case "Brave":
			{
				parent.appendChild(Pikachu);
				break;
			}
			case "Sassy":
			{
				parent.appendChild(Meowth);
				break;
			}
			case "Calm":
			{
				parent.appendChild(Chikorita);
				break;
			}
			case "Timid":
			{
				parent.appendChild(Cyndaquil);
				break;
			}
			case "Jolly":
			{
				parent.appendChild(Totodile);
				break;
			}
			case "Quiet":
			{
				parent.appendChild(Treecko);
				break;
			}
			case "Hardy":
			{
				parent.appendChild(Torchic);
				break;
			}
			case "Rash":
			{
				parent.appendChild(Mudkip);
				break;
			}
			case "Hasty":
			{
				parent.appendChild(Skitty);
				break;
			}
			case "Bold":
			{
				parent.appendChild(Turtwig);
				break;
			}
			case "Naive":
			{
				parent.appendChild(Chimchar);
				break;
			}
			case "Impish":
			{
				parent.appendChild(Piplup);
				break;
			}
			case "Relaxed":
			{
				parent.appendChild(Munchlax);
				break;
			}
			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}
		
		parent = document.getElementById("portraitF");
		
		switch(calculateResult())
		{
			case "Docile":
			{
				parent.appendChild(Bulbasaur);
				break;
			}
			case "Brave":
			{
				parent.appendChild(Charmander);
				break;
			}
			case "Bold":
			{
				parent.appendChild(Squirtle);
				break;
			}
			case "Hasty":
			{
				parent.appendChild(Pikachu);
				break;
			}
			case "Relaxed":
			{
				parent.appendChild(Meowth);
				break;
			}
			case "Quiet":
			{
				parent.appendChild(Chikorita);
				break;
			}
			case "Calm":
			{
				parent.appendChild(Cyndaquil);
				break;
			}
			case "Sassy":
			{
				parent.appendChild(Totodile);
				break;
			}
			case "Hardy":
			{
				parent.appendChild(Treecko);
				break;
			}
			case "Rash":
			{
				parent.appendChild(Torchic);
				break;
			}
			case "Lonely":
			{
				parent.appendChild(Mudkip);
				break;
			}
			case "Naive":
			{
				parent.appendChild(Skitty);
				break;
			}
			case "Timid":
			{
				parent.appendChild(Turtwig);
				break;
			}
			case "Impish":
			{
				parent.appendChild(Chimchar);
				break;
			}
			case "Quirky":
			{
				parent.appendChild(Piplup);
				break;
			}
			case "Jolly":
			{
				parent.appendChild(Munchlax);
				break;
			}
			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}
		
		return;
	}
	
	textMElement = document.getElementById("textM");
	textMElement.style.display = "none";
	
	textFElement = document.getElementById("textF");
	textFElement.style.display = "none";
	
	portraitMElement = document.getElementById("portraitM");
	portraitMElement.style.display = "none";
	
	portraitFElement = document.getElementById("portraitF");
	portraitFElement.style.display = "none";
	
	resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	retryElement = document.getElementById("retry");
	retryElement.style.display = "none";
	
	questionIndex = Math.floor(Math.random() * questionsTD.length);
	
	question = questionsTD[questionIndex];

	questionElement = document.getElementById("question");
	questionElement.innerHTML = question.question;

	answersElement = document.getElementById("answers");
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

				questionsTD.splice(questionIndex, 1);

				generateQuestionTD();
			};
		})(answer.points);

		answersElement.appendChild(button);
		
	}
}

function generateQuestionEOS()
{
	if (questionsEOS.length === questionsEOSminus8)
	{
		questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		
		textMElement = document.getElementById("textM");
		textMElement.style.display = "block";
	
		textFElement = document.getElementById("textF");
		textFElement.style.display = "block";
		
		portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
	
		portraitFElement = document.getElementById("portraitF");
		portraitFElement.style.display = "block";
		
		retryElement = document.getElementById("retry");
		retryElement.style.display = "block";
		
		switch(calculateResult())
		{
			case "Lonely":
			{
				endspeech = "<p>You seem to be...</p><p>The Lonely type, at least a little bit!</p><p>You might find that surprising, but do you think it might be a little true?</p><p>You know what they say, though... We're all a bit lonely every now and then!</p><p>You probably keep this fact of life to yourself, though.</p><p>But if there's one thing that brings us all together... it's our need to go it solo!</p><p>So, a Lonely and solitary type like you must be...<p>";
				break;
			}
			case "Docile":
			{
				endspeech = "<p>You seem to be...</p><p>The Docile type!</p><p>You're quite sensitive to others!</p><p>You listen attentively and respectfully, and you're quick to pick up on things.</p><p>Because you're so good at listening, do you find that your friends tell you their problems and concerns often?</p><p>Perhaps people laugh at you sometimes for being so earnest and not recognizing jokes for what they are.</p><p>But you're always honestly surprised and bashful about this aspect of yourself...</p><p>And then honestly laugh about it!</p><p>So, a Docile, sensitive type like you must be...<p>";
				break;
			}
			case "Quirky":
			{
				endspeech = "<p>You seem to be...</p><p>The Quirky type!</p><p>You want to be on the cutting edge of fashion! You want to own all the latest stuff, right?</p><p>But you grow bored of your old things and only like new things!</p><p>You're true to your emotions, and you follow your desires.</p><p>People have a hard time keeping up with you because you change so quickly.</p><p>You may want to reflect upon how your words and actions affect others.</p><p>So, a Quirky type like you must be...<p>";
				break;
			}
			case "Brave":
			{
				endspeech = "<p>You seem to be...</p><p>The Brave type!</p><p>You don't know the meaning of fear! You're not afraid to keep moving forward in the face of danger.</p><p>You also have a strong sense of justice and can't turn a blind eye to someone in trouble.</p><p>But you sometimes push your own personal sense of justice a little too hard. Be careful that you don't get too pushy!</p><p>So, a Brave type like you must be...<p>";
				break;
			}
			case "Calm":
			{
				endspeech = "<p>You seem to be...</p><p>The Calm type!</p><p>You're very compassionate and considerate, and you put friends ahead of yourself.</p><p>You're so generous and kindhearted that you can laugh, forgive and forget when your friends make mistakes.</p><p>But be aware that your compassion can sometimes get the best of you, putting you too far behind everyone else!</p><p>So, a Calm type like you must be...<p>";
				break;
			}
			case "Timid":
			{
				endspeech = "<p>You seem to be...</p><p>The Timid type. You're quite gentle!</p><p>You're sometimes a little shy about new things, aren't you?</p><p>Do you miss out on some experiences because you get worried about the newness of the challenge?</p><p>Of course, there's also a great benefit in being cautious, isn't there?</p><p>After all, it keeps you nice and safe!</p><p>You live life at your own speed, with no hurries and no worries!</p><p>So, a Timid and gentle type like you must be...<p>";
				break;
			}
			case "Jolly":
			{
				endspeech = "<p>You seem to be...</p><p>The Jolly type!</p><p>You have a good sense of humor, and you're compassionate. You're always making others around you laugh.</p><p>You have a sunny, positive outlook, and you have a vitality that raises the lowest of spirits to giddy heights!</p><p>Yet, for all your great cheer, you're also open to tears...</p><p>But you bounce between laughter and tears so easily!</p><p>What an adventure life must be like for you, bouncing around like that all day!</p><p>So, a Jolly type like you must be...<p>";
				break;
			}
			case "Relaxed":
			{
				endspeech = "<p>You seem to be...</p><p>The Relaxed type!</p><p>You're so casual, leisurely, and carefree.</p><p>You don't rush or stress yourself out, and you don't worry about anything.</p><p>You like to take a seat and kick up your feet!</p><p>Oh, yes! You definitely have an easygoing personality, and you don't sweat the details.</p><p>People naturally flock to you because they find you to be a free spirit, which is so refreshing!</p><p>So, a Relaxed type like you must be...<p>";
				break;
			}
			case "Quiet":
			{
				endspeech = "<p>You seem to be...</p><p>The Quiet type! And very calm!</p><p>You're great with numbers, and you analyze information before making decisions.</p><p>You rarely make mistakes, because you make decisions so calmly and rationally.</p><p>You also may find it hard to guess what others are thinking, and they may find you a touch cold at times.</p><p>You may not want to keep your feelings to yourself so much of the time.</p><p>So, a Quiet and calm type like you must be...<p>";
				break;
			}
			case "Hardy":
			{
				endspeech = "<p>You seem to be...</p><p>The Hardy type! And you're so determined!</p><p>You don't whine or feel sorry for yourself, and you never need help with anything. You also have a strong sense of responsibility.</p><p>You work toward your goals steadily and never require attention along the way.</p><p>Your resilient spirit is the only thing you need to guide you toward your goals.</p><p>But be careful! You risk wearing yourself out if you work too long all on your own!</p><p>You should recognize that sometimes you need help from friends.</p><p>So, a Hardy, determined type like you must be...<p>";
				break;
			}
			case "Rash":
			{
				endspeech = "<p>You seem to be...</p><p>The Rash type, just a little bit hasty at times!</p><p>You may run out of your house and forget to lock the door once in a while.</p><p>And you may leave things like umbrellas behind when you leave places.</p><p>Maybe you even dash outside in your slippers every now and then!</p><p>Perhaps you even wear your shirts inside out all the time!</p><p>Oh, is that even rasher than you really are? So sorry!</p><p>But know that your friends think your funny little flubs are adorable!</p><p>So, a rash and hasty type like you...</p><p>Oh, wait! One more thing!</p><p>You also sometimes reveal your friends' secrets by accident, don't you!</p><p>Sorry. It had to be said!</p><p>So, without further ado... a Rash type like you must be...<p>";
				break;
			}
			case "Bold":
			{
				endspeech = "<p>You seem to be...</p><p>The Bold type!</p><p>You're so brave, and you never back down from anything! And you're also gutsy and brash in a way that others aren't!</p><p>You're not shy about asking to take home all the leftovers at restaurants, right?</p><p>If someone's treating you to dinner, you have no problem with ordering lots of good stuff!</p><p>And you aren't fazed by doing things that most others would think twice about doing.</p><p>Perhaps you don't even notice when others are upset with you!</p><p>You know, you have the potential to become a truly great person... because you'll be the last one standing!</p><p>So, a Bold type like you must be...<p>";
				break;
			}
			case "Naive":
			{
				endspeech = "<p>You seem to be...</p><p>The Naive type! You're so open and innocent!</p><p>What a strong sense of curiosity you have! And you state your opinions purely, sharing exactly what you think.</p><p>You also have an artistic spirit that isn't restrained by social conventions! You startle people with your spontaneity and vision.</p><p>But when you overdo it, other people can have a hard time keeping up with you...</p><p>Have you noticed people looking at you oddly? As if for no apparent reason?</p><p>So, a Naive, innocent type like you must be...<p>";
				break;
			}
			case "Impish":
			{
				endspeech = "<p>You seem to be...</p><p>The Impish type!</p><p>You really like to play a lot! And you enjoy eating a lot!</p><p>You love competition, but you hate losing.</p><p>Your personality seems crystal clear to others. With you, what you see is what you get! You cheer others with your dazzling smile.</p><p>But you may be afraid of showing what's in your heart and revealing your true self.</p><p>You may not want to keep your worries to yourself. You're only human, so ask your friends for advice when you need it.</p><p>So, an Impish type like you must be...<p>";
				break;
			}
			case "Hasty":
			{
				endspeech = "<p>You seem to be...</p><p>The Hasty type!</p><p>You talk quickly! You eat quickly! You walk quickly!</p><p>People often see you as a hard worker because you're always moving around so fast!</p><p>But be careful! If you always rush so fast, you may make mistakes more often than others do. And what a waste that would be!</p><p>Relax every now and then with a nice, deep breath!</p><p>So, a Hasty type like you...";
				break;
			}
			case "Sassy":
			{
				endspeech = "<p>You seem to be...</p><p>The Sassy type! Or at least somewhat sassy!</p><p>You don't like taking orders. You're a little rebellious and like to disagree.</p><p>You're a lone wolf! You like to keep your distance from groups and go off to do things on your own.</p><p>Older folks may be the ones who find you the most disagreeable, even selfish.</p><p>But people younger than you tend to really admire you!</p><p>So, a Sassy type like you must be...<p>";
				break;
			}
			default:
			{
				endspeech = "<p>You seem to be...</p><p>The... uh, strange...</p><p>You must be a very... something person.</p><p>However, you are reading this, thus it means that something went wrong on my end.</p><p>But, be aware, you did nothing wrong!</p><p>So, uh... i suggest you try it again, sorry for the inconvinience, and if the problem persists, let me know on github.";
				break;
			}
		}
		
		resultElement.innerHTML = endspeech;
	
		parent = document.getElementById("portraitM");
		
		switch(calculateResult())
		{
			case "Lonely":
			{
				parent.appendChild(Bulbasaur);
				break;
			}
			case "Docile":
			{
				parent.appendChild(Charmander);
				break;
			}
			case "Quirky":
			{
				parent.appendChild(Squirtle);
				break;
			}
			case "Brave":
			{
				parent.appendChild(Pikachu);
				break;
			}
			case "Calm":
			{
				parent.appendChild(Chikorita);
				break;
			}
			case "Timid":
			{
				parent.appendChild(Cyndaquil);
				break;
			}
			case "Jolly":
			{
				parent.appendChild(Totodile);
				break;
			}
			case "Relaxed":
			{
				parent.appendChild(Phanpy);
				break;
			}
			case "Quiet":
			{
				parent.appendChild(Treecko);
				break;
			}
			case "Hardy":
			{
				parent.appendChild(Torchic);
				break;
			}
			case "Rash":
			{
				parent.appendChild(Mudkip);
				break;
			}
			case "Bold":
			{
				parent.appendChild(Turtwig);
				break;
			}
			case "Naive":
			{
				parent.appendChild(Chimchar);
				break;
			}
			case "Impish":
			{
				parent.appendChild(Piplup);
				break;
			}
			case "Hasty":
			{
				parent.appendChild(Shinx);
				break;
			}
			case "Sassy":
			{
				parent.appendChild(Riolu);
				break;
			}
			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}

		parent = document.getElementById("portraitF");

		switch(calculateResult())
		{
			case "Docile":
			{
				parent.appendChild(Bulbasaur);
				break;
			}
			case "Brave":
			{
				parent.appendChild(Charmander);
				break;
			}
			case "Bold":
			{
				parent.appendChild(Squirtle);
				break;
			}
			case "Hasty":
			{
				parent.appendChild(Pikachu);
				break;
			}
			case "Relaxed":
			{
				parent.appendChild(Vulpix);
				break;
			}
			case "Jolly":
			{
				parent.appendChild(Eevee);
				break;
			}
			case "Quiet":
			{
				parent.appendChild(Chikorita);
				break;
			}
			case "Calm":
			{
				parent.appendChild(Cyndaquil);
				break;
			}
			case "Sassy":
			{
				parent.appendChild(Totodile);
				break;
			}
			case "Hardy":
			{
				parent.appendChild(Treecko);
				break;
			}
			case "Rash":
			{
				parent.appendChild(Torchic);
				break;
			}
			case "Lonely":
			{
				parent.appendChild(Mudkip);
				break;
			}
			case "Naive":
			{
				parent.appendChild(Skitty);
				break;
			}
			case "Timid":
			{
				parent.appendChild(Turtwig);
				break;
			}
			case "Impish":
			{
				parent.appendChild(Chimchar);
				break;
			}
			case "Quirky":
			{
				parent.appendChild(Piplup);
				break;
			}
			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}
		
		return;
	}
	
	textMElement = document.getElementById("textM");
	textMElement.style.display = "none";
	
	textFElement = document.getElementById("textF");
	textFElement.style.display = "none";
	
	portraitMElement = document.getElementById("portraitM");
	portraitMElement.style.display = "none";
	
	portraitFElement = document.getElementById("portraitF");
	portraitFElement.style.display = "none";
	
	resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	retryElement = document.getElementById("retry");
	retryElement.style.display = "none";
	
	questionIndex = Math.floor(Math.random() * questionsEOS.length);
	
	question = questionsEOS[questionIndex];

	questionElement = document.getElementById("question");
	questionElement.innerHTML = question.question;

	answersElement = document.getElementById("answers");
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

				questionsEOS.splice(questionIndex, 1);

				generateQuestionEOS();
			};
		})(answer.points);

		answersElement.appendChild(button);
		
	}
}

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
	var boldPoints = genpoints.Bold;
	var rashPoints = genpoints.Rash;
	var quietPoints = genpoints.Quiet;

	var maxPoints = Math.max(bravePoints, hardyPoints, docilePoints, timidPoints, relaxedPoints, jollyPoints, naivePoints, sassyPoints, impishPoints, quirkyPoints, hastyPoints, calmPoints, lonelyPoints, boldPoints, rashPoints, quietPoints)
	
	switch(maxPoints)
	{
		case bravePoints:
		{
			return "Brave";
		}
		case hardyPoints:
		{
			return "Hardy";
		}
		case docilePoints:
		{
			return "Docile";
		}
		case timidPoints:
		{
			return "Timid";
		}
		case relaxedPoints:
		{
			return "Relaxed";
		}
		case jollyPoints:
		{
			return "Jolly";
		}
		case naivePoints:
		{
			return "Naive";
		}
		case sassyPoints:
		{
			return "Sassy";
		}
		case impishPoints:
		{
			return "Impish";
		}
		case quirkyPoints:
		{
			return "Quirky";
		}
		case hastyPoints:
		{
			return "Hasty";
		}
		case calmPoints:
		{
			return "Calm";
		}
		case lonelyPoints:
		{
			return "Lonely";
		}
		case boldPoints:
		{
			return "Bold";
		}
		case rashPoints:
		{
			return "Rash";
		}
		case quietPoints:
		{
			return "Quiet";
		}
		default:
		{
			return "MissingIm";
		}
	}
}

function toggleMusic()
{
	var music = document.getElementById("music");
	
	music.volume = 0.5;
	
	if (music.paused)
	{
		music.play();
	}
	else
	{
		music.pause();
	}
}