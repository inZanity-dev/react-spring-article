import { useState } from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type PrismWCopyProps = {
	codeString: string;
	language?: string;
	showLineNumbers?: boolean;
	customStyle?: object;
	codeStyle?: SyntaxHighlighterProps["style"];
	needsBottomMargin?: boolean;
};

export const PrismWCopy = ({
	codeString,
	language = "tsx",
	showLineNumbers = true,
	customStyle = { margin: 0, padding: "1em" },
	codeStyle = nightOwl,
	needsBottomMargin = false
}: PrismWCopyProps) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(codeString).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		});
	};

	// Function to get the display name of the language
	const getDisplayLanguage = (lang: string) => {
		const langMap: { [key: string]: string } = {
			typescript: "TS",
			javascript: "JS"
			// Add more mappings if needed
		};
		return langMap[lang.toLowerCase()] || lang.toUpperCase();
	};

	return (
		<div
			style={{
				position: "relative",
				borderRadius: "5px",
				overflow: "hidden",
				border: "1px solid #e1e1e8",
				marginBottom: needsBottomMargin ? "2rem" : "0"
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#f5f5f5",
					padding: "5px 10px",
					borderBottom: "1px solid #e1e1e8"
				}}
			>
				<span style={{ fontSize: "0.9em", color: "#333" }}>
					{getDisplayLanguage(language)}
				</span>
				<button
					onClick={handleCopy}
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "transparent",
						color: "#333",
						border: "none",
						cursor: "pointer",
						fontSize: "0.9em"
					}}
				>
					{copied ? (
						<>
							{/* Checkmark SVG */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ marginRight: "5px" }}
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M9 16.17l-3.88-3.88a1 1 0 10-1.42 1.42l4.59 4.59a1 1 0 001.42 0l10-10a1 1 0 10-1.42-1.42L9 16.17z" />
							</svg>
							Copied!
						</>
					) : (
						<>
							{/* Copy Icon SVG */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ marginRight: "5px" }}
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M16 1H4C2.897 1 2 1.897 2 3v14h2V3h12V1zM20 5H8C6.897 5 6 5.897 6 7v14c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm0 16H8V7h12v14z" />
							</svg>
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
				{codeString}
			</Prism>
		</div>
	);
};
