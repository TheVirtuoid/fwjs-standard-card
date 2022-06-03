import Card from "@virtuoid/cards";
import Ranks from "./enums/Ranks";
import Suits from "./enums/Suits";

class StandardCard extends Card {
	constructor(standardCardArguments = {}) {
		const { suit, rank, value } = standardCardArguments;
		if (!Ranks.isRank(rank)) {
			throw new TypeError(`"rank" argument must be present or an enumerated value from Ranks.`);
		}
		if (!Suits.isSuit(suit)) {
			throw new TypeError(`"suit" argument must be present or an enumerated value from Suits.`);
		}
		super(standardCardArguments);
	}

	toString() {
		return `${this.rank.abbreviation}${this.suit.abbreviation}`;
	}

}

export { Ranks as StandardCardRanks, Suits as StandardCardSuits, StandardCard }