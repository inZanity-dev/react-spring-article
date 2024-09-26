import { CSSProperties } from "react";

export const articleStyle: CSSProperties = {
	width: "90%",
	margin: "2rem auto",
	backgroundColor: "#fff",
	padding: "0 2rem",
	borderRadius: "8px",
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
	lineHeight: "1.6",
	color: "#333",
	fontSize: "1rem",
	maxWidth: "1000px",
	display: "flex",
	flexDirection: "column"
};

export const exampleBoxStyle = (needsBottomMargin = false):CSSProperties => ({
	backgroundColor: "#f0f0f0",
	padding: "2rem",
	borderLeft: "16px solid #333",
	borderRadius: "4px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
	marginBottom: needsBottomMargin ? "2rem" : "0"
});

export const explanationStyle = (
	background = "transparent",
	color = "#333"
): CSSProperties => ({
	fontSize: "1.1rem",
	lineHeight: "1.6",
	color,
	textAlign: "justify",
	background,
	padding: "1rem",
	borderRadius: "8px",
	margin: "2rem 0"
});

export const outputStyle: CSSProperties = {
	fontFamily: "monospace",
	fontSize: "1.1rem"
};

export const ulStyle: CSSProperties = {
	listStyleType: "disc",
	marginLeft: "1.5rem",
	paddingLeft: "0.5rem",
	fontSize: "1.05rem",
	lineHeight: "1.6"
};

export const liStyle: CSSProperties = {
	marginBottom: "0.5rem"
};

export const codeTagStyle = {
	fontFamily: "monospace",
	marginBottom: "1rem",
	color: "#333",
	backgroundColor: "lightgray",
	padding: "0.2rem"
};

export const highlighterStyle : CSSProperties ={
	borderBottomRightRadius: "8px",
	borderBottomLeftRadius: "8px",
	padding: "1rem",
	boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
	margin: "0"
};
