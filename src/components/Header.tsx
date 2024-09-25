import {
	headerContainerStyle,
	titleStyle,
	subtitleStyle,
	authorStyle
} from "../styles/headerStyles";

export const Header = () => {
	return (
		<header style={headerContainerStyle}>
			<h1 style={titleStyle}>React Spring Examples</h1>
			<h2 style={subtitleStyle}>
				Interactive tutorials to learn smooth animations in React
			</h2>
			<p style={authorStyle}>By Alex Kahn</p>
		</header>
	);
};
