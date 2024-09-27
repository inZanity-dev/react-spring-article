import { tocData } from "../../data/tocData";
import {
	tocContainerStyle,
	tocHeadingStyle,
	tocLinkStyle,
	tocListItemStyle,
	tocListStyle,
	tocSubLinkStyle,
	tocSubListItemStyle,
	tocSubListStyle
} from "../../styles/tocStyle";

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
