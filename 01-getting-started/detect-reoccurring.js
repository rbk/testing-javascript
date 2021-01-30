const detectReoccurring = (text) => {
	if (text.match('daily')) {
		return 'daily';	
	}
    return false;
}

module.exports = {
	detectReoccurring
}