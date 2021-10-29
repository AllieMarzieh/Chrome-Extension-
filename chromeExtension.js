

// alert("Did you drink water today?")


const cache = {

0: "Nice! Water intake significantly affects energy levels and brain function",
1: " Great job! This will Help maximize physical performance for today!",
2: "Awesome! Water intake may help prevent and treat headaches",
3: "If you're feeling backed up drinking water mmay help relieve constipation",
4: "Yes!  You don't want your kineys to get ruined! Drinking water help treat kidney stones",
5: "Pefect! Do you like partying? Because water intake helps prevent hangovers",
6: "Sweet! Did you know drinking water can aid weight loss?"

}

function rando () {
  return Math.floor((Math.random() * 7));
}




    // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.

    function message () {
  let response = window.prompt("Did you drink water today? Please answer yes or no.")
  if(response == 'yes'){
    alert(cache[rando()]);
  } else if(response == 'no') {
    alert("Well water you waiting for?!");
  }
}
let intervalID = setInterval(message, 10000);

message();


// alert user options every 30 min , every hour, or 3 hours 
// user will choose on hour increment option 
// alert button that says yes or no 
// if user responds "yes", randomize facts 



  

