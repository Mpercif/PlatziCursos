const doSomethingAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('Do Somethin Async'), 2000)
        : reject(new Error('Test Error'))
    })
}

const functionAsync = async ()=>{
    const something = await doSomethingAsync()
    console.log(something);
}

// console.log('Before');
// functionAsync()
// console.log('After');

const anotherFunction = async ()=>{
    try {
        const something = await doSomethingAsync()
        console.log(something);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before');
anotherFunction()
console.log('After');