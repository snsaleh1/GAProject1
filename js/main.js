//Rep Your City Game
/*----- constants -----*/
const studentCards = [{
    name: " Caleb Saleh ",
    city: "atx",
    cardImage: "images/atxcalebsaleh.png"
}, {
    name: " David Bae ",
    city: "atx",
    cardImage: "images/atxdavidbae.png"
},  {
    name: " Chighali Mouknass ",
    city: "atx",
    cardImage: "images/atxchighalimouknass.png"
},
    {
    name: " Dev Govindji ",
    city: "atx",
    cardImage: "images/atxdevgovindji.png"
}, 
    {
    name: " Heather Etheridge ",
    city: "atx",
    cardImage: "images/atxheatheretheridge.png"
},
    {
    name: " Jack Ground ",
    city: "atx",
    cardImage: "images/atxjackground.png"
},
    {
    name: " Beverly Osoria ",
    city: "atx",
    cardImage: "images/atxbeverlyosoria.jpg"
},
    {
    name: " Chris Mayfield ",
    city: "atx",
    cardImage: "images/atxchrismayfield.png"
},
    {
    name: " Emily Landgrebe ",
    city: "atx",
    cardImage: "images/atxemilylandgrebe.png"
},
    {
    name: " Jared Rodriguez ",
    city: "atx",
    cardImage: "images/atxjaredrodriguez.png"
},
    {
    name: " Joe Gerhard ",
    city: "atx",
    cardImage: "images/atxjoegerhard.png"
},
    {
    name: " Chris Williams ", 
    city: "atx",
    cardImage: "images/atxchriswilliams.png"
}, {
    name: " Francis Cancio ",
    city: "atx",
    cardImage: "images/atxfranciscancio.png"
}, {
    name: " Nova Hasley ",
    city: "atx",
    cardImage: "images/atxnovahasley.png"
}, {
    name: " Emily Moore ",
    city: "atx",
    cardImage: "images/atxemilymoore.png"
}, {
    name: " Elco Garcia ",
    city: "atx",
    cardImage: "images/atxelcogarcia.png"
}, {
    name: " Chris Perez ",
    city: "atx",
    cardImage: "images/atxchrisperez.png"
}, {
    name: " Taylor Lacerte ",
    city: "atx",
    cardImage: "images/atxtaylorlacerte.png"
}, {
    name: " Robin Dao ",
    city: "atx",
    cardImage: "images/atxrobindao.png"
}, {
    name: " Mason Pierce ",
    city: "atx",
    cardImage: "images/atxmasonpierce.png"
}, {
    name: " Vittoria Erdem ",
    city: "atx",
    cardImage: "images/atxvittoriaerdem.png"
}, {
    name: " Jeremiah Garza ",
    city: "atx",
    cardImage: "images/atxjeremiahgarza.png"
}, {
    name: " Connor Mccabe ",
    city: "atx",
    cardImage: "images/atxconnormccabe.png"
}, {
    name: " Lily Best ",
    city: "atx",
    cardImage: "images/atxlilybest.png"
}, {
    name: " Julia Galan ",
    city: "atx",
    cardImage: "images/atxjuliagalan.png"
}, {
    name: " Andrew Theismann ",
    city: "dal",
    cardImage: "images/dalandrewtheismann.png"
}, {
    name: " Beth Smith ",
    city: "dal",
    cardImage: "images/dalbethsmith.png"
}, {
    name: " Cole Holmes ",
    city: "dal",
    cardImage: "images/dalcoleholmes.png"
}, {
    name: " Daniel Scott ",
    city: "dal",
    cardImage: "images/daldanielscott.png"
}, {
    name: " James Talambas ",
    city: "dal",
    cardImage: "images/daljamestalambas.png"
}, {
    name: " Joseph Hunt ",
    city: "dal",
    cardImage: "images/daljosephhunt.png"
}, {
    name: " Phillip Avila ",
    city: "dal",
    cardImage: "images/dalphillipavila.png"
}, {
    name: " Ruben Caceres ",
    city: "dal",
    cardImage: "images/dalrubencaceres.png"
}, {
    name: " Ryan George ",
    city: "dal",
    cardImage: "images/dalryangeorge.png"
}, {
    name: " Sam Gathoni ",
    city: "dal",
    cardImage: "images/dalsamgathoni.png"
}, {
    name: "Kevinn Arbas",
    city: "dal",
    cardImage: "images/dalkevinnarbas.png"
}, {
    name: " Michael Martinez ",
    city: "dal",
    cardImage: "images/dalmichaelmartinez.png"
}, {
    name: " Michael Hinte ",
    city: "dal",
    cardImage: "images/dalmichaelhinte.png"
}, {
    name: "Aly Nguyen",
    city: "sf",
    cardImage: "images/sfalynguyen.png"
}, {
    name: "Anami",
    city: "sf",
    cardImage: "images/sfanami.png"
}, {
    name: "Anna Filatova",
    city: "sf",
    cardImage: "images/sfannafilatova.png"
}, {
    name: "Braxton Toomer",
    city: "sf",
    cardImage: "images/sfbraxtontoomer.png"
}, {
    name: "Brock Whitbread",
    city: "sf",
    cardImage: "images/sfbrockwhitbread.png"
}, {
    name: "Charles Santana",
    city: "sf",
    cardImage: "images/sfcharlessantana.png"
}, {
    name: "Greg Merrill",
    city: "sf",
    cardImage: "images/sfgregmerrill.png"
}, {
    name: "Greg Redig",
    city: "sf",
    cardImage: "images/sfgregredig.png"
}, {
    name: "Jon Pak",
    city: "sf",
    cardImage: "images/sfjonpak.png"
}, {
    name: "Matthew Robin",
    city: "sf",
    cardImage: "images/sfmatthewrobin.png"
}, {
    name: "Ny Antsa Rajaonarison",
    city: "sf",
    cardImage: "images/sfnyantsarajaonarison.png"
}, {
    name: "Preston Hom",
    city: "sf",
    cardImage: "images/sfprestonhom.png"
}, {
    name: "Samantha Shackelford",
    city: "sf",
    cardImage: "images/sfsamanthashackelford.png"
}, {
    name: "Sorrel June",
    city: "sf",
    cardImage: "images/sfsorreljune.png"
}, {
    name: "Dave Koncsol",
    city: "sm",
    cardImage: "images/smdavekoncsol.png"
}, {
    name: "Jomar Mendoza",
    city: "sm",
    cardImage: "images/smjomarmendoza.png"
}, {
    name: "Michelle Cohen",
    city: "sm",
    cardImage: "images/smmichellecohen.png"
}, {
    name: "Muhammed Qadan",
    city: "sm",
    cardImage: "images/smmuhammedqadan.png"
}, {
    name: "Victor Gonzalez",
    city: "sm",
    cardImage: "images/smvictorgonzalez.png"
}, {
    name: "Amandeep Nijjar",
    city: "sm",
    cardImage: "images/smamandeepnijjar.png"
}, {
    name: "Leonel Rosales",
    city: "sm",
    cardImage: "images/smleonelrosales.png"
},
]

//dealCard will start off false 
let start = false;

/*----- app's state (variables) -----*/
let cityCounts, timer, winner, time, randStu, score, cardPulled;
let sfCount = 0;
let smCount = 0;
let dalCount = 0;
let atxCount = 0;
let objArr = [];
/*----- cached element references -----*/
let picSpot = document.getElementById("placeHolder");
let stuPic = document.getElementById("stuPic");
let stuName = document.getElementById("stuName");
let sfCountEl = document.querySelector('.sfCount');
let smCountEl = document.querySelector('.smCount');
let dalCountEl = document.querySelector('.dalCount');
let atxCountEl = document.querySelector('.atxCount');
let msgEl = document.querySelector('.msg');
let msgElTwo = document.querySelector('.msgTwo');
let resButEl = document.querySelector('.resBut');

/*----- event listeners -----*/
document.querySelector('.dealCard')
.addEventListener('click', dealCard);

document.querySelector('.startGame')
.addEventListener('click', startGame);

/*----- functions -----*/

console.log(Object.keys(studentCards));

function dealCard() {
    let maxRange = studentCards.length;
    randStu = Math.floor(Math.random() * maxRange);
    console.log(randStu ,maxRange)
    cardPulled=studentCards[randStu];
    console.log(cardPulled);
    stuPic.setAttribute('src', `${studentCards[randStu].cardImage}`);
    stuName.innerHTML=`${studentCards[randStu].name}`;
    objArr.push(studentCards[randStu]);
    studentCards.splice(randStu, 1);
    console.log(objArr)
    if (studentCards.length === 0){
        gameOver();
    }
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
        sfCountEl.textContent=`${sfCount}`;
        smCountEl.textContent=`${smCount}`;
        dalCountEl.textContent=`${dalCount}`;
        atxCountEl.textContent=`${atxCount}`;
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
            msgEl.innerText = '';
            setTimeout (msgEl.innerText, 1000);
            document.querySelector('.msgTwo').style.display='block';
        }else {
            clearInterval(timer);
            timerTwo.textContent = `You ran out of Time!`;
            document.querySelector('.startGame').style.display='block';
            document.querySelector('.dealCard').style.display='none';
            document.getElementById('stuPic').style.display='none';
            document.getElementById('stuName').style.display='none';
            document.querySelector('.msgTwo').style.display='block';
            document.querySelector('.msg').style.display='none';
            time = 60; 
    }
}, 1000)
}

function gameOver(){
    document.querySelector('.startGame').style.display='block';
    document.querySelector('.dealCard').style.display='none';
    msgEl.innerHTML="HEY...THANKS FOR PLAYING!";
    document.querySelector('.resBut').style.display='none';
    clearInterval(timer);
}

let button = document.querySelector('.sf');

button.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(cardPulled);
    if (sfCount === 7) {
        console.log("text");
        msgEl.innerText="GOLDEN LIKE THE GATE BRIDGE!";
        confetti.start(5000);
        document.getElementById('stuPic').style.display='none';
        document.getElementById('stuName').style.display='none';
        gameOver();
    }
    else if (cardPulled.city === input) {
        sfCount++
        sfCountEl.innerText = sfCount
        dealCard()
    } else {
    msgEl.innerText = "HAHA NOPE!";
    } 
})

let butsm = document.querySelector('.sm');

butsm.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(cardPulled);
    if (smCount === 5) {
        console.log("text");
        msgEl.innerText="HOIST UP THE JOHN B SAILS!";
        confetti.start(5000);
        document.getElementById('stuPic').style.display='none';
        document.getElementById('stuName').style.display='none';
        gameOver();
    }
    else if (cardPulled.city === input) {
        smCount++
        smCountEl.innerText = smCount
        dealCard()
    } else {
    msgEl.innerText = "YOU DON'T DESERVE THE BEACH!";
    } 
})

let butdal = document.querySelector('.dal');

butdal.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(cardPulled);
    if (dalCount === 7) {
        console.log("text");
        msgEl.innerText="BIGGER WINS IN TEXAS, Y'ALL!";
        confetti.start(5000);
        document.getElementById('stuPic').style.display='none';
        document.getElementById('stuName').style.display='none';
        gameOver();
    }
    else if (cardPulled.city === input) {
        dalCount++
        dalCountEl.innerText = dalCount
        dealCard()
    } else {
    msgEl.innerText = "TRY AGAIN, FOOL!";
    } 
})

let butatx = document.querySelector('.atx');

butatx.addEventListener('click', function(evt){
    let input = evt.srcElement.className
    console.log(cardPulled);
    if (atxCount === 9) {
        console.log("text");
        msgEl.innerText="BETTA THAN BBQ, YOU IS! -YODA";
        confetti.start(5000);
        document.getElementById('stuPic').style.display='none';
        document.getElementById('stuName').style.display='none';
        gameOver();
    }
    if (cardPulled.city === input) {
        atxCount++
        atxCountEl.innerText = atxCount
        dealCard()
    } else {
    msgEl.innerText = "NOOOOOOOOOOOOOO!!!";
    } 
})

var rs = Math.floor()
render();