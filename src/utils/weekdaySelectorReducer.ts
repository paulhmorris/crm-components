import { WeekdaySelectorActionType } from "types";

export function weekdaySelectorReducer(
  state: number[],
  { type, payload }: WeekdaySelectorActionType
) {
  switch (type) {
    case "add":
      return [...state, payload];
    case "remove":
      return state.filter((day) => day !== payload);
    default:
      throw new Error("Unknown action type");
  }
}
