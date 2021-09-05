

 //---------------------- Асинхронные функции   async  -----------------


 // //Пример синтаксиса для async функций, методов объектов, классов:

// async function fn() { } // для функции

// const fn = async function () { } // для функционального выражения

// const arr = async () => { } // для стрелочной функции

// const x = {  // для метода объекта
//     async geName() { }
// }

// class X {  // для метода класса
//     async getName() { }
// }
 

 function getFruit(name) {
    const fruits = {
        strasberry: 'клубника',
        kiwi: 'киви',
        apple: 'яблоко'
    }
    return new Promise ( (resolve, reject) => setTimeout( ()=> resolve(fruits[name]), 500));  
};

function makeSmoothie() {
    getFruit('apple').then(apple => console.log(apple));

    getFruit('kiwi').then(apple => console.log(apple));
 }

makeSmoothie();



async function asyncMakeSmoothie() {

    try {
         //   console.time('asyncMakeSmoothie')  // Для проверки выполнения кода ставим метки :
        //  //в начале и  console.timeEnd('asyncMakeSmoothie') в конце
        const apple =  getFruit('apple');
        const kiwi = getFruit('kiwi');
        const strasberry = getFruit('strasberry');

        const fruits = await Promise.all([apple, kiwi, strasberry]);
        console.log(fruits);

        return fruits;
       // console.timeEnd('asyncMakeSmoothie')

    }catch (error) {
        console.log ("Ошибка!", error)
    }

    
 }

asyncMakeSmoothie();
asyncMakeSmoothie().then(fruits => console.log (fruits) )
