import {
	articleStyle,
	codeTagStyle,
	explanationStyle,
	highlighterStyle
} from "../../styles/blogStyles";
import { multipleSpringsCode, springsHandlerCode } from "../../utils/codeStrings";
import { Example6 } from "../examples/Example6";
import { PrismWCopy } from "../utils/PrismWCopy";
export const SpringsSection = () => {
	return (
		<article id="multiple-springs" style={articleStyle}>
			<h3
				style={{
					fontSize: "2.5rem",
					fontWeight: "bold",
					marginTop: "2rem",
					color: "#333"
				}}
			>
				Using Multiple Springs
			</h3>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				Many times you will find you have several elements that need to
				be animated in a similar way. React Spring makes this easy
				through the <code style={codeTagStyle}>useSprings()</code> hook.
				This hook allows you to specify the number of springs you want
				to create and the properties of each spring.
			</p>
			<Example6 />
			<PrismWCopy
				codeString={multipleSpringsCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				Many times you will find you have several elements that need to
				be animated in a similar way. React Spring makes this easy
				through the <code style={codeTagStyle}>useSprings()</code> hook.
				This hook allows you to specify the number of springs you want
				to create and the properties of each spring.
			</p>
			<PrismWCopy
				codeString={springsHandlerCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
		</article>
	);
};
