import React from "react";
import FlowDiagram from "../flowDiagram/FlowDiagram";
import { stFlowData } from "./data";

export default function FlowDiagramEmissaoGuiaST({ defaultOpen = true }) {
  return <FlowDiagram data={stFlowData} defaultOpen={defaultOpen} />;
}
