import Suits from "../../../src/enums/Suits";

describe('suits enumerations', () => {
	it('should return CLUBS enumeration', () => {
		const { name, abbreviation } = Suits.CLUB;
		expect(name).to.equal('club');
		expect(abbreviation).to.equal('c');
	});
	it('should return DIAMONDS enumeration', () => {
		const { name, abbreviation } = Suits.DIAMOND;
		expect(name).to.equal('diamond');
		expect(abbreviation).to.equal('d');
	});
	it('should return HEARTS enumeration', () => {
		const { name, abbreviation } = Suits.HEART;
		expect(name).to.equal('heart');
		expect(abbreviation).to.equal('h');
	});
	it('should return SPADES enumeration', () => {
		const { name, abbreviation } = Suits.SPADE;
		expect(name).to.equal('spade');
		expect(abbreviation).to.equal('s');
	});
	it('should return LIST enumeration with all entries', () => {
		const testList = [
			Suits.CLUB, Suits.DIAMOND, Suits.HEART, Suits.SPADE
		];
		const enumeratedList = Suits.LIST;
		const comparisonResult = testList.every((entry) =>
				enumeratedList.some((testEntry) => testEntry.name === entry.name));
		expect(comparisonResult).to.be.true;
	});
	it('should return true if suit can be found', () => {
		expect(Suits.isSuit(Suits.HEART)).to.be.true;
	});
	it('should return false if suit cannot be found', () => {
		expect(Suits.isSuit('bad')).to.be.false;
	});

});