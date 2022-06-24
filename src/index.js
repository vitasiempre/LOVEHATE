// document.addEventListener("DOMContentLoaded", loadScript);
//
// let love;
// let hate;
//
// async function loadScript() {
//   let vesselApi = await fetch(url);
//   vesselCall = await vesselApi.json();
//   console.log(vesselCall);
//
//   let vesselTemplate = document.querySelector("#vessel").content;
//   let vessel = vesselTemplate.cloneNode(true);
//
//   vessel.querySelector(".name").textContent = vesselCall["DATA"][0]["NAME"];
//   vessel.querySelector(".mmsi").textContent = vesselCall["DATA"][0]["MMSI"];
//   vessel.querySelector(".imo").textContent = vesselCall["DATA"][0]["IMO"];
//   vessel.querySelector(".type").textContent =
//     vesselCall["DATA"][0]["VESSEL_TYPE"];
//   vessel.querySelector(".built").textContent = vesselCall["DATA"][0]["BUILD"];
//
//   document.querySelector(".vessel").appendChild(vessel);
// }



// var sync_object = {
//   v_mycount: 0,
//   getmycount() {
//     return this.v_mycount;
//   },
//   setmycount(value) {
//     if (this.v_mycount !== value) {
//       this.v_mycount = value;
//       this.update_dom();
//     } else {
//       console.log("Don't have to update doms when assign the same value");
//     }
//   },
//  update_dom() {
//    console.log('Update all doms which class name has "counter"');
//    //if you use jquery you can update dom by this way
//    $(".counter").contents(this.v_mycount);
// }
// };

// import {hateTweets, hateTweets} from "/stream.js"

let loveText = `25%LOVE
25TWEETS`
let hateText = `25%HATE
25TWEETS`

var intFrameWidth = window.innerWidth;
var intFrameHeight = window.innerHeight;
var loveWidth = 500;
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
  fill(148);
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
  // let lovepic = createImg('images/love.png', 'the p5 magenta asterisk');
  // lovepic.class('lovePic');
  // lovepic.position(0,0);

  // let loveP = createP(loveText);
  // loveP.style('font-family', 'panama');
  // loveP.position(10, 0);


}
