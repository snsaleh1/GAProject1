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
    cardImage: "images/atxdevgovindji.png"
}, 
    {
    name: "Heather Etheridge",
    city: "atx",
    cardImage: "images/atxheatheretheridge.png"
},
    {
    name: "Jack Ground",
    city: "atx",
    cardImage: "images/atxjackground.png"
},
    {
    name: "Beverly Osoria",
    city: "atx",
    cardImage: "images/atxbeverlyosoria.jpg"
},
    {
    name: "Chris Mayfield",
    city: "atx",
    cardImage: "images/atxchrismayfield.png"
},
    {
    name: "Emily Landgrebe",
    city: "atx",
    cardImage: "images/atxemilylandgrebe.png"
},
    {
    name: "Jared Rodriguez",
    city: "atx",
    cardImage: "images/atxjaredrodriguez.png"
},
    {
    name: "Joe Gerhard",
    city: "atx",
    cardImage: "images/atxjoegerhard.png"
},
    {
    name: "Chris Williams",
    city: "atx",
    cardImage: "images/atxchriswilliams.png"
},
    {
    name: "David Bae",
    city: "atx",
    cardImage: "images/atxdavidbae.png"
}, {
    name: "Francis Cancio",
    city: "atx",
    cardImage: "images/atxfranciscancio.png"
}, {
    name: "Nova Hasley",
    city: "atx",
    cardImage: "images/atxnovahasley.png"
}, {
    name: "Emily Moore",
    city: "atx",
    cardImage: "images/atxemilymoore.png"
}, {
    name: "Elco Garcia",
    city: "atx",
    cardImage: "images/atxelcogarcia.png"
}, {
    name: "Chris Perez",
    city: "atx",
    cardImage: "images/atxchrisperez.png"
}, {
    name: "Taylor Lacerte",
    city: "atx",
    cardImage: "images/atxtaylorlacerte.png"
}, {
    name: "Robin Dao",
    city: "atx",
    cardImage: "images/atxrobindao.png"
}, {
    name: "Mason Pierce",
    city: "atx",
    cardImage: "images/atxmasonpierce.png"
}, {
    name: "Vittoria Erdem",
    city: "atx",
    cardImage: "images/atxvittoriaerdem.png"
}, {
    name: "Jeremiah Garza",
    city: "atx",
    cardImage: "images/atxjeremiahgarza.png"
}, {
    name: "Connor Mccabe",
    city: "atx",
    cardImage: "images/atxconnormccabe.png"
}, {
    name: "Lily Best",
    city: "atx",
    cardImage: "images/atxlilybest.png"
}, {
    name: "Julia Galan",
    city: "atx",
    cardImage: "images/atxjuliagalan.png"
}, {
    name: "Andrew Theismann",
    city: "dal",
    cardImage: "images/dalandrewtheismann.png"
}, {
    name: "Beth Smith",
    city: "dal",
    cardImage: "images/dalbethsmith.png"
}, {
    name: "Cole Holmes",
    city: "dal",
    cardImage: "images/dalcoleholmes.png"
}, {
    name: "Daniel Scott",
    city: "dal",
    cardImage: "images/daldanielscott.png"
}, {
    name: "James Talambas",
    city: "dal",
    cardImage: "images/daljamestalambas.png"
}, {
    name: "Joseph Hunt",
    city: "dal",
    cardImage: "images/daljosephhunt.png"
}, {
    name: "Phillip Avila",
    city: "dal",
    cardImage: "images/dalphillipavila.png"
}, {
    name: "Ruben Caceres",
    city: "dal",
    cardImage: "images/dalrubencaceres.png"
}, {
    name: "Ryan George",
    city: "dal",
    cardImage: "images/dalryangeorge.png"
}, {
    name: "Sam Gathoni",
    city: "dal",
    cardImage: "images/dalsamgathoni.png"
}, {
    name: "Michael Martinez",
    city: "dal",
    cardImage: "images/dalmichaelmartinez.png"
}, {
    name: "Michael Hinte",
    city: "dal",
    cardImage: "images/dalmichaelhinte.png"
}
]
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

//dealCard will start off false 
let start = false;

/*----- app's state (variables) -----*/
let cityCounts, timer, winner, time, randStu, score;

/*----- cached element references -----*/
let picSpot = document.getElementById("placeHolder");
let stuPic = document.getElementById("stuPic");
let stuName = document.getElementById("stuName");

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
    randStu = Math.floor(Math.random() * maxRange);
    console.log(randStu ,maxRange)
    let cardPulled=studentCards[randStu];
    console.log(cardPulled);
    stuPic.setAttribute('src', `${studentCards[randStu].cardImage}`);
    stuName.innerHTML=`${studentCards[randStu].name}`;
    objArr.push(studentCards[randStu]);
    studentCards.splice(randStu, 1);
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

function getStudImage(idx){
    let studImage = studentCards[idx].cardImage;
    console.log(studImage);
    return studImage;
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
            document.getElementById('stuPic').style.display='block';
    }else {
        clearInterval(timer);
        timerTwo.textContent = `GAME OVER`;
        document.querySelector('.startGame').style.display='block';
        document.querySelector('.dealCard').style.display='none';
        document.getElementById('stuPic').style.display='none';
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
    console.log(studentCards[randStu].city === input ? "match" : "no match");
})

let butatx = document.querySelector('.atx');

butatx.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(studentCards[randStu].city === input ? "match" : "no match");
});

var rs = Math.floor()
render();