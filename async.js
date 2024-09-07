// ? Async functions are a way to work with asynchronous code in a more synchronous way. They are built on top promises and are syntatic sugar for promises.

console.log("Ordering your pizza...");

// Creating a promise 
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        // resolve and reject are callback functions
        // what is call back function?
        // A callback function is a function that is passed as an argument function, to be "called back" at a later time.
        let order= true;
        
        if (order){
            setTimeout(()=> { // setTimeout is used to simulate a delay
                resolve("After 5 seconds, Pizza delivered!");
            }, 5000);
        }else {
            setTimeout(() =>{ //setTimeout is used to simulate a delay
                reject("After 5 seconds, Pizza is not delivered!");
            }, 5000);
        }
    })
};
// calling the function with a promise
// use.then() to handle with resolve promise
// use.catch() to handle the rejected promise
pizzaPromise()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("Waiting for your pizza...");
// Terminology
// Promise: An object that represents the eventual
// Completion(or Failure) of an asynchronous 
// Resolve: A callback function that is used when the promise is fulfilled.
// Reject: A callback function that is used when the promise is rejected.
//.then(): A method that used to handle the resolved promise.
// .catch(): A method that used to handle the rejected promise.