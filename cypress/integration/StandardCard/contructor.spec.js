import { StandardCard, StandardCardSuits, StandardCardRanks } from "../../../src/StandardCard";

describe('construction', () => {
	it('should be able to construct a card given suit and rank', () => {
		const standardCard = new StandardCard({
			suit: StandardCardSuits.HEART,
			rank: StandardCardRanks.ACE
		});
		expect(standardCard.suit).to.equal(StandardCardSuits.HEART);
		expect(standardCard.rank).to.equal(StandardCardRanks.ACE);
	});

	it('should throw error if suit is invalid', () => {
		try {
			const standardCard = new StandardCard({
				rank: StandardCardRanks.ACE,
				suit: 'bad'
			})
			expect(true).to.be.false;
		} catch (err) {
			expect(err.name).to.equal('TypeError');
		}
	});

	it('should throw error if suit is missing', () => {
		try {
			const standardCard = new StandardCard({
				rank: StandardCardRanks.ACE
			})
			expect(true).to.be.false;
		} catch (err) {
			expect(err.name).to.equal('TypeError');
		}
	});

	it('should throw error if rank is invalid', () => {
		try {
			const standardCard = new StandardCard({
				rank: 'bad',
				suit: StandardCardSuits.HEART
			})
			expect(true).to.be.false;
		} catch (err) {
			expect(err.name).to.equal('TypeError');
		}
	});

	it('should throw error if rank is missing', () => {
		try {
			const standardCard = new StandardCard({
				suit: StandardCardSuits.HEART
			})
			expect(true).to.be.false;
		} catch (err) {
			expect(err.name).to.equal('TypeError');
		}
	});

});