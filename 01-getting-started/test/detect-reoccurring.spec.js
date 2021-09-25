const {expect} = require('chai');
const {detectReoccurring} = require('../detect-reoccurring');

describe('detect reoccurring language', () => {
    it('should return false if no reoccurring language is detected', () => {
        const text = 'this is a string'
        const result = detectReoccurring(text);
        expect(result).to.be.false;
    });
    it('should return true if reoccurring language is detected', () => {
        const text = 'daily coding exercise'
        const result = detectReoccurring(text);
        expect(result).to.be.true;
    });
});