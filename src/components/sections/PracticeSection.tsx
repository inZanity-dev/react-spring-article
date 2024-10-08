import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	highlighterStyle
} from "../../styles/blogStyles";
import { yourTurnCode } from "../../utils/codeStrings";
import { Example7 } from "../examples/Example7";
import { PrismPlus } from "../utils/PrismPlus";

export const PracticeSection = () => {
	return (
		<article id="your-turn" style={articleStyle}>
			<h3
				style={{
					fontSize: "2.5rem",
					fontWeight: "bold",
					marginTop: "2rem",
					color: "#333"
				}}
			>
				Try It Out
			</h3>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				Now it's your turn! After reading this article you have
				everything you need to make your own stunning and efficient web
				animations. This section is for you, edit this example to show
				off what you've learned! You can download or fork the repository
				from{" "}
				<a
					href="https://github.com/alexkahndev/react-spring-article"
					style={{
						color: "#007bff",
						textDecoration: "none",
						fontWeight: "bold"
					}}
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>{" "}
				to get started. This code is also available on{" "}
				<a
					href="https://codesandbox.io/p/sandbox/nvjczv"
					style={{
						color: "#007bff",
						textDecoration: "none",
						fontWeight: "bold"
					}}
					target="_blank"
					rel="noopener noreferrer"
				>
					Code Sandbox
				</a>{" "}
				if you want to try it out there without downloading anything.
			</p>
			<Example7 />
			<PrismPlus
				codeString={yourTurnCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
		</article>
	);
};
