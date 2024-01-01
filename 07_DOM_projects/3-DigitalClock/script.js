const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toTimeString())

// we want time to update all the time
setInterval(function(){
    // have a date variable with Date type
    let date = new Date()
    // add date time to the innerHTML of clock
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)