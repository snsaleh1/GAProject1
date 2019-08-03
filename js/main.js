//Rep Your City Game
/*----- constants -----*/
const studentCards = [{
    name: "Caleb Saleh",
    city: "atx",
    cardImage: "images/atxcalebsaleh.png"
}, {
    name: "David Bae",
    city: "atx",
    cardImage: "images/atxdavidbae.png"
},  {
    name: "Chighali Mouknass",
    city: "atx",
    cardImage: "images/atxchighalimouknass.png"
},
    {
    name: "Dev Govindji",
    city: "atx",
    cardImage: "image/atxdevgovindji.png"
}, 
    {
    name: "Heather Etheridge",
    city: "atx",
    cardImage: "image/atxheatheretheridge.png"
},
    {
    name: "Jack Ground",
    city: "atx",
    cardImage: "image/atxjackground.png"
},
    {
    name: "Beverly Osoria",
    city: "atx",
    cardImage: "image/atxbeverlyosoria"
},
    {

},
    {

},
    {

},
    {

},
    {

},
    {

},
    {

},
    {

},
    {

},
]
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let cityCounts, timer, winner;

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function dealStudent() {
    document.querySelector('dealCard')
    .addEventListener('click', function(evt){
        //random function, then save 
    }) 
}

console.log(Object.keys(studentCards));

// let ranNum = Math.random() * 75
// let obj = tudentCards[ranNum]

// if(input === )


let button = document.querySelector('.sf');

button.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    if(input === "sf"){
        console.log("match")
    } else {
        console.log("no match")
}
})

let butsm = document.querySelector('.sm');

butsm.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    if(input === "sm"){
        console.log("match")
    } else {
        console.log("no match")
    }
})

let butdal = document.querySelector('.dal');

butdal.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    if(input === "dal"){
        console.log("match")
    } else {
        console.log("no match")
    }
})

let butatx = document.querySelector('.atx');
butatx.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    if(input === "atx"){
        console.log("match")
    } else {
        console.log("no match")
    }
});

var rs = Math.floor()