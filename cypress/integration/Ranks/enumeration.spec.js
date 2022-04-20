import Ranks from "../../../src/enums/Ranks";

describe('ranks enumerations', () => {
	it('should return ACE enumeration', () => {
		const { name, abbreviation } = Ranks.ACE;
		expect(name).to.equal('ace');
		expect(abbreviation).to.equal('a');
	});
	it('should return TWO enumeration', () => {
		const { name, abbreviation } = Ranks.TWO;
		expect(name).to.equal('two');
		expect(abbreviation).to.equal('2');
	});
	it('should return THREE enumeration', () => {
		const { name, abbreviation } = Ranks.THREE;
		expect(name).to.equal('three');
		expect(abbreviation).to.equal('3');
	});
	it('should return FOUR enumeration', () => {
		const { name, abbreviation } = Ranks.FOUR;
		expect(name).to.equal('four');
		expect(abbreviation).to.equal('4');
	});
	it('should return FIVE enumeration', () => {
		const { name, abbreviation } = Ranks.FIVE;
		expect(name).to.equal('five');
		expect(abbreviation).to.equal('5');
	});
	it('should return SIX enumeration', () => {
		const { name, abbreviation } = Ranks.SIX;
		expect(name).to.equal('six');
		expect(abbreviation).to.equal('6');
	});
	it('should return SEVEN enumeration', () => {
		const { name, abbreviation } = Ranks.SEVEN;
		expect(name).to.equal('seven');
		expect(abbreviation).to.equal('7');
	});
	it('should return EIGHT enumeration', () => {
		const { name, abbreviation } = Ranks.EIGHT;
		expect(name).to.equal('eight');
		expect(abbreviation).to.equal('8');
	});
	it('should return NINE enumeration', () => {
		const { name, abbreviation } = Ranks.NINE;
		expect(name).to.equal('nine');
		expect(abbreviation).to.equal('9');
	});
	it('should return TEN enumeration', () => {
		const { name, abbreviation } = Ranks.TEN;
		expect(name).to.equal('ten');
		expect(abbreviation).to.equal('10');
	});
	it('should return JACK enumeration', () => {
		const { name, abbreviation } = Ranks.JACK;
		expect(name).to.equal('jack');
		expect(abbreviation).to.equal('j');
	});
	it('should return QUEEN enumeration', () => {
		const { name, abbreviation } = Ranks.QUEEN;
		expect(name).to.equal('queen');
		expect(abbreviation).to.equal('q');
	});
	it('should return KING enumeration', () => {
		const { name, abbreviation } = Ranks.KING;
		expect(name).to.equal('king');
		expect(abbreviation).to.equal('k');
	});
	it('should return LIST enumeration with all entries', () => {
		const testList = [
			Ranks.ACE, Ranks.TWO, Ranks.THREE, Ranks.FOUR, Ranks.FIVE, Ranks.SIX,
			Ranks.SEVEN, Ranks.EIGHT, Ranks.NINE, Ranks.TEN, Ranks.JACK, Ranks.QUEEN, Ranks.KING
		];
		const enumeratedList = Ranks.LIST;
		const comparisonResult = testList.every((entry) =>
			enumeratedList.some((testEntry) => testEntry.name === entry.name));
		expect(comparisonResult).to.be.true;
	});
	it('should return true if ranking can be found', () => {
		expect(Ranks.isRank(Ranks.JACK)).to.be.true;
	});
	it('should return false if ranking cannot be found', () => {
		expect(Ranks.isRank('bad')).to.be.false;
	});
});