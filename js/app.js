console.log("Tamagotchi");

let userName = "";

class Tamagotchi {
  constructor(userName) {
    this.userName= userName
    this.hunger = 6
    this.sleep = 6
    this.boredom = 6
    this.age = 2
  }

  feed () {
    this.hunger -= 3
    this.sleep += 1
    this.boredom += 1
    console.log(this.hunger, this.age, this.sleep);
    hungerScore.innerText = this.hunger;
    sleepScore.innerText = this.sleep;
    playScore.innerText = this.boredom;
  }

  sleeping () {
    console.log("Lights Out. Sleepy Time!");
    this.sleep -= 3
    this.hunger += 1
    this.boredom += 1
    console.log(this.hunger, this.age, this.sleep);
    sleepScore.innerText = this.sleep;
    hungerScore.innerText = this.hunger;
    playScore.innerText = this.boredom;
  }

  playing () {
    console.log("Let's Play!");
    this.boredom -= 3
    this.hunger += 1
    this.sleep += 1
    console.log(this.hunger, this.sleep, this.boredom);
    playScore.innerText = this.boredom;
    sleepScore.innerText = this.sleep;
    hungerScore.innerText = this.hunger;

  }

  aging () {
    this.age += 1
    this.hunger += 1
    this.sleep += 1
    console.log(this.hunger, this.age, this.sleep);
    ageScore.innerText = this.age
    return aging
  }
}



const naming = () => {
  userName = document.getElementById("start").value
  console.log(userName);
  popScore.innerText = (`Your Tamagotchi name is ${userName}! The game has started!`)
  return userName
}





//Instance of Tamagotchi Class
const tom = new Tamagotchi(userName)




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
 setInterval(() => {
  tom.age ++
  console.log(tom.age)
  ageScore.innerText = tom.age
  sleepScore.innerText = this.sleep;
  hungerScore.innerText = this.hunger;
}, 3000);
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
    night.style.opacity = "100%";}
  , 7000);

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
