import { SpikeCard } from "../../components/card/card";
import { RadixIconsRocket } from "../../components/icons";
import avatar1 from "../../assets/avatars/avatar-01.svg";
import avatar2 from "../../assets/avatars/avatar-02.svg";

export default function MyKanban() {
  return (
    <aside className="w-80 p-4 bg-[#FFFFFF] rounded-2xl h-[calc(100vh-32px)] scrollable">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <img
            src={avatar1}
            alt="User avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Annette Black</h3>
            <p className="text-sm text-gray-500">274 Tasks</p>
          </div>
        </div>
      </div>

      {/* 活动图表 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Activity</h3>
          <select className="text-sm">
            <option>Year</option>
          </select>
        </div>
        <div className="h-40 bg-gray-100 rounded-lg">
          {/* 这里可以添加实际的图表组件 */}
        </div>
      </div>

      {/* My Events section - add proper spacing and container */}
      <div className="space-y-4">
        <h3 className="font-semibold">My Events</h3>
        <SpikeCard
          icon={<RadixIconsRocket className="w-5 h-5" />}
          category="IT & Software"
          title="Flutter Masterclass (Dart, APIs, Firebase & More)"
          developers={8520}
          priority={4.8}
          avatars={[avatar1, avatar2]}
          className="w-full"
        />
        <SpikeCard
          icon={<RadixIconsRocket className="w-5 h-5" />}
          category="IT & Software"
          title="Flutter Masterclass (Dart, APIs, Firebase & More)"
          developers={8520}
          priority={4.8}
          avatars={[avatar1, avatar2]}
          className="w-full"
        />
        <SpikeCard
          icon={<RadixIconsRocket className="w-5 h-5" />}
          category="IT & Software"
          title="Flutter Masterclass (Dart, APIs, Firebase & More)"
          developers={8520}
          priority={4.8}
          avatars={[avatar1, avatar2]}
          className="w-full"
        />
      </div>
    </aside>
  );
} 