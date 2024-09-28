export const getRandomRGBColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};

export const getRandomRGBAColor = (alpha?: number) => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const a = alpha !== undefined ? alpha : Math.random().toFixed(2);
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};
