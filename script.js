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

var questionIndex = 0;

var questionsRBminus8 = questionsRB.length - 8;
var questionsTDminus8 = questionsTD.length - 8;
var questionsEOSminus8 = questionsEOS.length - 8;

function generateQuestionRB()
{
	if (questionsRB.length === questionsRBminus8)
	{
		var questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		var answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		var resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		
		var textMElement = document.getElementById("textM");
		textMElement.style.display = "block";
	
		var textFElement = document.getElementById("textF");
		textFElement.style.display = "block";
		
		var portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
	
		var portraitFElement = document.getElementById("portraitF");
		portraitFElement.style.display = "block";
		
		resultElement.innerHTML = "You are a " + calculateResult() + " Pokemon";
		
		var parent = document.getElementById("portraitM");
		
		if (calculateResult() === "Docile")
		{
			parent.appendChild(Bulbasaur);
		}
		else if (calculateResult() === "Hardy")
		{
			parent.appendChild(Charmander);
		}
		else if (calculateResult() === "Jolly")
		{
			parent.appendChild(Squirtle);
		}
		else if (calculateResult() === "Impish")
		{
			parent.appendChild(Pikachu);
		}
		else if (calculateResult() === "Quirky")
		{
			parent.appendChild(Meowth);
		}
		else if (calculateResult() === "Relaxed")
		{
			parent.appendChild(Psyduck);
		}
		else if (calculateResult() === "Brave")
		{
			parent.appendChild(Machop);
		}
		else if (calculateResult() === "Lonely")
		{
			parent.appendChild(Cubone);
		}
		else if (calculateResult() === "Timid")
		{
			parent.appendChild(Cyndaquil);
		}
		else if (calculateResult() === "Naive")
		{
			parent.appendChild(Totodile);
		}
		else if (calculateResult() === "Sassy")
		{
			parent.appendChild(Treecko);
		}
		else if (calculateResult() === "Hasty")
		{
			parent.appendChild(Torchic);
		}
		else if (calculateResult() === "Calm")
		{
			parent.appendChild(Mudkip);
		}
		
		parent = document.getElementById("portraitF");
		
		if (calculateResult() === "Calm")
		{
			parent.appendChild(Bulbasaur);
		}
		else if (calculateResult() === "Brave")
		{
			parent.appendChild(Charmander);
		}
		else if (calculateResult() === "Relaxed")
		{
			parent.appendChild(Squirtle);
		}
		else if (calculateResult() === "Hardy")
		{
			parent.appendChild(Pikachu);
		}
		else if (calculateResult() === "Lonely")
		{
			parent.appendChild(Psyduck);
		}
		else if (calculateResult() === "Impish")
		{
			parent.appendChild(Cubone);
		}
		else if (calculateResult() === "Naive")
		{
			parent.appendChild(Eevee);
		}
		else if (calculateResult() === "Docile")
		{
			parent.appendChild(Chikorita);
		}
		else if (calculateResult() === "Jolly")
		{
			parent.appendChild(Totodile);
		}
		else if (calculateResult() === "Quirky")
		{
			parent.appendChild(Treecko);
		}
		else if (calculateResult() === "Sassy")
		{
			parent.appendChild(Torchic);
		}
		else if (calculateResult() === "Timid")
		{
			parent.appendChild(Mudkip);
		}
		else if (calculateResult() === "Hasty")
		{
			parent.appendChild(Skitty);
		}
		
		return;
	}
	
	var textMElement = document.getElementById("textM");
	textMElement.style.display = "none";
	
	var textFElement = document.getElementById("textF");
	textFElement.style.display = "none";
	
	var portraitMElement = document.getElementById("portraitM");
	portraitMElement.style.display = "none";
	
	var portraitFElement = document.getElementById("portraitF");
	portraitFElement.style.display = "none";
	
	var resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	if (genpoints.Other === 0)
	{
		questionIndex = Math.floor(Math.random() * questionsRB.length);
	}
	else
	{
		genpoints.Other = 0;
	}
	
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

function generateQuestionTD()
{
	if (questionsTD.length === questionsTDminus8)
	{
		var questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		var answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		var resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		
		var textMElement = document.getElementById("textM");
		textMElement.style.display = "block";
	
		var textFElement = document.getElementById("textF");
		textFElement.style.display = "block";
		
		var portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
	
		var portraitFElement = document.getElementById("portraitF");
		portraitFElement.style.display = "block";
		
		resultElement.innerHTML = "You are a " + calculateResult() + " Pokemon";
		
		var parent = document.getElementById("portraitM");
		
		if (calculateResult() === "Lonely")
		{
			parent.appendChild(Bulbasaur);
		}
		else if (calculateResult() === "Docile")
		{
			parent.appendChild(Charmander);
		}
		else if (calculateResult() === "Quirky")
		{
			parent.appendChild(Squirtle);
		}
		else if (calculateResult() === "Brave")
		{
			parent.appendChild(Pikachu);
		}
		else if (calculateResult() === "Sassy")
		{
			parent.appendChild(Meowth);
		}
		else if (calculateResult() === "Calm")
		{
			parent.appendChild(Chikorita);
		}
		else if (calculateResult() === "Timid")
		{
			parent.appendChild(Cyndaquil);
		}
		else if (calculateResult() === "Jolly")
		{
			parent.appendChild(Totodile);
		}
		else if (calculateResult() === "Quiet")
		{
			parent.appendChild(Treecko);
		}
		else if (calculateResult() === "Hardy")
		{
			parent.appendChild(Torchic);
		}
		else if (calculateResult() === "Rash")
		{
			parent.appendChild(Mudkip);
		}
		else if (calculateResult() === "Hasty")
		{
			parent.appendChild(Skitty);
		}
		else if (calculateResult() === "Bold")
		{
			parent.appendChild(Turtwig);
		}
		else if (calculateResult() === "Naive")
		{
			parent.appendChild(Chimchar);
		}
		else if (calculateResult() === "Impish")
		{
			parent.appendChild(Piplup);
		}
		else if (calculateResult() === "Relaxed")
		{
			parent.appendChild(Munchlax);
		}
		
		parent = document.getElementById("portraitF");
		
		if (calculateResult() === "Docile")
		{
			parent.appendChild(Bulbasaur);
		}
		else if (calculateResult() === "Brave")
		{
			parent.appendChild(Charmander);
		}
		else if (calculateResult() === "Bold")
		{
			parent.appendChild(Squirtle);
		}
		else if (calculateResult() === "Hasty")
		{
			parent.appendChild(Pikachu);
		}
		else if (calculateResult() === "Relaxed")
		{
			parent.appendChild(Meowth);
		}
		else if (calculateResult() === "Quiet")
		{
			parent.appendChild(Chikorita);
		}
		else if (calculateResult() === "Calm")
		{
			parent.appendChild(Cyndaquil);
		}
		else if (calculateResult() === "Sassy")
		{
			parent.appendChild(Totodile);
		}
		else if (calculateResult() === "Hardy")
		{
			parent.appendChild(Treecko);
		}
		else if (calculateResult() === "Rash")
		{
			parent.appendChild(Torchic);
		}
		else if (calculateResult() === "Lonely")
		{
			parent.appendChild(Mudkip);
		}
		else if (calculateResult() === "Naive")
		{
			parent.appendChild(Skitty);
		}
		else if (calculateResult() === "Timid")
		{
			parent.appendChild(Turtwig);
		}
		else if (calculateResult() === "Impish")
		{
			parent.appendChild(Chimchar);
		}
		else if (calculateResult() === "Quirky")
		{
			parent.appendChild(Piplup);
		}
		else if (calculateResult() === "Jolly")
		{
			parent.appendChild(Munchlax);
		}
		
		return;
	}
	
	var textMElement = document.getElementById("textM");
	textMElement.style.display = "none";
	
	var textFElement = document.getElementById("textF");
	textFElement.style.display = "none";
	
	var portraitMElement = document.getElementById("portraitM");
	portraitMElement.style.display = "none";
	
	var portraitFElement = document.getElementById("portraitF");
	portraitFElement.style.display = "none";
	
	var resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	questionIndex = Math.floor(Math.random() * questionsRB.length);
	
	var question = questionsTD[questionIndex];

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

				questionsTD.splice(questionIndex, 1);

				generateQuestionTD();
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
	var boldPoints = genpoints.Bold;
	var rashPoints = genpoints.Rash;
	var quietPoints = genpoints.Quiet;

	var maxPoints = Math.max(bravePoints, hardyPoints, docilePoints, timidPoints, relaxedPoints, jollyPoints, naivePoints, sassyPoints, impishPoints, quirkyPoints, hastyPoints, calmPoints, lonelyPoints, boldPoints, rashPoints, quietPoints)
	
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
	else if (maxPoints === boldPoints)
	{
		return "Bold";
	}
	else if (maxPoints === rashPoints)
	{
		return "Rash";
	}
	else if (maxPoints === quietPoints)
	{
		return "Quiet";
	}
}