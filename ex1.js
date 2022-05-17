// document.addEventListener("DOMContentLoaded", function () {
//     new TypeIt("#element", {
//       strings: ["This is my string!"],
//     }).go();
//   });

const instance = new TypeIt('#elez', {
})
.type('My Name Is <u>AARON SMITH</u>') 
.pause(500)
.type('<br>')
.type('I am a FullStack Developr!')
.move(-2, {delay: 250})
.type('e', {delay: 250})
.move(null, {to: 'end'})
.go();
