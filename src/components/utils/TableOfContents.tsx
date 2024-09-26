import { CSSProperties } from "react";

const tocStyle: CSSProperties = {
  padding: "1rem",
  width: "90%",
  margin: "auto",
};

const tocHeadingStyle: CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const tocListStyle: CSSProperties = {
  listStyleType: "none",
  paddingLeft: 0,
};

const tocListItemStyle: CSSProperties = {
  marginBottom: "0.5rem",
};

const tocLinkStyle: CSSProperties = {
  textDecoration: "none",
  color: "#0366d6",
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const tocSubListStyle: CSSProperties = {
  listStyleType: "none",
  paddingLeft: "1rem",
};

const tocSubListItemStyle: CSSProperties = {
  marginBottom: "0.25rem",
};

const tocSubLinkStyle: CSSProperties = {
  textDecoration: "none",
  color: "#0366d6",
  fontSize: "1rem",
};

const tocData = [
  {
    id: "getting-started",
    label: "Getting Started",
    subsections: [
      { id: "example-0", label: "Example 0" },
    ],
},
{
	id: "config-object",
    label: "Configuration Object",
    subsections: [
		{ id: "example-1", label: "Example 1" },
      { id: "example-2", label: "Example 2" },
    ],
  },
  {
    id: "spring-events",
    label: "Spring Events",
    subsections: [
      { id: "example-3", label: "Example 3" },
    ],
  },
];

export const TableOfContents = () => {
  return (
    <nav style={tocStyle}>
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
                  <li key={subItem.id} style={tocSubListItemStyle}>
                    <a href={`#${subItem.id}`} style={tocSubLinkStyle}>
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
