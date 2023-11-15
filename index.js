const order = window.prompt("please enter your the Froyo Flavors you want seperate by commas");

processOrder = (order) => {
    let frequency = {};
    const flavors = order.split(' ');
    for( const flavor of flavors) {
        console.log(flavor)
        if (flavor in flavors) {
            frequency[flavor] += 1 
        } else {
            frequency[flavor] = 1
        }
    }
    console.log(flavors)
    return frequency
  
}

console.log(processOrder(order));




//parse flabors into an array
//make an object to track flavors
//iterate the array of flavors and update the object
//return an object
// # of flabors
