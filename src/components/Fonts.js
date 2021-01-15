import { Global } from "@emotion/react";

const openSansFont = `
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(""), url("/fonts/open-sans-v18-latin/open-sans-v18-latin-300.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-300.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: local(""),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-300italic.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-300italic.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(""),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-regular.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-regular.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local(""), url("/fonts/open-sans-v18-latin/open-sans-v18-latin-italic.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-italic.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(""), url("/fonts/open-sans-v18-latin/open-sans-v18-latin-600.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-600.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: local(""),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-600italic.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-600italic.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(""), url("/fonts/open-sans-v18-latin/open-sans-v18-latin-700.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-700.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: local(""),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-700italic.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-700italic.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: local(""), url("/fonts/open-sans-v18-latin/open-sans-v18-latin-800.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-800.woff") format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: local(""),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-800italic.woff2") format("woff2"),
    url("/fonts/open-sans-v18-latin/open-sans-v18-latin-800italic.woff") format("woff");
}
`;

const ralewayFont = `
@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 100;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-100.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-100.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 200;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-200.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-200.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-300.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-300.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-regular.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-regular.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-500.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-500.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-600.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-600.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-700.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-700.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 900;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-900.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-900.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 800;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-800.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-800.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 200;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-200italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-200italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 100;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-100italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-100italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 300;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-300italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-300italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 500;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-500italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-500italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 400;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 600;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-600italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-600italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 700;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-700italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-700italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 800;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-800italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-800italic.woff") format("woff");
}

@font-face {
  font-family: "Raleway";
  font-style: italic;
  font-weight: 900;
  src: local(""),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-900italic.woff2") format("woff2"),
    url("/fonts/raleway-v18-latin/raleway-v18-latin-900italic.woff") format("woff");
}
`;

const Fonts = () => (
  <Global
    styles={`
      ${openSansFont}
      ${ralewayFont}
    `}
  />
);

export default Fonts;
