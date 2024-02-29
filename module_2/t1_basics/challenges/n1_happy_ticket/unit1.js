const isHappyTicket = (ticket) => {
    let firstHalf = 0;
    let secondHalf = 0;
    for (let i = 0; i < ticket.length; i++) {
        if (i < ticket.length / 2) {
            firstHalf += Number(ticket[i]);
        } else {
            secondHalf += Number(ticket[i]);
        }
    }
    return firstHalf === secondHalf;
};

console.log(isHappyTicket('385916'));
console.log(isHappyTicket('054702'));
