import { IPriority } from "./interface";

export const priorityConfig = {
  [IPriority.LOW]: { style: "bg-green-200 text-green-800", text: "Low" },
  [IPriority.MEDIUM]: { style: "bg-yellow-200 text-yellow-800", text: "Medium" },
  [IPriority.HIGH]: { style: "bg-red-200 text-red-800", text: "High" }
};