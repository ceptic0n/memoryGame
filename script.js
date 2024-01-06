const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

















//create 2 variables which will represent the 2 cards being selected
//cards have to be declared outside of handleCardClick so they won't overwrite eachother 
let card1 = null;
let card2 = null;
let clickedCard1 = null;
let clickedCard2 = null;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  const clickedCard = event.target;
  const cardColor = clickedCard.className

  //changes the color of the card when clicked
  clickedCard.style.backgroundColor = cardColor; 

  if(card1 === null){
    card1 = cardColor;
    clickedCard1 = clickedCard;
    console.log(`Card 1 = ${card1}`);
  } else if(card2 === null && clickedCard !== clickedCard1){
    card2 = cardColor;
    clickedCard2 = clickedCard;
    console.log(`Card 2 = ${card2}`);
  }

   //check if 2 cards have been clicked, if they are then set both to null again
  if(card1 !== null && card2 !== null){
    //check if cards are matching, if not, reset the color after 1 second, and set back to null
    if(card1 === card2){
      console.log("Match!");
      resetSelectedCards();
    } else {
      console.log("No Match!");
      setTimeout(function(){
        clickedCard1.style.backgroundColor = "darkgrey";
        clickedCard2.style.backgroundColor = "darkgrey";
        resetSelectedCards();
      }, 1000);
    }
  }
}

//function to reset selected cards to null
function resetSelectedCards(){
  card1 = null;
  card2 = null;
  clickedCard1 = null;
  clickedCard2 = null;
}



// when the DOM loads
createDivsForColors(shuffledColors);
