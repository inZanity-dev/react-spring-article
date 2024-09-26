import { Prism } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	highlighterStyle,
	liStyle,
	ulStyle
} from "../../styles/blogStyles";
import { Example4 } from "../examples/Example4";
import { eventsCode } from "../../utils/codeStrings";

export const EventsArticle = () => {
	return (
		<article id="spring-events" style={articleStyle}>
			<h3
				style={{
					fontSize: "2.5rem",
					fontWeight: "bold",
					marginTop: "2rem",
					color: "#333"
				}}
			>
				Spring Events
			</h3>
			<section
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				<p>
					You can listen for certain spring events by passing a
					function either to the initial state object or when calling
					start on the spring API.
				</p>
				<br />
				<p>The main events you can listen for are:</p>
				<ul style={ulStyle}>
					<li style={liStyle}>
						<code style={codeTagStyle}>onStart</code> - Called when
						the animation starts.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>onChange</code> - Called on
						every frame when the animated values change.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>onRest</code> - Called when
						the animation comes to a rest.
					</li>
				</ul>
			</section>
			<Example4 />
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(85% 0.3 20), oklch(80% 0.25 30))",
					"#f0f0f0"
				)}
			>
				<code style={codeTagStyle}>onStart</code> is called after the
				first animation tick, this value is therefore considered dirty.
			</p>
			<Prism
				language="tsx"
				style={nightOwl}
				showLineNumbers
				customStyle={highlighterStyle()}
			>
				{eventsCode}
			</Prism>
			<section
				style={explanationStyle(
					"linear-gradient(135deg, oklch(90% 0.05 250), oklch(85% 0.03 260))"
				)}
			>
				<p>
					These event listeners all have access to the following
					arguments:
				</p>
				<ul style={ulStyle}>
					<li style={liStyle}>
						<code style={codeTagStyle}>result</code> - This is an
						object that contains information about the animation's
						outcome. It includes fields like{" "}
						<code style={codeTagStyle}>value</code> (the current
						spring value),{" "}
						<code style={codeTagStyle}>finished</code> (whether the
						animation has completed), and{" "}
						<code style={codeTagStyle}>cancelled</code> (whether it
						was stopped)
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>ctrl</code> - This refers to
						the Controller instance that manages the animation. The
						controller provides methods such as{" "}
						<code style={codeTagStyle}>start</code>,{" "}
						<code style={codeTagStyle}>stop</code>, and{" "}
						<code style={codeTagStyle}>pause</code> that you can use
						to control the spring's behavior. This allows you to
                        create complex and layered animations.
					</li>
					<li style={liStyle}>
						<code style={codeTagStyle}>item</code> - This variable
						is relevant when you are using transitions with React
						Spring. It represents the item being animated. You won't
						see <code style={codeTagStyle}>item</code> unless you're
						working with transitions like in{" "}
						<code style={codeTagStyle}>useTransition</code>, where
						you're animating elements that are entering or leaving
						the DOM.
					</li>
				</ul>
			</section>
		</article>
	);
};
