console.log("Let's start!");

let listic = [];

for (let i = 0; i < 10; i++) {
    listic.push(i);
    // debugger;
    console.log(`Now in listic there are: ${listic}`);
}

console.log("Let's finish!");

function stacks() {
    deepStacks();
    function deepStacks() {
        debugger;
        console.log("Deep");
    }
}

stacks();