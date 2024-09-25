import { explanationStyle } from "../styles/blogStyles";

export const Intro = () => {
	return (
		<p
			style={{
				fontSize: "1.3rem",
				fontWeight: "bolder",
				lineHeight: "1.6",
				color: "#333",
				textAlign: "justify",
				padding: "1rem",
				borderRadius: "8px",
				margin: "auto",
				marginTop: "2rem",
				width: "90%"
			}}
		>
			This article will demonstrate several examples of{" "}
			<a
				href="https://www.react-spring.dev/docs"
				style={{
					color: "#007bff",
					textDecoration: "none",
					fontWeight: "bold"
				}}
				target="_blank"
				rel="noopener noreferrer"
			>
				React Spring
			</a>
			. I will explain each example in detail, and you'll be able to
			follow along and experiment with the code yourself. At the end of
			the article, you'll have a chance to try it out with your own ideas.
		</p>
	);
};
