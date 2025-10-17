const prompts: string[] = [
     "What's that chirping noise?", 
     "Did you catch that...what could it have been?", 
     "Whoa, what was that mellifluous sound?"
    ]

const corrects: string[] =[
 `Wow! You have a great ear! It is the ${birdName}`,
`Genius. Yes, that was the ${birdName}`,
 `Ah yes, definitely a ${birdName}, music to my ears!`
]

const wrongs: string[] = [
       `That's okay, you'll get it next time! `,
        `You win some you lose some. Don't worry you have ${tryCount} more tries today. `,
        `Oh no! The bird flew away insulted you didn't know...can't please everyone! We'll try again later.`
]

const relaxRecs: string[] = [
"Let's take a break 😌 Boxed breathing is a great way to decompress. Breathe in through your nose for four seconds. Hold for four. Breathe out from your nose for four seconds. Hold for four. 🍃",
`Let's take a break 😌 Reduce eye strain with the 20 - 20 -20 rule.  Every 20 minutes, look at something 20 feet away for 20 seconds. 😎 `,
`Let's take a break 😌 Stay hyddrated with a sip of water. Water is essential for health as it helps regulate body temperature, lubricates joints, and protects your organs. 🚰`
]

interface Bird {
    name: string;
    sciName: string;
    funFact: string;
    hint1: string;
    hint2: string;
    hint3: string;
    image: string;
    audio: string; 
}

// Array of obj: Bird Data
const birdData: Bird[] = [
    {
        name: `Blue Jay`,
        sciName: `Cyanocitta cristata`,
        funFact: `Blue jays aren't actually blue; their feathers appear blue because of a light-scattering phenomenon called structural coloration, as the pigment is brown.`,
        hint1: `These birds will often mimic the call of of hawks to warn other birds of danger or to scare them away from food sources.`,
        hint2: `TBD`,
        hint3: `TBD`,
        image: `assets/images/birds/blueJay.png`,
        audio: `assets/audio/BlueJay2.mp3`
    },
    {
        name: `American Robin`,
        sciName: `Turdus migratorius`,
        funFact: `The eggs of American Robins get their unique, vibrant sky-blue color from pigments in their blood`,
        hint1: `These birds are seen as symbols of spring.`,
        hint2: `TBD`,
        hint3: `TBD`,
        image: `assets/images/birds/robin.png`,
        audio: `assets/audio/AmericanRobin.mp3`
    },
    {
        name: `Mourning Dove`,
        sciName: `Zenaida macroura`,
        funFact: `Despite their sometimes slow appearance, Mourning Doves are very fast flyers, reaching speeds of 40-55 mph.`,
        hint1: `If you live in an NYC apartment building, these birds will often build their nests below your AC unit.`,
        hint2: `TBD`,
        hint3: `TBD`,
        image: `assets/images/birds/mourningDove.png`,
        audio: `assets/audio/MourningDove.mp3`
    }
]

// this should have separate data page. 

// variables
let currentBird: Bird;
let birdName: string;
const guessedBirds= []; // push obj of birds collected
const badgeWall = ["link to q", "link to q", "link to q"] //push on the correct bird when guessed
const guessCount = 0;



// Correct your guess input variable:
// const guess = document.getElementById(#guess); // incorrect selector syntax

const startUpVisit = false;
const middayVisit = false;
const sunsetVisit = false;

const gameOver = false;

// Variables for DOM elements
const guessInput = document.getElementById('guessInput') as HTMLInputElement;
const submitGuessBtn = document.getElementById('submitGuessBtn') as HTMLButtonElement;
const hintBtn = document.getElementById('hintBtn') as HTMLButtonElement;
const bubbleTitle = document.getElementById(`bubbleTitle`) as HTMLHeadingElement;
const bubbleNote = document.getElementById('bubbleNote') as HTMLParagraphElement;
const chirpAudio = document.getElementById('chirpAudio') as HTMLAudioElement;
const birdImg = document.querySelector('birdImg') as HTMLImageElement;

// let badges = guessedBirds.map((badge)=>{
//     if(!guessedBirds) document.createElement(`img`);
// })

const randomNumber = (n) => {
    return Math.floor(Math.random() * n);
  };

  function startBird(currentBird){
    chirpAudio.src = currentBird.audio; 
    bubbleTitle.innerHTML = `That noise is a good reminder...`;
    bubbleNote.innerHTML = `${relaxRecs[randomNumber(relaxRecs.length)]}`;
  }

hintBtn.addEventListener("click", (currentBird) => {
    bubbleTitle.innerHTML = `A little birdie told me...`;
    bubbleNote.innerHTML = `${currentBird.hint[randomNumber(3)]}`;
})

function startGame(){
    if(!currentBird && !gameOver){
    currentBird = birdData[randomNumber(birdData.length)];
    birdName = currentBird.name;
    chirpAudio.src = currentBird.audio; 
    bubbleTitle.innerHTML = `That noise is a good reminder...`;
    bubbleNote.innerHTML = `${relaxRecs[randomNumber(relaxRecs.length)]}`;
    } else {

    }


}
 // can just call this line in 

function birdGuess(guess : string):void {
    //validator
    if(guess.toLowerCase().trim() === currentBird.name.toLowerCase().trim()){
        correct(); 
        gameOver = true;
    } else {
        guessCount++
        if()
    }
}

function correct(){
    const winnerBird = document.getElementById('birdImg');
    winnerBird.src = `${currentBird.image}`; 

    const 

    const winMessage = document.getElementById(`bubbleNote`);
    winMessage.innerText.replacewith(`${correct[randomNumber(3)]}`) ;
  
}



/** 
when installed we want it to start the game automatically 

BACKGROUND.TS?
    - bird popinf up and taking over page
        - automatically play the bird sound
    - tracker for when chrome is opened first time that 24hr period.., for first popupsetInterval?
    - tracker for sunset for second pop-up

    sound button to replay the sound
        - on click event listener 

bird guess function
    - count up to 6 tries -- 2 at each visit
    - variable to hold true or false for which visit its on for Visit 1 2 and 3 
- guess validator function
    - event listener on btn
    - text in input made to lowercase and compared to name in the bird obj
        - if match call correct path
        - if not match call incorrect path
 - path to correct
    - bird image reveals
    - Correct prompt appears 
    - fun facts appear
    - bird badge switchs from question to bird pic
    - button to close it for the day
    - see you tomorrow page that just says new bird tomorrow or see you tomorrow on timer
 - path to incorrect
        - incorrect prompt to pop up
        - hint button to pop up. 
            - if clicked, reveal the hint
        - try counter++
            - check if second guess on 3 visit if so 
                - play reveal bird loser mode
            - if not second guess they can try again. 
            - else button to close and prompt that says see you later
- disable bird for the rest of the 24hr period if correctly guessed

HTML / CSS
- fonts
- bg color
- space out the images
- font sizing
- dress up the input

STRETCH:
- animations like a pop of confetti over the screen when they get it right
- the bird spins into view when it's time for the extension

QUESTIONS:
- storage? 
- how to set time of pop-ups? probs in background. 
**/