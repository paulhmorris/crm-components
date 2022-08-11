import { TabManagerContext } from "contexts/TabManagerContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { tabControl } from "../utils/tabcontrol";
import { Button } from "./Button";

const TabSelection = () => {
  const navigate = useNavigate();
  const { tabs, setTabs, setSelectedTabIndex } = useContext(TabManagerContext);

  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center space-x-4">
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Components",
              "/components"
            )
          }
          variant="secondary"
        >
          Components
        </Button>
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Guest Profile",
              "/guest-profile"
            )
          }
          variant="secondary"
        >
          Guest Profile
        </Button>
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Pepper Nav",
              "/nav"
            )
          }
          variant="secondary"
        >
          Pepper Nav
        </Button>
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Jarvis",
              "/jarvis"
            )
          }
          variant="secondary"
        >
          Jarvis
        </Button>
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Group Profile",
              "/group-profile"
            )
          }
          variant="secondary"
        >
          Group Profile
        </Button>
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Sample Table",
              "/sample-table"
            )
          }
          variant="secondary"
        >
          Sample Table
        </Button>
        {/* <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Create Submarket",
              "/create-submarket"
            )
          }
          variant="secondary"
        >
          Create Submarket
        </Button>
        <Button
          onClick={() =>
            tabControl(
              tabs,
              setTabs,
              setSelectedTabIndex,
              navigate,
              "Create Subscription",
              "/create-subscription"
            )
          }
          variant="secondary"
        >
          Create Subscription
        </Button> */}
      </div>
    </div>
  );
};

export default TabSelection;
