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
    name: "Chris Mayfield",
    city: "atx",
    cardImage: "image/atxchrismayfield"
},
    {
    name: "Emily Landgrebe",
    city: "atx",
    cardImage: "image/atxemilylandgrebe"
},
    {
    name: "Jared Rodriguez",
    city: "atx",
    cardImage: "image/atxjaredrodriguez"
},
    {
    name: "Joe Gerhard",
    city: "atx",
    cardImage: "image/atxjoegerhard"
},
    {
    name: "Chris Williams",
    city: "atx",
    cardImage: "image/atxchriswilliams"
},
    {
    name: "David Bae",
    city: "atx",
    cardImage: "image/atxdavidbae"
}, {
    name: "Francis Cancio",
    city: "atx",
    cardImage: "image/atxfranciscancio"
}, {
    name: "Nova Hasley",
    city: "atx",
    cardImage: "image/atxnovahasley"
}, {
    name: "Emily Moore",
    city: "atx",
    cardImage: "image/atxemilymoore"
}, {
    name: "Elco Garcia",
    city: "atx",
    cardImage: "image/atxelcogarcia"
}, {
    name: "Chris Perez",
    city: "atx",
    cardImage: "image/atxchrisperez"
}, {
    name: "Taylor Lacerte",
    city: "atx",
    cardImage: "image/atxtaylorlacerte"
}, {
    name: "Robin Dao",
    city: "atx",
    cardImage: "image/atxrobindao"
}, {
    name: "Mason Pierce",
    city: "atx",
    cardImage: "image/atxmasonpierce"
}, {
    name: "Vittoria Erdem",
    city: "atx",
    cardImage: "image/atxvittoriaerdem"
}, {
    name: "Jeremiah Garza",
    city: "atx",
    cardImage: "image/atxjeremiahgarza"
}, {
    name: "Connor Mccabe",
    city: "atx",
    cardImage: "image/atxconnormccabe"
}, {
    name: "Lily Best",
    city: "atx",
    cardImage: "image/atxlilybest"
}, {
    name: "Julia Galan",
    city: "atx",
    cardImage: "image/atxjuliagalan"
}
]
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let cityCounts, timer, winner;

/*----- cached element references -----*/


/*----- event listeners -----*/
document.querySelector('.dealCard')
.addEventListener('click', dealCard);


/*----- functions -----*/

console.log(Object.keys(studentCards));


function dealCard() {
    let maxRange = studentCards.length;
    let objArr = [];
    let i = getRandomInt (0, maxRange);
    console.log(i);
    let cardPulled=studentCards[i];
    objArr.push(studentCards[i]);
    studentCards.splice(i, 1);
    maxRange --;
    return cardPulled;
}
function getRandomInt(min, maxRange) {
    min = Math.ceil(min);
    maxRange = Math.floor(maxRange);
    return Math.floor(Math.random() * (maxRange - min)) + min;
}

let totalSeconds = 60;
var timeSeconds = parseInt(totalSeconds % 60);
function gameTime () {
    document.querySelector(".timer").innerHTML='Time left: ' + timeSeconds + ' seconds'; 
    if(totalSeconds <=0) {
        gameOver('document.quiz.submit()',1);
    } else{
        totalSeconds = totalSeconds -1;
        timeSeconds = parseInt(totalSeconds%60);
        gameOver('gameTime()', 6000);
    }}

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
    let student=dealCard();
    if(student.city === "dal"){
        console.log("match")
    } else {
        console.log("no match")
    }
})

let butatx = document.querySelector('.atx');
butatx.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    let student=dealCard();
    console.log(studentCards[0]);
    if(student.city === "atx"){
        console.log("match");
    } else {
        console.log("no match");
    }
});

var rs = Math.floor()