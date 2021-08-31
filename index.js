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


 //----------------------

async function getFruit(name) {
    const Fruits = {
        strasberry: 'клубника',
        kiwi: 'киви',
        apple: 'яблоко'
    }
};

getFruit().then(console.log);