const detectReoccurring = (text) => {
	if (text.match('daily')) {
		return true;
	}
    return false;
}

module.exports = {
	detectReoccurring
}