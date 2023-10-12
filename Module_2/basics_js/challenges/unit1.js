const isHappyTicket = (ticket) => {
    let firstHalf = 0
    let secondHalf = 0
    for (let i = 0; i < ticket.length; i++) {
        if (i < ticket.length / 2) {
            firstHalf += Number(ticket[i])
            // console.log('+ ' + firstHalf + ' ' +  i)
        }else {
            secondHalf += Number(ticket[i])
            // console.log('* ' + secondHalf + ' ' + i)
        }
    }
    return firstHalf === secondHalf
}

console.log(isHappyTicket('385916'))
console.log(isHappyTicket('231002'))
console.log(isHappyTicket('1222'))
console.log(isHappyTicket('054702'))
console.log(isHappyTicket('00'))
