// import {hateTweets, hateTweets} from "/stream.js"

let loveText = `50%LOVE
1400TWEETS`
let hateText = `50%HATE
1400TWEETS`

var intFrameWidth = window.innerWidth;
var intFrameHeight = window.innerHeight;
var loveWidth = 720;
var hateWidth = intFrameWidth - loveWidth - 20;
var wordHeight = intFrameHeight * 0.41
var marTop = (intFrameHeight - (wordHeight * 2 + 10)) / 2
var percentSize = marTop / 2
var percentLeading = percentSize * 1.65

function preload() {
  panama = loadFont('fonts/panama.otf');
  inter = loadFont('fonts/inter.ttf');
  loveImg = loadImage('images/love.png');
  hateImg = loadImage('images/hate.png');
  relationshipImg = loadImage('images/relationship.png');
}

function setup() {
  createCanvas(intFrameWidth, intFrameHeight);
  background('#060710');
  textFont(panama);
  textLeading(percentLeading);
  textSize(percentSize);
  fill(107,108,111);
  text(loveText, 10, 10,500, 500);
  textAlign(RIGHT);
  text(hateText, intFrameWidth - 510, 10,500, 500);
  textSize(percentSize * 2.4);
  textAlign(CENTER);
  text("/", intFrameWidth / 2, marTop * 0.93)

  textFont(inter);
  textSize(marTop / 4.3);
  textLeading(percentLeading / 3.2);
  textAlign(LEFT);
  text("WHAT IS BIGER PART OF HUMAN EXPERIENCE: TO FEEL LOVE OR HATE? THIS WEBSITE TRIES TO FIND AN ANSWER TO THAT. IT ANALYZES TWEETS ALL OVER THE WORLD AND COUNTS TWEETS CONTAINING “I LOVE” (CURRENTLY 14 000) AND “I HATE” (CURRENTLY 14 000). EVERY COUNT CHANGES THE LOOK OF THE WEBSITE SO THE BALANCE BETWEEN LOVE AND HATE IS VISUALISED. CREATED BY VITALY GACHKOVSKY IN 2022.", 10, marTop + wordHeight * 2 + 15, intFrameWidth - 20, marTop)
  noLoop();
}

function draw() {
  image(loveImg, 10, marTop, loveWidth, wordHeight);
  image(hateImg, loveWidth + 20, marTop, hateWidth - 10, wordHeight);
  image(relationshipImg, 10, wordHeight + 10 + marTop,intFrameWidth - 10,wordHeight);
}
