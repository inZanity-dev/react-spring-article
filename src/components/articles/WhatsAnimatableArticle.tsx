import { articleStyle, explanationStyle } from "../../styles/blogStyles";

export const WhatsAnimatableArticle = () => {
	return (
		<article style={articleStyle}>
			<h3
				style={{
					fontSize: "2.5rem",
					fontWeight: "bold",
					marginTop: "2rem",
					color: "#333"
				}}
			>
				The Config Object
			</h3>
			<p style={explanationStyle("rgba(0,0,255,0.05)")}>
				The config prop can be used in the useSpring initial state
				object to define the spring animation behavior. The config
				object has the following properties:
			</p>
		</article>
	);
};
