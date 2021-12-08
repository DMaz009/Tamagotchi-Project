console.log("Tamagotchi");

let userName = "";
// let timer = "";

class Tamagotchi {
    constructor(userName, hunger, sleep, boredom, age) {
        this.userName = userName
        this.hunger = hunger
        this.sleep = sleep
        this.boredom = boredom
        this.age = age
    }

    feed() {
        this.hunger -= 3
        this.sleep += 1
        this.boredom += 1
        console.log(this.hunger, this.age, this.sleep);
        hungerScore.innerText = this.hunger;
        sleepScore.innerText = this.sleep;
        playScore.innerText = this.boredom;
    }

    sleeping() {
        console.log("Lights Out. Sleepy Time!");
        this.sleep -= 3
        this.hunger += 1
        this.boredom += 1
        console.log(this.hunger, this.age, this.sleep);
        sleepScore.innerText = this.sleep;
        hungerScore.innerText = this.hunger;
        playScore.innerText = this.boredom;
    }

    playing() {
        console.log("Let's Play!");
        this.boredom -= 3
        this.hunger += 1
        this.sleep += 1
        console.log(this.hunger, this.sleep, this.boredom);
        playScore.innerText = this.boredom;
        sleepScore.innerText = this.sleep;
        hungerScore.innerText = this.hunger;

    }

    aging() {
        this.age += 1
        this.hunger += 1
        this.sleep += 1
        console.log(this.hunger, this.age, this.sleep);
        ageScore.innerText = this.age
        sleepScore.innerText = this.sleep;
        hungerScore.innerText = this.hunger;
    }
}

class Pet extends Tamagotchi {
    constructor(userName, hunger, sleep, boredom, age) {
        super(userName, hunger, sleep, boredom, age)
        this.userName = userName
        this.hunger = 2
        this.sleep = 2
        this.boredom = 2
        this.age = 0
    }
}

const naming = () => {
    userName = document.getElementById("start").value
    tom.userName = userName
    console.log(userName);
    popScore.innerText = (`Your Tamagotchi name is ${userName}! The game has started!`)
    return userName
}




//Instance of Tamagotchi Class
const tom = new Pet("")




console.log(tom.userName);

////////////////
//DOM SELECTIONS//
const hungerScore = document.querySelector('#hungerScore')

const sleepScore = document.querySelector('#sleepScore')

const playScore = document.querySelector('#playScore')

const ageScore = document.querySelector('#ageScore')

const feedBtn = document.querySelector('#feedBtn')

const popScore = document.querySelector('#popScore')

const sleepBtn = document.querySelector('#sleepBtn')

const night = document.querySelector('.character')

const playBtn = document.querySelector('#playBtn')

const submitBtn = document.querySelector('#nameInput');

const title = document.querySelector('title')



// EVENTS ////

submitBtn.addEventListener("click", () => {
 naming()
 let timer = setInterval(() => {
   tom.aging()
   if (tom.age > 4) {
     console.log("Gameover");
     clearInterval(timer)
   }
}, 5000);
})

feedBtn.addEventListener('click', () => {
    console.log("Eating!");
    // alert("Eating! Check your scores.")
    tom.feed()
    popScore.innerText = `Eating! Yum Yum. Hunger score ${tom.hunger}`
})


sleepBtn.addEventListener('click', () => {
    night.style.opacity = "0";

    setTimeout(() => {
        night.style.opacity = "100%";
    }, 7000);

    tom.sleeping()
    popScore.innerText = `You sent your Tamagotchi to bed. They will be back soon! Sleep score ${tom.sleep}`

})

playBtn.addEventListener('click', () => {
    console.log("Playing!");
    // alert("Sleeping! Check your scores.")
    tom.playing()
    popScore.innerText = `Yaayyy Playtime! Boredom score ${tom.boredom}`
})














//
