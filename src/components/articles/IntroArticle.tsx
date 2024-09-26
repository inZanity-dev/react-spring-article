import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	liStyle,
	ulStyle
} from "../../styles/blogStyles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Example0 } from "../examples/Example0";
import {
	animatedCode,
	apiStartCode,
	useSpringCode
} from "../../utils/codeStrings";

export const IntroArticle = () => {
	return (
		<article id="getting-started" style={articleStyle}>
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
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
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
				{useSpringCode}
			</SyntaxHighlighter>

			<section
				style={explanationStyle(
					"linear-gradient(135deg, oklch(90% 0.05 250), oklch(85% 0.03 260))"
				)}
			>
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

			<SyntaxHighlighter
				language="typescript"
				style={nightOwl}
				showLineNumbers
				customStyle={{
					borderRadius: "6px",
					padding: "1rem",
					boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
				}}
			>
				{apiStartCode}
			</SyntaxHighlighter>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(90% 0.05 250), oklch(85% 0.03 260))"
				)}
			>
				<code style={codeTagStyle}>[name]Api.start()</code> is the
				method we use to update the animation. We pass an object with
				the properties we want to animate. In this case, we are changing
				the background color of the box to a random color.
			</p>
			<SyntaxHighlighter
				language="typescript"
				style={nightOwl}
				showLineNumbers
				customStyle={{
					borderRadius: "6px",
					padding: "1rem",
					boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
				}}
			>
				{animatedCode}
			</SyntaxHighlighter>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(90% 0.05 250), oklch(85% 0.03 260))"
				)}
			>
				The <code style={codeTagStyle}>animated</code> function from
				React Spring is used to create animated versions of standard
				HTML elements or custom components. By wrapping your elements
				with <code style={codeTagStyle}>animated</code>, you enable them
				to accept animated spring properties that interpolate over time.
				<br />
				<br />
				The <code style={codeTagStyle}>to</code> function transforms the
				current value of the spring into a new format. In this case,
				it's particularly useful for converting the spring value into a
				string format, which can then be displayed in the HTML. This is
				helpful when you need to display the changing values directly on
				the page as readable content.
			</p>
		</article>
	);
};
