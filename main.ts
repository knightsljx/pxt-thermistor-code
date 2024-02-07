//% color="#AA278D"
namespace hello {
    //% block="say hello"
    export function sayHello() {
        console.log("Hello World");
    }
}

input.onButtonPressed(Button.A, function () {
    hello.sayHello();
})
