const {expect} = require('chai');
const {it, describe} = require('mocha');
const {detectReoccurring} = require('../detect-reoccurring');

describe('detect reoccurring language', () => {
    it('should return false if no reoccurring language is detected', () => {
        const result = detectReoccurring('this is a task name without reoccurring language');
        expect(result).to.be.false;
    });
    it('returns "daily" interval detected', () => {
        const result = detectReoccurring('code daily');
        expect(result).to.be.eql('daily');
    });
});

// it('should return false if argument is not a string or it is falsy', () => {
//     expect(detectReoccurring('')).to.be.false;  
//     expect(detectReoccurring(false)).to.be.false;  
//     expect(detectReoccurring(undefined)).to.be.false;  
// });

// it('should return daily object if match', () => {
//     const expectedResult = DAILY;
//     expect(detectReoccurring('journal every day')).to.be.eql(expectedResult);
//     expect(detectReoccurring('journal daily')).to.be.eql(expectedResult);
//     expect(detectReoccurring('journal everyday')).to.be.eql(expectedResult);
// });

// it('should return weekly object if match', () => {
//     const expectedResult = WEEKLY;
//     expect(detectReoccurring('self review every week')).to.be.eql(expectedResult);
//     expect(detectReoccurring('self review weekly')).to.be.eql(expectedResult);
//     expect(detectReoccurring('self review everyweek')).to.be.eql(expectedResult);
// });

// it('should return monthly object if match', () => {
//     const expectedResult = MONTHLY;
//     expect(detectReoccurring('self review every month')).to.be.eql(expectedResult);
//     expect(detectReoccurring('self review monthly')).to.be.eql(expectedResult);
//     expect(detectReoccurring('self review each month')).to.be.eql(expectedResult);        
// });

// it('should return bi-weekly if in task name', () => {
//     const expectedResult = BIWEEKLY;
//     expect(detectReoccurring('self review bi-weekly')).to.be.eql(expectedResult);
// });

// it('should return yearly when every year text', () => {
//     const expectedResult = YEARLY;
//     expect(detectReoccurring('self review yearly')).to.be.eql(expectedResult);
//     expect(detectReoccurring('self review every year')).to.be.eql(expectedResult);
//     expect(detectReoccurring('self review each year')).to.be.eql(expectedResult);
// });