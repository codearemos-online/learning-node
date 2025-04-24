const createCounter = () => {
    let number = 0;
    return {
        increment() {
            number++;
        },
        decrement() {
            number--;
        },
        getNumber() {
            return number;
        }
    }
}

module.exports = {
    createCounter
}