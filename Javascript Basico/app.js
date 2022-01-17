const lista = [
    300,
    200,
    110,
    111110,
    12,
    500,
];


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce((valAcumulado,valNuevo) => valAcumulado + valNuevo )
    const promedio = sumaLista / lista.length
    return promedio
}

const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

function calcularModa(array){
    const objetoLista = {};
    
    array.forEach((valor)=>{
        if(objetoLista[valor]){
            objetoLista[valor] += 1
        }else{
            objetoLista[valor] = 1
        }
    })
    
    const arrayListaNueva = Object.entries(objetoLista).sort((a,b) => a[1]-b[1]);
    return arrayListaNueva[arrayListaNueva.length - 1][0];
}

const lista2 = [7,8,9,10,11,12,11,15];

function calcularMediana(arr){
    if(lista2.length % 2 === 0){
        return lista2[(lista2.length/2) - 1] + lista2[(lista2.length/2)];
    }else{
        return lista2[Math.ceil(lista2.length/2)-1];
    }
}

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


function calcularPromedioPonderado(arr){
    const arrayValorMateria = notes.map(valor => valor.credit * valor.note);
    const totalMaterias = arrayValorMateria.reduce((valorAcum, valorNuev)=> valorAcum + valorNuev)
    
    const arrayValCredit = notes.map(note => note.note)
    const totalCredits = arrayValCredit.reduce((valorAcum, valorNuev)=> valorAcum + valorNuev)
    
    
    const totalPromedioPonderado = totalMaterias/totalCredits
    return totalPromedioPonderado;
}



const salarios = colombia.map(val => val.salary).sort((a,b)=> a - b );

const mediana = (salarys)=>{
    if(salarys.length % 2 === 0 ) {
        return (salarys[(salarys.length/2)-1]) + (salarys[salarys.length/2]);
    }
    return salarys[Math.ceil(salarys.length/2)];
}


const medianaGeneral = mediana(salarios);

// Mediana del TOP 10% 

const spliceStart = (salarios.length * (100 - 10) ) / 100;;
const spliceCount = salarios.length - spliceStart;

const salariosTop10 = salarios.splice(spliceStart, spliceCount);
const medianaTop10 = mediana(salariosTop10);

console.log({
    medianaGeneral,
    medianaTop10
});

