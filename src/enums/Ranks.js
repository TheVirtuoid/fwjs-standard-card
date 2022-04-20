export default class Ranks {
	static ACE = {
		name: 'ace',
		abbreviation: 'a'
	}

	static TWO = {
		name: 'two',
		abbreviation: '2'
	}

	static THREE = {
		name: 'three',
		abbreviation: '3'
	}

	static FOUR = {
		name: 'four',
		abbreviation: '4'
	}

	static FIVE = {
		name: 'five',
		abbreviation: '5'
	}

	static SIX = {
		name: 'six',
		abbreviation: '6'
	}

	static SEVEN = {
		name: 'seven',
		abbreviation: '7'
	}

	static EIGHT = {
		name: 'eight',
		abbreviation: '8'
	}

	static NINE = {
		name: 'nine',
		abbreviation: '9'
	}

	static TEN = {
		name: 'ten',
		abbreviation: '10'
	}

	static JACK = {
		name: 'jack',
		abbreviation: 'j'
	}

	static QUEEN = {
		name: 'queen',
		abbreviation: 'q'
	}

	static KING = {
		name: 'king',
		abbreviation: 'k'
	}

	static LIST = [
		Ranks.ACE,
		Ranks.TWO,
		Ranks.THREE,
		Ranks.FOUR,
		Ranks.FIVE,
		Ranks.SIX,
		Ranks.SEVEN,
		Ranks.EIGHT,
		Ranks.NINE,
		Ranks.TEN,
		Ranks.JACK,
		Ranks.QUEEN,
		Ranks.KING
	]

	constructor() {
		throw new Error('Ranks class is an enumeration and cannot be instantiated.');
	}

	static isRank(rank) {
		return Ranks.LIST.some((listRank) => listRank === rank);
	}


}