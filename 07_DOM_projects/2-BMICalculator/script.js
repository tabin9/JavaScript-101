const form = document.querySelector('form')     // why select all form? because submit button inside of form

// whenever form is submitted, it gets submitted either by post-type submit or get-type submit
// whenever form is submitted, the value go to the URL or the server by default
// we have to stop that, because we don't want to send it to the server, stop the default action of form

// const height = parseInt(document.querySelector('#height').value)
// this use case will give you empty values

form.addEventListener('submit', function(e) {
    // stop the default action
    e.preventDefault()

    // now we need value: height and weight. The value might be in a string, so it's best to convert to int
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')       // since its an element, no need to parseInt it

    // why did we write values inside the event listner func? We need the values when we submit the form
    // when we write it outside the form func, the value inside the value will be 0, that'll cause problem

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight`
    } else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        //toFixed(2) to keep it to 2 decimal value
        if (BMI < 18.6) {
            result.innerHTML = `BMI: ${BMI} is UNDER WEIGHT`
        } else if(BMI >= 18.6 && BMI <= 24.9) {
            result.innerHTML += `BMI: ${BMI} is NORMAL RANGE`
        } else if(BMI > 24.9) {
            result.innerHTML = `BMI: ${BMI} is OVER WEIGHT`
        }
    }
})