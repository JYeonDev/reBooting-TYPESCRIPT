{
  // JS
    // function isAdd(num1, num2) {
    //   return num1 + num2;
    // }

    // // TS
    // function add(num1: number, num2: number):number {
    //   return num1 + num2;
    // }

    // function jsFetchNum(id: string): Promise<number> {
    //   return new Promise((resolve, reject) => {
    //     resolve(100)
    //   })
    // }


    // Optinal parameter
    function printName(firstName: string, lastName?: string) {
      console.log(firstName)
      console.log(lastName)
    }

    // Default parameter 
    function printMessage(message: string = "default message") {
      console.log(message)
    }
    printMessage()

    // Rest parameter
    function addNumbers(...numbers: number[]): number {

    }
    console.log();
    
}