import { CSSProperties, useState } from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckmarkIcon } from "../icons/CheckmarkIcon";
import { CopyIcon } from "../icons/CopyIcon";
import {
	highlighterContainerStyle,
	highlighterCopyButtonStyle,
	highlighterHeaderStyle
} from "../../styles/syntaxHighlighterStyles";

type PrismWCopyProps = {
	codeString: string | string[];
	language?: string;
	showLineNumbers?: boolean;
	customStyle?: object;
	codeStyle?: SyntaxHighlighterProps["style"];
	needsBottomMargin?: boolean;
	options?: string[];
};

export const PrismWCopy = ({
	codeString,
	language = "tsx",
	showLineNumbers = true,
	customStyle = { margin: 0, padding: "1em" },
	codeStyle = nightOwl,
	needsBottomMargin = false,
	options
}: PrismWCopyProps) => {
	const [copied, setCopied] = useState(false);
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

	const codeStringsArray = Array.isArray(codeString)
		? codeString
		: [codeString];
	const optionsArray = options || [];

	const displayedCodeString =
		codeStringsArray[selectedOptionIndex] || codeStringsArray[0];

	const handleCopy = () => {
		navigator.clipboard.writeText(displayedCodeString).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		});
	};

	const handleOptionChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedOptionIndex(Number(event.target.value));
	};

	const getDisplayLanguage = (lang: string) => {
		const langMap: { [key: string]: string } = {
			typescript: "TS",
			javascript: "JS"
		};
		return langMap[lang.toLowerCase()] || lang.toUpperCase();
	};

	const highlighterSelectContainerStyle: CSSProperties = {
		position: "relative",
		display: "inline-block",
		marginLeft: "10px"
	};

	const highlighterSelectStyle: CSSProperties = {
		fontSize: "0.9em",
		background: "transparent",
		border: "none",
		color: "#333",
		appearance: "none",
		WebkitAppearance: "none",
		MozAppearance: "none",
		paddingRight: "20px",
		paddingLeft: "0",
		outline: "none",
		cursor: "pointer"
	};

	const selectArrowStyle: CSSProperties = {
		position: "absolute",
		top: "50%",
		right: "5px",
		pointerEvents: "none",
		transform: "translateY(-50%)"
	};

	return (
		<div style={highlighterContainerStyle(needsBottomMargin)}>
			<div style={highlighterHeaderStyle}>
				<span style={{ fontSize: "0.9em", color: "#333" }}>
					{getDisplayLanguage(language)}
				</span>
				{options && options.length > 0 && (
					<div style={highlighterSelectContainerStyle}>
						<select
							style={highlighterSelectStyle}
							value={selectedOptionIndex}
							onChange={handleOptionChange}
						>
							{optionsArray.map((option, index) => (
								<option key={index} value={index}>
									{option}
								</option>
							))}
						</select>
						<div style={selectArrowStyle}>
							{/* Arrow SVG */}
							<svg
								width="10"
								height="5"
								viewBox="0 0 10 5"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 0L5 5L10 0H0Z" fill="#333" />
							</svg>
						</div>
					</div>
				)}
				<button onClick={handleCopy} style={highlighterCopyButtonStyle}>
					{copied ? (
						<>
							<CheckmarkIcon />
							Copied!
						</>
					) : (
						<>
							<CopyIcon />
							Copy Code
						</>
					)}
				</button>
			</div>
			<Prism
				language={language}
				style={codeStyle}
				showLineNumbers={showLineNumbers}
				customStyle={customStyle}
			>
				{displayedCodeString}
			</Prism>
		</div>
	);
};
