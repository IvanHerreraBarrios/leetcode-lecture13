var deckRevealedIncreasing = function(deck) {
    deck = deck.sort((a,b) => b - a)

    const result = []
    for(let i=0; i < deck.length; i++){
        result.unshift(deck[i])
        if( i <deck.length - 1) result.unshift(result.pop())
    }
    return result
};