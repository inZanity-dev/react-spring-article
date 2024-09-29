import {
	headerContainerStyle,
	titleStyle,
	subtitleStyle,
	authorStyle
} from "../../styles/headerStyles";

export const Header = () => {
	return (
		<header style={headerContainerStyle}>
			<h1 style={titleStyle}>React Spring Examples</h1>
			<h2 style={subtitleStyle}>
				Interactive tutorials to learn smooth animations in React
			</h2>
			<p style={authorStyle}>By <a
				href="https://alexkahndev.github.io/"
				style={{
					color: "#007bff",
					textDecoration: "none",
					fontWeight: "bold"
				}}
				target="_blank"
				rel="noopener noreferrer"
			>
				Alex Kahn
			</a></p>
		</header>
	);
};
