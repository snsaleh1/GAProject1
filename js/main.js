// //Rep Your City Game
// /*----- constants -----*/
// const studentCards = [{
//     name: "Caleb Saleh",
//     city: "atx",
//     cardImage: "images/atxcalebsaleh.png"
// }, {
//     name: "David Bae",
//     city: "atx",
//     cardImage: URL(https://i.imgur.com/8AghMPJ.png)
// },  {
//     name: "",
//     city: "a",
//     cardImage: ""

// }]
// const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
// const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

// /*----- app's state (variables) -----*/
// let cityCounts, timer, winner;

// /*----- cached element references -----*/


// /*----- event listeners -----*/
// document.querySelector('startGame')
//   .addEventListener('click', startGame);

// /*----- functions -----*/

// function dealStudent() {
//     document.querySelector('dealCard')
//     .addEventListener('click', function(evt){
//         //random function, then save 
//     }) 
// }

// // let ranNum = Math.random() * 75
// // let obj = tudentCards[ranNum]

// // if(input === )


let button = document.querySelector('.Sf');

button.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    if(input === "Sf"){
        console.log("match")
    } else {
        console.log("no match")
    }
})