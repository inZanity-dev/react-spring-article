import { CSSProperties } from "react";

const tocStyle: CSSProperties = {
	padding: "1rem",
	width: "90%",
	margin: "auto"
};

const tocHeadingStyle: CSSProperties = {
	fontSize: "1.5rem",
	marginBottom: "1rem"
};

const tocListStyle: CSSProperties = {
	listStyleType: "none",
	paddingLeft: 0
};

const tocListItemStyle: CSSProperties = {
	marginBottom: "0.5rem"
};

const tocLinkStyle: CSSProperties = {
	textDecoration: "none",
	color: "#0366d6",
	fontSize: "1rem"
};

export const TableOfContents = () => {
	return (
		<nav style={tocStyle}>
			<h2 style={tocHeadingStyle}>Table of Contents</h2>
			<ul style={tocListStyle}>
				<li style={tocListItemStyle}>
					<a href="#getting-started" style={tocLinkStyle}>
						Getting Started
					</a>
				</li>
				<li style={tocListItemStyle}>
					<a href="#config-object" style={tocLinkStyle}>
						Configuration Object
					</a>
				</li>
				{/* Add more list items for other articles */}
			</ul>
		</nav>
	);
};
