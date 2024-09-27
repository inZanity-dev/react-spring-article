import { AnimatedProps, SpringValue } from "@react-spring/web";
import { CSSProperties } from "react";

export const tocHeadingStyle: CSSProperties = {
	fontSize: "2rem",
	fontWeight: "600",
	marginBottom: "1.5rem",
	textAlign: "center",
	color: "#333"
};

export const tocSubListItemStyle: CSSProperties = {
	marginBottom: "0.5rem"
};

export const tocListStyle: CSSProperties = {
	listStyleType: "none",
	paddingLeft: 0
};

export const tocListItemStyle: CSSProperties = {
	marginBottom: "1rem"
};

export const tocLinkStyle: CSSProperties = {
	textDecoration: "none",
	color: "#007acc",
	fontSize: "1.25rem",
	fontWeight: "500"
};

export const tocSubListStyle: CSSProperties = {
	listStyleType: "none",
	paddingLeft: "1.5rem",
	marginTop: "0.5rem"
};

export const tocSubLinkStyle: CSSProperties = {
	textDecoration: "none",
	color: "#005999",
	fontSize: "1rem"
};

export const menuContainerStyle = (containerSprings: {
	opacity: SpringValue<number>;
}): AnimatedProps<CSSProperties> => ({
	position: "fixed",
	bottom: "8rem",
	right: "1rem",
	backgroundColor: "#f7f7f7",
	borderRadius: "8px",
	boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
	padding: "1rem",
	maxHeight: "50vh",
	overflowY: "auto",
	width: "300px",
	opacity: containerSprings.opacity
});

export const tocContainerStyle = {
	padding: "2rem",
	maxWidth: "800px",
	margin: "2rem auto",
	backgroundColor: "#f7f7f7",
	borderRadius: "8px",
	boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};
