export const getRandomRGBColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};

export const getRandomRGBAColor = (constAlpha = false) => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const a = constAlpha ? 1 : Math.random().toFixed(2);
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};
