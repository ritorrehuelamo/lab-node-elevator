class Elevator {
  constructor() {
    this.floor = 0
    this.MAXFLOOR = 10
    this.direction = 'Stand'
    this.requests = []
    this.waitingList = []
    this.passengers = []
    this.interval
  }

  start() {
    this.interval = setInterval(() => this.update(), 1000)
  }

  stop() {
    clearInterval(this.interval)
  }

  update() {
    this.log()
    if (this.requests.length == 0) this.stop()
    else(this.requests[0] == this.floor) ? this._compareAndLeave() : (this.requests[0] > this.floor) ? this.floorUp() : this.floorDown()
  }

  _compareAndLeave() {
    this.requests.shift()
    this._passengersLeave()
    this._passengersEnter()
  }

  _passengersEnter() {
    this.direction = 'Up'
    this.waitingList.forEach(person => {
      if (person.originFloor == this.floor) {
        this.passengers.push(person)
        this.requests.push(person.destinationFloor)
        console.log(`${person.name} has enter the elevator`)
      }
    })
    this.waitingList = this.waitingList.filter(person => person.destinationFloor != this.floor)
  }

  _passengersLeave() {
    this.direction = 'Down'
    this.passengers.forEach(person => {
      person.destinationFloor == this.floor ? console.log(`${person.name} has left the elevator`) : false
    })
    this.passengers = this.passengers.filter(person => person.destinationFloor != this.floor)
  }

  floorUp() {
    this.direction = 'Up'
    this.floor < this.MAXFLOOR ? this.floor++ : console.log('You can not go ip')
  }

  floorDown() {
    this.direction = 'Down'
    this.floor > 0 ? this.floor-- : console.log('You can not go down')
  }

  call(person) {
    this.requests.push(person.originFloor)
    this.waitingList.push(person)
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
