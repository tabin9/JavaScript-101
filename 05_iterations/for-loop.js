// for loops

let element;
for (let i = 0; i <= 10; i++) {
    element = i;
    console.log(element);
}

// nested loops to print tables
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// for loop on arrays

let myArray = ['flash', 'batman', 'superman']
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`detected 5`);
        break;      // breaks out of the loop
    }
    console.log(`value of index is ${index}`);    
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`detected 5`);
        continue;      // the next statment in this current iteration
        // is skipped, then the index is incremented and loop goes on.
    }
    console.log(`value of index is ${index}`);    
}