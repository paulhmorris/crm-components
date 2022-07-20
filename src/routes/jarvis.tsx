import { MarketTabs } from "components/Markets/MarketTabs";
import { JarvisNav } from "components/Navigation/JarvisNav";

export default function Jarvis() {
  return (
    <div className="flex">
      <JarvisNav />
      <div className="mr-[200px]">
        <MarketTabs />
      </div>
    </div>
  );
}
