import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	highlighterStyle,
	liStyle,
	ulStyle
} from "../../styles/blogStyles";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Example0 } from "../examples/Example0";
import {
	animatedCode,
	apiStartCode,
	useSpringCode
} from "../../utils/codeStrings";
import { Prism } from "react-syntax-highlighter";

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
			<Prism
				language="tsx"
				style={nightOwl}
				showLineNumbers
				customStyle={highlighterStyle(true)}
			>
				{useSpringCode}
			</Prism>
			<section
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
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
					<span
						style={{
							color: "#d73a49",
							fontWeight: "bold"
						}}
					>
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

			<Prism
				language="tsx"
				style={nightOwl}
				showLineNumbers
				customStyle={highlighterStyle()}
			>
				{apiStartCode}
			</Prism>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				<code style={codeTagStyle}>[name]Api.start()</code> is the
				method we use to update the animation. We pass an object with
				the properties we want to animate. In this case, we are changing
				the background color of the box to a random color.
			</p>
			<Prism
				language="tsx"
				style={nightOwl}
				showLineNumbers
				customStyle={highlighterStyle()}
			>
				{animatedCode}
			</Prism>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				The <code style={codeTagStyle}>animated</code> function from
				React Spring is used to create animated versions of standard
				HTML elements or custom components. By wrapping your elements
				with <code style={codeTagStyle}>animated</code>, you enable them
				to accept animated spring properties that interpolate over time.
				<br />
				<br />
				To learn more about how React Spring does animation of css
				properties check out the{" "}
				<a
					href="https://www.react-spring.dev/docs/concepts/animated-elements"
					style={{
						color: "#007bff",
						textDecoration: "none",
						fontWeight: "bold"
					}}
					target="_blank"
					rel="noopener noreferrer"
				>
					Animated Elements Documentation
				</a>
				<br />
				<br />
				The <code style={codeTagStyle}>to</code> function transforms the
				current value of the spring into a new format. In this case,
				it's particularly useful for converting the spring value into a
				string format, which can then be displayed in the HTML.
				<br />
				<br />
				To learn more about how React Spring does interpolation of the
				values check out the{" "}
				<a
					href="https://www.react-spring.dev/docs/advanced/interpolation"
					style={{
						color: "#007bff",
						textDecoration: "none",
						fontWeight: "bold"
					}}
					target="_blank"
					rel="noopener noreferrer"
				>
					Interpolation Documentation
				</a>
			</p>
		</article>
	);
};
