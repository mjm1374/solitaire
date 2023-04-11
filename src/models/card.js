class Card {
	static colors = ['#000000', '#cc2a36'];
	// suits -- clubs (♣), diamonds (♦), hearts (♥) and spades (♠)

	constructor(number, suit, el = null, facingUp = false) {
		this.suit = suit;
		this.number = number;
		this.el = el;
		this.facingUp = facingUp;
	}

	flipFace() {
		this.facingUp = !this.facingUp;
	}

	setEl(el) {
		this.el = el;
	}
}

export default Card;
