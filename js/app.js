console.log("Tomagotchi");

class Pets {
  constructor(name) {
    this.name= name
    this.hunger = 2
    this.sleep = 2
    this.boredom = 2
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

const tom = new Pets ()

const hungerScore = document.querySelector('#hungerScore')

const sleepScore = document.querySelector('#sleepScore')

const playScore = document.querySelector('#playScore')

const feedBtn = document.querySelector('#feedBtn')
const popScore = document.querySelector('#popScore')
feedBtn.addEventListener('click', () => {
  console.log("Eating!");
  // alert("Eating! Check your scores.")
  tom.feed()
  popScore.innerText = `Eating! Check your scores ${tom.hunger}`
})

const sleepBtn = document.querySelector('#sleepBtn')
sleepBtn.addEventListener('click', () => {
  console.log("Sleeping!");
  // alert("Sleeping! Check your scores.")
  tom.sleeping()
  popScore.innerText = `Sleeping! Check your scores ${tom.sleep}`
})

const playBtn = document.querySelector('#playBtn')
playBtn.addEventListener('click', () => {
  console.log("Playing!");
  // alert("Sleeping! Check your scores.")
  tom.playing()
  popScore.innerText = `Playing! Check your scores ${tom.boredom}`
})

const game = {





}








//
