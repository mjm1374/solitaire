import Card from './models/card';
import './style.css';

const cardHeight = 100;
const cardWidth = 100;

const state = {
	// clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
	suit: ['c', 'd', 'h', 's'],
	// 0 (black), 1 (red)
	colors: { c: 0, d: 1, h: 1, s: 0 },
	cards: [
		// {  number: 0, suit: 's', el: null, facingUp: false }, {...}
	],
	// hand & discard pile
	dealer: {
		hand: {
			el: null,
			cards: [
				/* 0, 1, ... */
			],
		},
		pile: {
			el: null,
			cards: [
				/* 0, 1, ... */
			],
		},
	},

	board: [
		// { el: null, cards: [ 0, 1, ... ]}, {...} - array of obj's with card indexes
	],
};

function shuffleDeck(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const inititateDeck = () => {
	state.cards = [];
	// create all cards
	for (let i = 0; i < 4; i++) {
		for (let j = 1; j <= 13; j++) {
			const el = document.createElement('div');
			el.classList.add(
				'card',
				`card--${state.suit[i]}-${j}`,
				'card--back'
			);

			state.cards.push(new Card(j, state.suit[i], el, false));
		}
	}

	shuffleDeck(state.cards);
};

//  game play

inititateDeck();

console.log('state', state.cards);

dealerDeck = [...state.cards];

dealerDeck.pop();

console.log('deck', dealerDeck);
console.log('state', state.cards);

if (module.hot) {
	//module.hot.accept();
}
