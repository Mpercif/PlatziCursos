

function suma(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(6,2,suma));


function date(callback) {
    console.log(new Date);
    setTimeout(()=> {
        const date = new Date;
        callback(date)
    }, 3000 )
}

function mostarDate(date) {
    console.log(date);
}

date(mostarDate)


