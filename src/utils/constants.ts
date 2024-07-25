import { IPriority, IPriorityNumber } from "./interface";

export const priorityConfig = {
  [IPriority.LOW]: { style: "bg-green-200 text-green-800", text: "Low" },
  [IPriority.MEDIUM]: { style: "bg-yellow-200 text-yellow-800", text: "Medium" },
  [IPriority.HIGH]: { style: "bg-red-200 text-red-800", text: "High" }
};

export const priorityToNumber = (priority: IPriority) => {
  switch (priority) {
    case IPriority.HIGH:
      return IPriorityNumber.HIGH;
    case IPriority.MEDIUM:
      return IPriorityNumber.MEDIUM;
    case IPriority.LOW:
      return IPriorityNumber.LOW;
    default:
      return 0;
  }
};