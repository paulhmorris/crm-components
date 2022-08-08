import { GlobalTab } from "contexts/types";

type ActionType =
  | { type: "OPEN"; payload: GlobalTab }
  | { type: "CLOSE"; payload: GlobalTab }
  | { type: "CHANGE"; payload: GlobalTab };

interface ITabReducer {
  (state: GlobalTab[], action: ActionType): GlobalTab[];
}
const MAX_TABS = 6;

export const tabReducer: ITabReducer = (state, { type, payload }) => {
  const payloadTabIndex = state.findIndex((t) => t.route === payload.route);
  const activeTabIndex = state.findIndex((t) => t.isActive);

  switch (type) {
    case "OPEN":
      // If the tab is already open
      if (state.some((t) => t.route === payload.route)) {
        return state.map((tab) => {
          if (tab.route === payload.route) {
            return { ...tab, isActive: true };
          }
          return { ...tab, isActive: false };
        });
      }

      // Disallow more than MAX_TABS open
      if (state.length === MAX_TABS) return state;

      // This is a little ugly
      return [...state, { ...payload, isActive: true }].map((tab) => {
        if (tab.route === payload.route) {
          return { ...tab };
        }
        return { ...tab, isActive: false };
      });

    case "CLOSE":
      // Disallow closing the last tab
      if (state.length === 1) return state;

      // If you close the active tab
      if (payload.isActive) {
        return (
          state
            .map((tab, index) => {
              // If it's the last tab, open the new last tab
              if (
                payloadTabIndex === state.length - 1 &&
                index === payloadTabIndex - 1
              ) {
                return { ...tab, isActive: true };
              }
              // Otherwise open the tab to the right
              if (index === payloadTabIndex + 1) {
                return { ...tab, isActive: true };
              }

              return { ...tab, isActive: false };
            })
            // Remove the closed tab
            .filter((tab) => tab.route !== payload.route)
        );
      }
      // If you close an inactive tab
      return state.filter((tab) => tab.route !== payload.route);

    case "CHANGE":
      // If you click the current tab's title
      if (state[activeTabIndex].route === payload.route) return state;

      return state.map((tab, index) => {
        if (index === payloadTabIndex) {
          return { ...tab, isActive: true };
        }
        return { ...tab, isActive: false };
      });

    default:
      throw Error("Unknown action");
  }
};
