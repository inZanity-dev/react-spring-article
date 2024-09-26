import SyntaxHighlighter from "react-syntax-highlighter";
import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	liStyle,
	ulStyle
} from "../../styles/blogStyles";
import { Example1 } from "../examples/Example1";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { durationCode } from "../../utils/codeStrings";

export const ConfigObjectArticle = () => {
	return (
		<article id="config-object" style={articleStyle}>
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
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				The config prop can be used in the useSpring initial state
				object to define the spring animation behavior. The most used
				property is the duration property which defines the duration of
				the animation in milliseconds. Enter different values for the
				duration property to see how the animation changes. Notice again
				the component only re-renders when the duration state value
				changes.
			</p>
			<Example1 />
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
				{durationCode}
			</SyntaxHighlighter>
			<section
				style={explanationStyle(
					"linear-gradient(135deg, oklch(90% 0.05 250), oklch(85% 0.03 260))"
				)}
			>
				<p>
					In this example, we specify the{" "}
					<code style={codeTagStyle}>duration</code> within the{" "}
					<code style={codeTagStyle}>config</code> object, which
					overrides the default value of 1000 milliseconds. By
					including the state variable{" "}
					<code style={codeTagStyle}>durationState</code> in the
					dependency array, the spring's configuration is updated
					whenever the duration changes. While you can often define
					values like the <code style={codeTagStyle}>duration</code>{" "}
					directly in the <code style={codeTagStyle}>config</code>{" "}
					object, this demonstrates how you can use a state variable
					to dynamically control the spring's behavior.
				</p>
				<br />
				<p
					style={{
						marginBottom: "1rem"
					}}
				>
					The <code style={codeTagStyle}>config</code> object can also
					include the following properties:
				</p>
				<ul style={ulStyle}>
					<li style={liStyle}>
						<code style={codeTagStyle}>mass</code> - the mass of the
						object being animated. A higher mass will result in a
						slower animation.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>tension</code> - the tension
						of the spring. A higher tension will result in a faster
						animation.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>friction</code> - the
						friction of the spring. A higher friction will result in
						a slower animation.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>clamp</code> - a boolean
						value that determines whether the spring should clamp
						its values.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>precision</code> - the
						precision of the spring. A higher precision will result
						in a more accurate spring.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>velocity</code> - the initial
						velocity of the spring.
					</li>
				</ul>
				<p>
					To see all of the available properties check the{" "}
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
						Spring Configs Documentation
					</a>
				</p>
			</section>
		</article>
	);
};
