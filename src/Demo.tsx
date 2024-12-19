import React from "react";

import ReactDOM from "react-dom/client";

import { n8nView } from "./n8nView";

const code = `
{
  "frame": true,
  "clicktointeract": false,
  "nodes": [
    {
      "parameters": {},
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [
        380,
        240
      ],
      "id": "1724881c-01d0-4900-9a37-05fe09851f58",
      "name": "When clicking ‘Test workflow’"
    }
  ],
  "connections": {
    "When clicking ‘Test workflow’": {
      "main": [
        []
      ]
    }
  },
  "pinData": {}
}
`;

const N8NComponent = n8nView(() => <></>);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <N8NComponent className="language-n8n">{code}</N8NComponent>
  </React.StrictMode>
);
