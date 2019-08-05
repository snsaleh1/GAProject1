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
}, {
    name: "Andrew Theismann",
    city: "dal",
    cardImage: "image/andrewtheismann"
}, {
    name: "Beth Smith",
    city: "dal",
    cardImage: "image/dalbethsmith"
}, {
    name: "Cole Holmes",
    city: "dal",
    cardImage: "image/dalcoleholmes"
}, {
    name: "Daniel Scott",
    city: "dal",
    cardImage: "image/daldanielscott"
}, {
    name: "James Talambas",
    city: "dal",
    cardImage: "image/daljamestalambas"
}, {
    name: "Joseph Hunt",
    city: "dal",
    cardImage: "image/daljosephhunt"
}, {
    name: "Phillip Avila",
    city: "dal",
    cardImage: "image/dalphillipavila"
}, {
    name: "Ruben Caceres",
    city: "dal",
    cardImage: "image/dalrubencaceres"
}, {
    name: "Ryan George",
    city: "dal",
    cardImage: "image/dalryangeorge"
}, {
    name: "Sam Gathoni",
    city: "dal",
    cardImage: "image/dalsamgathoni"
}, {
    name: "Michael Martinez",
    city: "dal",
    cardImage: "image/dalmichaelmartinez"
}, {
    name: "Michael Hinte",
    city: "dal",
    cardImage: "image/dalmichaelhinte"
}
]
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

//dealCard will start off false 
let start = false;

/*----- app's state (variables) -----*/
let cityCounts, timer, winner, time, randStu;

/*----- cached element references -----*/


/*----- event listeners -----*/
document.querySelector('.dealCard')
.addEventListener('click', dealCard);

document.querySelector('.startGame')
.addEventListener('click', startGame);

/*----- functions -----*/

console.log(Object.keys(studentCards));


function dealCard() {
    let maxRange = studentCards.length;
    let objArr = [];
    randStu = getRandomInt (0, maxRange);
    console.log(randStu);
    let cardPulled=studentCards[randStu];
    objArr.push(studentCards[randStu]);
    studentCards.splice(randStu, 1);
    maxRange --;
    return cardPulled;

}
function getRandomInt(min, maxRange) {
    min = Math.ceil(min);
    maxRange = Math.floor(maxRange);
    return Math.floor(Math.random() * (maxRange - min)) + min;
}

function startGame(){
    let firstCard = getRandomInt(0, studentCards.length);
    start = true;
    time = 60;
    countdown();
    render();
}

function render() {
    if(start) {
        document.querySelector('.startGame').style.display='none';
        document.querySelector('.dealCard').style.display='block';
} else {
        document.querySelector('.startGame').style.display='block';
        document.querySelector('.dealCard').style.display='none';
    }
}

let timerTwo = document.getElementById('demo');
function countdown(){
    timer = setInterval(function (){
        time--;
        if(time){
            timerTwo.textContent = `Time left: ${time}`;
    }else {
        clearInterval(timer);
        timerTwo.textContent = `GAME OVER`;
        document.querySelector('.startGame').style.display='block';
        document.querySelector('.dealCard').style.display='none';
        time = 60;
        }
    }, 1000)
}

function gameOver(){
    document.querySelector('.startGame').style.display='block';
    document.querySelector('.dealCard').style.display='none';
}

let button = document.querySelector('.sf');

button.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(studentCards[randStu].city === input ? "match" : "no match");
})

let butsm = document.querySelector('.sm');

butsm.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(studentCards[randStu].city === input ? "match" : "no match");
})

let butdal = document.querySelector('.dal');

butdal.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    // console.log(typeof input)
    console.log(studentCards[randStu].city === input ? "match" : "no match");
})

let butatx = document.querySelector('.atx');
butatx.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(studentCards[randStu].city === input ? "match" : "no match");
});

var rs = Math.floor()
render();