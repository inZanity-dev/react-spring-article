import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	highlighterStyle,
	liStyle,
	ulStyle
} from "../../styles/blogStyles";
import { Example3 } from "../examples/Example3";
import { complexAnimationCode, eventsCode } from "../../utils/codeStrings";
import { PrismPlus } from "../utils/PrismPlus";
import { Example4 } from "../examples/Example4";

export const EventsSection = () => {
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
				<p
					style={{
						paddingBottom: "0.75rem"
					}}
				>
					The main events you can listen for are:
				</p>
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
			<Example3 />
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(85% 0.3 20), oklch(80% 0.25 30))",
					"#f0f0f0"
				)}
			>
				<code style={codeTagStyle}>onStart</code> is called after the
				first animation tick, this value is therefore considered dirty.
			</p>
			<PrismPlus
				codeString={eventsCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
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
					These three event listeners all have access to the following
					optional arguments:
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
				<p>
					To see all of the available event listeners check out the{" "}
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
						Events Documentation
					</a>
				</p>
			</section>
			<Example4 />
			<PrismPlus
				codeString={complexAnimationCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				Whenever the <code style={codeTagStyle}>onRest</code> event is
				triggered, we use the <code style={codeTagStyle}>ctrl</code>{" "}
				object to start a new animation with a random color to create a
				loop. You will notice the use of{" "}
				<code style={codeTagStyle}>set()</code> to control a boolean
				value that determines whether the animation is running or not.
				In the next section you will see further how to use the spring
				as state.
			</p>
		</article>
	);
};
