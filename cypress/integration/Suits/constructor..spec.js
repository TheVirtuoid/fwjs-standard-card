import Suits from "../../../src/enums/Suits";

describe('Suits constructor', () => {
	it('should throw error if trying to construct', () => {
		try {
			const suits = new Suits();
			expect(true).to.be.false;
		} catch (err) {
			expect(err.name).to.equal('Error');
		}
	});
});