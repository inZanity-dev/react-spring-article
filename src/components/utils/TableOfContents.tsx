import { CSSProperties } from "react";
import { tocData } from "../../data/tocData";
import { tocHeadingStyle, tocLinkStyle, tocListItemStyle, tocListStyle, tocSubLinkStyle, tocSubListItemStyle, tocSubListStyle } from "../../styles/tocStyle";

const tocContainerStyle: CSSProperties = {
	padding: "2rem",
	maxWidth: "800px",
	margin: "2rem auto",
	backgroundColor: "#f7f7f7",
	borderRadius: "8px",
	boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

export const TableOfContents = () => {
	return (
		<nav style={tocContainerStyle}>
			<h3 style={tocHeadingStyle}>Table of Contents</h3>
			<ul style={tocListStyle}>
				{tocData.map((item) => (
					<li key={item.id} style={tocListItemStyle}>
						<a href={`#${item.id}`} style={tocLinkStyle}>
							{item.label}
						</a>
						{item.subsections && item.subsections.length > 0 && (
							<ul style={tocSubListStyle}>
								{item.subsections.map((subItem) => (
									<li
										key={subItem.id}
										style={tocSubListItemStyle}
									>
										<a
											href={`#${subItem.id}`}
											style={tocSubLinkStyle}
										>
											{subItem.label}
										</a>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};
