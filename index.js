console.log("Test")

try {
    console.log("Внутри try  до myVar;")
    myVar;

     console.log("Внутри try  после myVar;")

} catch (error) {
    //Пример ошибки. Рассматриваем этот объект
   // console.dir(error.name)
  //   console.log(error.message)
     console.log(error.stack)
     console.log("Ошибка!")
}

 console.log("После try...catch")