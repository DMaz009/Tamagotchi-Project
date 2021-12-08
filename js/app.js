console.log("Tamagotchi");



class Pets {
  constructor(name) {
    this.name= name
    this.hunger = 6
    this.sleep = 6
    this.boredom = 6
    this.age = 2
  }

  feed () {
    this.hunger -= 2
    this.age += 1
    this.sleep += 1
    console.log(this.hunger, this.age, this.sleep);
    hungerScore.innerText = this.hunger;
  }

  sleeping () {
    console.log("Lights Out. Sleepy Time!");
    this.sleep -= 2
    this.hunger += 1
    this.age += 1
    console.log(this.hunger, this.age, this.sleep);
    sleepScore.innerText = this.sleep;
  }

  playing () {
    console.log("Let's Play!");
    this.boredom -= 2
    this.hunger += 1
    this.sleep += 1
    this.age += 1
    console.log(this.hunger, this.age, this.sleep, this.boredom);
    playScore.innerText = this.boredom;

  }

}

//Instance of Class
const tom = new Pets ()

const print = () => {
  let userName = document.getElementById("start").value
  console.log(userName);
  alert(userName)
}


////////////////
//DOM SELECTIONS//
const hungerScore = document.querySelector('#hungerScore')

const sleepScore = document.querySelector('#sleepScore')

const playScore = document.querySelector('#playScore')

const feedBtn = document.querySelector('#feedBtn')

const popScore = document.querySelector('#popScore')

const sleepBtn = document.querySelector('#sleepBtn')

const night = document.querySelector('.character')

const playBtn = document.querySelector('#playBtn')



// EVENTS ////


feedBtn.addEventListener('click', () => {
  console.log("Eating!");
  // alert("Eating! Check your scores.")
  tom.feed()
  popScore.innerText = `Eating! Yum Yum. Hunger score ${tom.hunger}`
})


sleepBtn.addEventListener('click', () => {
  night.style.opacity = "0";

  setTimeout(
    () => {
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
