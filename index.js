console.log("Test")

// try {
//     console.log("Внутри try  до myVar;")
//     myVar;

//      console.log("Внутри try  после myVar;")

// } catch (error) {
//     // Пример ошибки. Рассматриваем этот объект
//     // console.dir(error.name)
//     // console.log(error.message)
//      console.log(error.stack)
//      console.log("Ошибка!")
// }

// console.log("После try...catch")
 


 //----------------------

// const validJSON = '{"name": "Mango", "age": 3 }';
// const invalidJSON = '{бекенд вернул вот такое чудо}';

// try {
//     console.log(JSON.parse(invalidJSON));
// } catch (error) {
//     console.log(error);
//     console.log("Ошибка!")
//     if (error.name === "SyntaxError") {
//         console.log("Ошибка парса JSON , надо что-то делать!")
//     }
// }

//  console.log("После try...catch")


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
