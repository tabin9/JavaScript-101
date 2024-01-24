// lexical scoping:

// children functions: can access variables of parents, grand-parents
// sibling functions: can NOT access variables of sibling functions
// parent functions: can NOT access variables of children functions


function init() {       // outer function
    let outerVar = "Mozilla";
    // console.log(innerVar);      // returns error, cannot access children
    function displayName() {    // inner function
        console.log(outerVar);      // name is outside of displayName scope
        let innerVar = 'Chrome';
    }
    displayName();              // run inner function
}
init();    // run outer function        // returns Mozilla



// Closures:
// when you return a function, not just the function is returned but its entire 
// scope is returned, its lexical scope. As described below.

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;     // we are returning just the inner function, but 
                            // note that the scope of outer function goes with
                            // it. The entire lexical scope is returned.
                            // With the lexical scope returned the inner
                            // function now has access to the 'name' variable
}
  
const myFunc = makeFunc();
myFunc()            // returns Mozilla

// real world closure problems:

// 1. say we want to create two buttons, green and orange which change the
//    background color of their respective names.
//    We do that easily by just using DOM and style buttons
/*      
document.getElementById("orange").onclick = function(){
    document.body.style.backgroundColor = `orange`
}
document.getElementById("green").onclick = function(){
    document.body.style.backgroundColor = `green`
}
*/

// 2. say we want to do this for 500 buttons, will we customize this for 500?
//    a) We will create a function with argument as color and write DOM code.
//    We will face problems; when we use this function with buttons, it
//    executes there and not onclick event. How do we fix it?
//    b) Use closure method, we create the function as before but now we
//    return the inner function we create, and use DOM within it.
/*
function clickHandler(color){
        // document.body.style.backgroundColor = `${color}` --> a)

        return function(){                                  --> b) 
            document.body.style.backgroundColor = `${color}`
        }
    }

    document.getElementById('orange').onclick = clickHandler("orange")
    document.getElementById('green').onclick = clickHandler("green")
*/