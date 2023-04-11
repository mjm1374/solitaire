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
};

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

			const newCard = new Card(j, state.suit[i], el, false);
			state.cards.push(newCard);
		}
	}
};

inititateDeck();

console.log(state.cards);

if (module.hot) {
	module.hot.accept();
}
