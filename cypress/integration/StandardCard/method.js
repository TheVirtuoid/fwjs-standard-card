import {StandardCard, StandardCardRanks, StandardCardSuits} from "../../../src/StandardCard";

describe('different methods', () => {
	describe('clone from Card', () => {
		it('should clone the card', () => {
			const standardCard = new StandardCard({
				suit: StandardCardSuits.HEART,
				rank: StandardCardRanks.ACE
			});
			const newCard = standardCard.clone();
			expect(newCard instanceof StandardCard).to.be.true;
		});
	});
	it('should create the correct toString()', () => {
		const standardCard = new StandardCard({
			suit: StandardCardSuits.HEART,
			rank: StandardCardRanks.ACE,
			value: 1
		});
		expect(standardCard.toString()).to.equal('ah');
	});
});