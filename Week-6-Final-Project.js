let player1Deck = [];
let player2Deck = [];
let mainDeck = [];
let player1Score = 0;
let player2Score = 0;


let deckBuilder = () => {
     for( i= 0; i < 4; i++) {        // This loop iterates 4 times
        for(x = 1; x < 14; x++){    // This look iterates 13 times , to push x to the main deck,
        mainDeck.push(x);           //Pushing 1-13, 4 times, giving 52 elements total
        }
    }
}

deckBuilder();
(mainDeck);

let shuffleDeck = (deck) =>{
    for( i = (deck.length -1); i > 0; i--){             //This loop starts at the end of an array,
        const j = Math.floor(Math.random() * (i + 1));  // and this function picks a random number less than the length of the array
        const temp = deck[i];                           // and then flips the current element with a random element from the array
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

shuffleDeck(mainDeck);

//console.log(mainDeck);


let deckSplitter = (deck2) =>{
    let i = 0;
    while( i != deck2.length){           //This loop will iterate through the length of the array,
         player1Deck.push(deck2[i]);          // push the first element to player 1's deck,
        player2Deck.push(deck2[i +1]);       //and push the second element to player 2's,
        i += 2;                             // and then moves 'i' up 2 spots in the array, so every card gets dealt one at a time
   }
}

deckSplitter(mainDeck);

console.log(player1Deck);

console.log(player2Deck);

let game =( playerDeck1, playerDeck2) =>{
    for( i=0; i < 26; i ++){                            
        let player1Card = playerDeck1[i];               // each of the 26 rounds of this game will compare the current element
        let player2Card = playerDeck2[i];               // of the 2 different decks

        console.log( `ROUND ${i + 1} `);

        if( player1Card > player2Card){                 // Simple if statements give a point to the team with the higher card
            player1Score += 1;                                          
            console.log(`Player 1 card: ${player1Card}  Player 2 card: ${player2Card} 
             Player 1 wins this round.
                Player 1 score: ${player1Score}
                Player 2 score: ${player2Score}`);
        }else if(player1Card < player2Card){
            player2Score += 1;
            console.log(`Player 1 card: ${player1Card}  Player 2 card: ${player2Card}
             Player 2 wins this round.
                Player 1 score: ${player1Score}
                Player 2 score: ${player2Score}`);
        }else{
            console.log(`Player 1 card: ${player1Card}  Player 2 card: ${player2Card}
             This round is a tie.
                Player 1 score: ${player1Score}
                Player 2 score: ${player2Score} `);
        }
    }
    console.log(`FINAL SCORE: PLAYER 1: ${player1Score}  PLAYER 2: ${player2Score}`);
}



let finalScore = (p1Score, p2Score) => {
        if( p1Score > p2Score){
            return(`PLAYER 1 WINS.`);
         }else if(p1Score < p2Score){
            return(`PLAYER 2 WINS.`);               // this function displays the winner of the game
         }else{
            return('TIE');
    }
}


game(player1Deck, player2Deck);

console.log(finalScore(player1Score, player2Score));






