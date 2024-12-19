import DashboardMain from "./DashboardMain";
import MyKanban from "./MyKanban";

export default function DashboardContent() {
  return (
    <div className="flex h-full font-TeXGyreAdventorBold text-black">
      <DashboardMain />
      <MyKanban />
    </div>
  );
} 