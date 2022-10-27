document.addEventListener('DOMContentLoaded', () => {
  // array of card objects
  const cardData = [
    {
      name: 'bat',
      img: 'images/bat.png'
    },
    {
      name: 'candy-corn',
      img: 'images/candy-corn.png'
    },
    {
      name: 'frankenstein',
      img: 'images/frankenstein.png'
    },
    {
      name: 'ghost',
      img: 'images/ghost.png'
    },
    {
      name: 'monster',
      img: 'images/monster.png'
    },
    {
      name: 'mummy',
      img: 'images/mummy.png'
    },
  
    {
      name: 'orange-pumpkin',
      img: 'images/orange-pumpkin.png'
    },
    {
      name: 'spider',
      img: 'images/spider.png'
    },
    {
      name: 'tombstone',
      img: 'images/tombstone.png'
    },
  
    {
      name: 'vampire',
      img: 'images/vampire.png'
    },
    {
      name: 'witch',
      img: 'images/witch.png'
    },
    {
      name: 'witch-hat',
      img: 'images/witch-hat.png'
    },
    {
      name: 'bat',
      img: 'images/bat.png'
    },
    {
      name: 'candy-corn',
      img: 'images/candy-corn.png'
    },
    {
      name: 'frankenstein',
      img: 'images/frankenstein.png'
    },
    {
      name: 'ghost',
      img: 'images/ghost.png'
    },
    {
      name: 'monster',
      img: 'images/monster.png'
    },
    {
      name: 'mummy',
      img: 'images/mummy.png'
    },
  
    {
      name: 'orange-pumpkin',
      img: 'images/orange-pumpkin.png'
    },
    {
      name: 'spider',
      img: 'images/spider.png'
    },
    {
      name: 'tombstone',
      img: 'images/tombstone.png'
    },
  
    {
      name: 'vampire',
      img: 'images/vampire.png'
    },
    {
      name: 'witch',
      img: 'images/witch.png'
    },
    {
      name: 'witch-hat',
      img: 'images/witch-hat.png'
    }
  ];

  // randomize the cards
  const shuffled = array => {
    let counter = array.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
  }

  const shuffledCards = shuffled(cardData);
  const gameBoard = document.querySelector('.game-board');
  let flippedCards = [];
  let flippedCardIds = [];
  let boardLocked = false;
  let score = 0;

  function createCardDivs() {
    // loop over cardArray and create, set styles/attributes of each cardDiv and the front and back images, and append to gameBoard
    shuffledCards.forEach((cardDiv, index) => {
      
      cardDiv = document.createElement('div');
      cardDiv.classList.add('card-div');
      cardDiv.setAttribute('data-id', index);

      const cardBack = document.createElement('img');
      cardBack.classList.add('back');
      cardBack.setAttribute('src', 'images/purple-pumpkin.png');

      const cardFront = document.createElement('img');
      cardFront.classList.add('front');
      cardFront.setAttribute('src', cardData[index].img);
      
      cardDiv.addEventListener('click', handleCardClick);
      cardDiv.appendChild(cardFront);
      cardDiv.appendChild(cardBack);
      gameBoard.appendChild(cardDiv);
    })   
  }
  createCardDivs();

  function handleCardClick() {
    if (boardLocked) return;
       
    let cardFlippedId = this.dataset.id;
    let cardFlipped = this;
    const cards = document.querySelectorAll('div');

    cardFlipped.classList.toggle('flip');

    flippedCardIds.push(cardFlippedId);
    flippedCards.push(cardFlipped.children[0].getAttribute('src'));
    
    if (flippedCards.length === 2) {
      boardLocked = true;
      setTimeout(() => {

        const firstCardId = flippedCardIds[0];
        const secondCardId = flippedCardIds[1];
        const scoreSpan = document.querySelector('span');
        console.log(score)
        // prevent user from clicking on same card twice
        if (firstCardId === secondCardId) {
          return;
        } else if (flippedCards[0] === flippedCards[1]) {
         cards[firstCardId].removeEventListener('click', handleCardClick);
         cards[secondCardId].removeEventListener('click', handleCardClick);
         score += 2;
         scoreSpan.innerHTML = score; 
        } else {
          // cards dont match, flip them back over
          cards[firstCardId].classList.remove('flip');
          cards[secondCardId].classList.remove('flip');
        }
        // reset arrays for next round of clicking
        flippedCardIds = [];
        flippedCards = [];
        boardLocked = false;
      }, 1000);
    }   
  }
})

