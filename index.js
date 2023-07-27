let input = document.getElementById("input")
let today = document.getElementById("today")
let value = document.getElementById("value")
let but = document.querySelector("button")

today.innerHTML = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

but.addEventListener("click",()=>{
// value.innerHTML = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(input.value);
let date = new Date(input.value)
console.log(Date.now())
console.log()
value.innerHTML = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(date.setMilliseconds(0));
})