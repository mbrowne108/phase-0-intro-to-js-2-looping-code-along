const cards = []

function writeCards(names, event) {
    for (let c = 0; c < names.length; c++) {
        cards.push(`Thank you, ${names[c]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return cards;
}

function countDown() {
    let count = 10
    while (count > -1) {
        console.log(count--);
    }
}

countDown()