import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	highlighterStyle
} from "../../styles/blogStyles";
import {
	springStateButtonCode,
	springStateCode
} from "../../utils/codeStrings";
import { Example5 } from "../examples/Example5";
import { PrismWCopy } from "../utils/PrismWCopy";
export const StateSection = () => {
	return (
		<article id="spring-state" style={articleStyle}>
			<h3
				style={{
					fontSize: "2.5rem",
					fontWeight: "bold",
					marginTop: "2rem",
					color: "#333"
				}}
			>
				Spring Over State
			</h3>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				We can remove the need for state by checking the value of the
				animated prop. This is one of the major benefits of using React
				Spring but also the biggest change in mindset.
			</p>
			<Example5 />
			<PrismWCopy
				codeString={springStateCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
				needsBottomMargin
			/>
			<PrismWCopy
				codeString={springStateButtonCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				By using the colors as variables we have a way to check the
				state based on the animated prop. The{" "}
				<code style={codeTagStyle}>get()</code> method returns the value
				of the animated prop at the current moment. We can then use this
				value to determine the state of the button. Based upon this
				state we set the new state of the button with the{" "}
				<code style={codeTagStyle}>start()</code> method.
				<br />
				<br />
				In the component code we again use the{" "}
				<code style={codeTagStyle}>to()</code> method to get the
				interpolatable animated prop. As the spring changes, the{" "}
				<code style={codeTagStyle}>&lt;span&gt;</code> element changes
				between True and False based on the color of the button.
			</p>
		</article>
	);
};
