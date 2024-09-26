import { CSSProperties } from "react";

const tocStyle: CSSProperties = {
	padding: "1rem",
	width: "90%",
	margin: "auto"
};

const tocHeadingStyle: CSSProperties = {
	fontSize: "2rem",
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

const tocData = [
	{ id: "getting-started", label: "Getting Started" },
	{ id: "config-object", label: "Configuration Object" },
	{ id: "spring-events", label: "Spring Events" }
];

export const TableOfContents = () => {
	return (
		<nav style={tocStyle}>
			<h2 style={tocHeadingStyle}>Table of Contents</h2>
			<ul style={tocListStyle}>
				{tocData.map((item) => (
					<li key={item.id} style={tocListItemStyle}>
						<a href={`#${item.id}`} style={tocLinkStyle}>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
