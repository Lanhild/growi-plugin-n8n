import React from "react";

import "./n8nView.css";

const FRAME = false;
const SRC = "https://n8n-preview-service.internal.n8n.cloud/workflows/demo";
const CLICKTOINTERACT = true;
const HIDECANVASERRORS = false;
const DISABLEINTERACTIVITY = false;
const THEME = undefined;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "n8n-demo": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        workflow: string;
        frame: boolean;
        src: string;
        clicktointeract: boolean;
        hidecanvaserrors: boolean;
        disableinteractivity: boolean;
        theme: string;
      };
    }
  }
}

export const n8nView = (
  Tag: React.FunctionComponent<any>
): React.FunctionComponent<any> => {
  return ({ children, className, ...props }) => {
    try {
      if (className !== "language-n8n") {
        return <Tag {...props}>{children}</Tag>;
      }

      const json = JSON.parse(children);
      const {
        frame,
        src,
        clicktointeract,
        hidecanvaserrors,
        disableinteractivity,
        theme,
      } = json;
      [
        "frame",
        "src",
        "clicktointeract",
        "hidecanvaserrors",
        "disableinteractivity",
        "theme",
      ].forEach((key) => delete json[key]);
      return (
        <n8n-demo
          workflow={`${encodeURIComponent(JSON.stringify(json))}`}
          frame={frame || FRAME}
          src={src || SRC}
          hidecanvaserrors={hidecanvaserrors || HIDECANVASERRORS}
          disableinteractivity={disableinteractivity || DISABLEINTERACTIVITY}
          theme={theme || THEME}
          clicktointeract={clicktointeract || CLICKTOINTERACT}
        />
      );
    } catch (e) {
      return <Tag {...props}>{children}</Tag>;
    }
  };
};
