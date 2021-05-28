// poker seeds: 
//     - hearts
//     - diamonds
//     - flowers
//     - clubs

function handOut(hand) {

    if (hand.length === 5) {
        // start duplicated check
        let uniqueCheck;
        for (const i of hand) {
            if (uniqueCheck != i) {
                uniqueCheck = i;
            } else {
                console.log('Please don\'t insert duplicate cards!');
            }
        }
        // end duplicated check

        //start analyze the hand
        const order = "23456789TJQKA"
        const faces = hand.map(a => String.fromCharCode([77 - order.indexOf(a[0])])).sort() 
        const suits = hand.map(a => a[1]).sort()

        const flush = suits[0] === suits[4];

        const first = faces[0].charCodeAt(0);
        const straight = faces.every((f, index) => f.charCodeAt(0) - first === index);
        const royalStraight = faces[0] === 'A' && faces[4] === 'E' ? faces.every((f, index) => f.charCodeAt(0) - first === index) : false;
        
        if (flush) {
            if(royalStraight) {
                console.log('You have a Royal Flush!');
            }
            else {
                console.log('You have a Flush!');
            }
        }
        else {
            if (royalStraight) {
                console.log('You have a Royal Straight!');
            }
    
            if (straight) {
                console.log('You have a Straight!');
            }
        }

        let duplicate = 1;

        for (let i = 1; i <= faces.length; i++) {
            if (faces[i] === faces[i-i]) {
                duplicate++;
            }
            
        }

        const poker = duplicate === 4;

        if (poker) {
            console.log('You have a poker!');
        }

        const tris = duplicate === 3;

        if (tris) {
            if (faces[3] === faces[4]) {
                console.log('You have a Full!');
            }
            else {
                console.log('You have a tris!');
            }
        }

        const pair = duplicate === 2;

        if (pair) {
            console.log('You have a pair!');
        }

        if (!flush && !straight && !royalStraight && !poker && !tris && !pair) {
            console.log('You have a High Card!');
        }
        
    }
    else {
        console.log('Insert valid hand!');
    }   

}

/**

Recognize the Poker Hand

- Insert the poker hand in the form of a array, in wich every card is a string of 2 letters,
  the first is the value and the second is a seed:

   card n 10 = T; each others normal numbers; Ace = A; Queen = Q; King = K; Jack = J;

   example: handOut(['Th', 'Td', 'Tf', 'Tc', '2c']);

*/

handOut(['Th', 'Td', 'Tf', 'Tc', '2c']);