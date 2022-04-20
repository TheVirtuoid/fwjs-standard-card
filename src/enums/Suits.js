export default class Suits {
	static CLUB = {
		name: 'club',
		abbreviation: 'c'
	}

	static DIAMOND = {
		name: 'diamond',
		abbreviation: 'd'
	}

	static HEART = {
		name: 'heart',
		abbreviation: 'h'
	};

	static SPADE = {
		name: 'spade',
		abbreviation: 's'
	}

	static LIST = [
		Suits.CLUB,
		Suits.DIAMOND,
		Suits.HEART,
		Suits.SPADE
	]

	constructor() {
		throw new Error('Suits class is an enumeration and cannot be instantiated.');
	}

	static isSuit(suit) {
		return Suits.LIST.some((listSuit) => listSuit === suit);
	}
}