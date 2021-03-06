import { css, Global } from "@emotion/react";

const nprogressStyle = css`
  #nprogress {
    --nprogress-color: #0bc5ea;

    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--nprogress-color);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    opacity: 1;
    box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color);
    transform: rotate(3deg) translate(0px, -4px);
  }

  @media (prefers-color-scheme: dark) {
    #nprogress {
      --nprogress-color: #9decf9;
    }
  }
`;

const NProgressGlobalStyles = () => <Global styles={nprogressStyle} />;

export default NProgressGlobalStyles;
