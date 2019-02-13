const colors = require('./colors');

const generateRandomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const getRandomColor = () => {
	const randomIndex = generateRandomNum(0, colors.length - 1);
	return colors[randomIndex - 1];
};

const colorLuminance = (hex, lum) => {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = '#',
		c,
		i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
		rgb += ('00' + c).substr(c.length);
	}

	return rgb;
};

module.exports = {
	getRandomColor,
	colorLuminance
};
