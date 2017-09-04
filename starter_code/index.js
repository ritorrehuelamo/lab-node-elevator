const Elevator = require('./elevator.js')
const Person = require('./person.js')

let elevator = new Elevator()
let peter = new Person('Peter', 3, 7)
let aaron = new Person('Aaron', 2, 10)
let louis = new Person('Louis', 5, 1)
let arthur = new Person('Arthur', 4, 9)

elevator.start()

elevator.call(peter)

setTimeout(() => elevator.call(aaron), 5000)
setTimeout(() => elevator.call(louis), 3000)
setTimeout(() => elevator.call(arthur), 6000)
