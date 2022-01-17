const somethingWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey!')
        }else{
            reject('Whuuups')
        }
    })
};

// somethingWillHappen()
//     .then(response => console.log(response))
//     .catch(error => console.error(error))


const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>resolve('Lo logre'), 2000)
        }else{
            const error = new Error('Oh No !')
            reject(error)
        }
    })
}

// somethingWillHappen2()
//     .then(resp => console.log(resp))
//     .catch(error => console.error(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(resp => console.log(resp))