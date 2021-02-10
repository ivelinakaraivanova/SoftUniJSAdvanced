function printDeckOfCards(cards) {
    let isInvalid = false;

    function createCard (face, suit) {
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
    
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
        if (!validFaces.includes(face) || !Object.keys(suits).includes(suit)) {
            console.log(`Invalid card: ${face}${suit}`);
            isInvalid = true;
        }
    
        return {
            face,
            suit,
            toString() {
                return `${face}${suits[suit]}`;
            }
        }
    }

    let outputCards = [];

    for (const card of cards) {
        const face = card.slice(0,card.length-1);
        const suit = card[card.length-1];
        const resultCard = createCard(face, suit);

        outputCards.push(resultCard);
    }
    
    if (!isInvalid) {
    console.log(outputCards.join(' '));
    }
}  

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);