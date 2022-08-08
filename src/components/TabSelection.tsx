import { TabManagerContext } from "contexts/TabManagerContext";
import { GlobalTab } from "contexts/types";
import { useContext } from "react";
import { Button } from "./Button";

const TabSelection = () => {
  const { openTab } = useContext(TabManagerContext);

  const tabButtons: GlobalTab[] = [
    { title: "Components", route: "/components", isActive: false },
    { title: "Guest Profile", route: "/guest-profile", isActive: false },
    { title: "Pepper Nav", route: "/nav", isActive: false },
    { title: "Jarvis", route: "/jarvis", isActive: false },
    { title: "Group Profile", route: "/group-profile", isActive: false },
    { title: "Create Submarket", route: "/create-submarket", isActive: false },
    {
      title: "Create Subscription",
      route: "/create-subscription",
      isActive: false,
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-4">
        {tabButtons.map((tab) => (
          <Button
            key={tab.title}
            onClick={() => openTab(tab)}
            variant="secondary"
          >
            {tab.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabSelection;
