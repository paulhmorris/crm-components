import { useContext} from 'react';
import { TabControl } from 'utils/tabcontrol';
import { TabManagerContext } from 'contexts/TabManagerContext';
import { useNavigate } from "react-router-dom";
import { Button } from './Button';

const Topbar = () => {
    const navigate = useNavigate();
    const { tabs, setTabs, setSelectedTabIndex } = useContext(TabManagerContext);

    return (
        <div className="mb-10">
        <div className="flex space-x-4 justify-center">
          <Button onClick={() => TabControl(tabs, setTabs, setSelectedTabIndex, navigate, "Components", "/components")} variant="secondary">Components</Button>
          <Button onClick={() => TabControl(tabs, setTabs, setSelectedTabIndex, navigate, "Guest Profile", "/guest-profile")} variant="secondary">Guest Profile</Button>
          <Button onClick={() => TabControl(tabs, setTabs, setSelectedTabIndex, navigate, "Create Submarket", "/create-submarket")} variant="secondary">Create Submarket</Button>
          <Button onClick={() => TabControl(tabs, setTabs, setSelectedTabIndex, navigate, "Create Subscription", "/create-subscription")} variant="secondary">Create Subscription</Button>
        </div>
        </div>
    )
}

export default Topbar;
