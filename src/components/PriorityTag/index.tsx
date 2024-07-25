import React from "react";
import { PriorityTagProps } from "../../utils/interface";
import { priorityConfig } from "../../utils/constants";

const PriorityTag: React.FC<PriorityTagProps> = ({ priority }) => {
  const config = priorityConfig[priority];

  if (!config) {
    return null;
  }

  return (
    <span className={`px-2 py-1 rounded text-sm mr-2 ${config.style}`}>
      {config.text}
    </span>
  );
};

export default PriorityTag;
