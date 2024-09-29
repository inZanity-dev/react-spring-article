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
				<code style={codeTagStyle}>useSprings()</code> is very similar to{" "}
				<code style={codeTagStyle}>useSpring()</code> but it takes an additional
				paramter which is the number of springs you want to create. Additionally the 
				function to define the default state has an index parameter which can be used
				to initialize the state of each spring.
				<br />
				<br />
				In this example I wanted a slow <code style={codeTagStyle}>backgroundColor</code> transition but for the rest to be at the regular duration.
				To do this I used the function definition for config which has the key parameter. By checking 
				the value of the key you can set the config for specfic props.
			</p>
			<PrismWCopy
				codeString={springsHandlerCode}
				language="tsx"
				showLineNumbers
				customStyle={highlighterStyle}
			/>
			<p
				style={explanationStyle(
					"linear-gradient(135deg, oklch(95% 0.08 250), oklch(75% 0.1 230))"
				)}
			>
				When using the spring API methods with multiple springs, the function you provide gets access to an index parameter, <code style={codeTagStyle}>i</code> . Often times you will 
				want to use the index to check if it is the spring you want to animate, if not return early to 
				save time. You can also trigger animations for all springs simultaneously by skipping the index check, just like you would with the <code style={codeTagStyle}>useSpring()</code> hook.
			</p>
		</article>
	);
};
