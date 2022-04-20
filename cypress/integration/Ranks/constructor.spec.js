import Ranks from "../../../src/enums/Ranks";

describe('Ranks constructor', () => {
	it('should throw error if trying to construct', () => {
		try {
			const ranks = new Ranks();
			expect(true).to.be.false;
		} catch (err) {
			expect(err.name).to.equal('Error');
		}
	});
});