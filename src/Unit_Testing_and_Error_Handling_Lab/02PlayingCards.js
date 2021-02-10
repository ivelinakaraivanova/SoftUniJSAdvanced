function createCard(face, suit) {
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (validFaces.includes(face) == false) {
        throw new Error ('Error');
    } else if (Object.keys(suits).includes(suit) == false) {
        throw new Error ('Error');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`;
        }
    }
}

const myCard = createCard('A', 'S')
const yourCard = createCard('10', 'g')
const hisCard = createCard('1', 'C')
console.log(myCard.toString())
console.log(yourCard.toString())
console.log(hisCard.toString())