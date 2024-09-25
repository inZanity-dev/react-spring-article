import {
	articleStyle,
	explanationStyle,
	liStyle,
	ulStyle
} from "../styles/blogStyles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Example0 } from "./examples/Example0";

export const IntroArticle = () => {
	const codeString = `const [boxSpring, boxApi] = useSpring(
    () => ({
	    backgroundColor: blue,
    }),
    []
);`;

	const codeTagStyle = {
		fontFamily: "monospace",
		marginBottom: "1rem",
		color: "#333",
		backgroundColor: "lightgray",
		padding: "0.2rem"
	};

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
				Getting Started
			</h3>
			<p style={explanationStyle("rgba(0,0,255,0.05)")}>
				<code style={codeTagStyle}>useSpring()</code> is the main hook
				for animations within the library. It takes a function where you
				can define the initial state of the animation. You can
				optionally pass an array of dependencies which will trigger the
				spring to update when they change. Notice that changing the
				background color of the box does not trigger a re-render of the
				component. I have added a button to demonstrate how React state
				changes trigger a re-render.
			</p>
			<Example0 />
			<SyntaxHighlighter
				language="typescript"
				style={nightOwl}
				showLineNumbers
				customStyle={{
					borderRadius: "6px",
					padding: "1rem",
					boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
					marginTop: "2rem"
				}}
			>
				{codeString}
			</SyntaxHighlighter>

			<section style={explanationStyle("rgba(0,255,0,0.05)")}>
				<p
					style={{
						paddingBottom: "0.75rem"
					}}
				>
					The hook returns an array with two elements:
				</p>
				<ul style={ulStyle}>
					<li style={liStyle}>
						<code style={codeTagStyle}>boxSpring</code> - an object
						containing the animated values.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>boxApi</code> - a set of
						methods to control the animation.
					</li>
				</ul>
				<aside style={{ paddingTop: "0.75rem" }}>
					<span style={{ color: "#d73a49", fontWeight: "bold" }}>
						*{" "}
					</span>
					You can name the variables whatever you like, but it's my
					convention to use
					<span style={{ fontWeight: "bold" }}>
						{" "}
						[name]Spring
					</span>{" "}
					for the animated values and
					<span style={{ fontWeight: "bold" }}>[name]Api</span> for
					the methods.
				</aside>
			</section>
		</article>
	);
};
