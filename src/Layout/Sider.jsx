import { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatars/avatar-01.svg";
import {
  LogoIcon,
  MaterialSymbolsHomeAppLogo,
  StashDashboard,
  FluentDataHistogram16Filled,
  FluentLauncherSettings20Filled,
  IcOutlineContactSupport,
} from "../components/icons";

function Sider({ defaultSelectedId = "home-btn" }) {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);
  const navigate = useNavigate();

  const handleNavigation = (btnId, path) => {
    setSelectedId(btnId);
    navigate(path);
  };

  return (
    <div
      className=" bg-[#FFFFFF] bg-opacity-20 m-4 p-4 w-16 flex flex-col items-center rounded-2xl"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div>
        <button id="logo-btn">
          <LogoIcon />
        </button>
      </div>

      <hr className="w-full border-black border-2" />

      <ul className="flex flex-col flex-1 items-center justify-center gap-4">
        <li>
          <button
            id="home-btn"
            className={`btn btn-circle btn-outline bg-[#FFFFFF] border-black border-2 ${
              selectedId === "home-btn" ? "!bg-black" : ""
            }`}
            onClick={() => handleNavigation("home-btn", "/")}
          >
            <MaterialSymbolsHomeAppLogo
              className={`h-6 w-6 ${
                selectedId === "home-btn" ? "text-white" : "text-black"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            id="dashboard-btn"
            className={`btn btn-circle btn-outline bg-[#FFFFFF] border-black border-2 ${
              selectedId === "dashboard-btn" ? "!bg-black" : ""
            }`}
            onClick={() => handleNavigation("dashboard-btn", "/dashboard")}
          >
            <StashDashboard
              className={`h-6 w-6 ${
                selectedId === "dashboard-btn" ? "text-white" : "text-black"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            id="statistics-btn"
            className={`btn btn-circle btn-outline bg-[#FFFFFF] border-black border-2 ${
              selectedId === "statistics-btn" ? "!bg-black" : ""
            }`}
            onClick={() => handleNavigation("statistics-btn", "/statistics")}
          >
            <FluentDataHistogram16Filled
              className={`h-6 w-6 ${
                selectedId === "statistics-btn" ? "text-white" : "text-black"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            id="settings-btn"
            className={`btn btn-circle btn-outline bg-[#FFFFFF] border-black border-2 ${
              selectedId === "settings-btn" ? "!bg-black" : ""
            }`}
            onClick={() => handleNavigation("settings-btn", "/settings")}
          >
            <FluentLauncherSettings20Filled
              className={`h-6 w-6 ${
                selectedId === "settings-btn" ? "text-white" : "text-black"
              }`}
            />
          </button>
        </li>
        <li>
          <button
            id="support-btn"
            className={`btn btn-circle btn-outline bg-[#FFFFFF] border-black border-2 ${
              selectedId === "support-btn" ? "!bg-black" : ""
            }`}
            onClick={() => handleNavigation("support-btn", "/support")}
          >
            <IcOutlineContactSupport
              className={`h-6 w-6 ${
                selectedId === "support-btn" ? "text-white" : "text-black"
              }`}
            />
          </button>
        </li>
      </ul>

      <div>
        <button
          id="profile-btn"
          className="btn btn-circle btn-outline bg-[#FFFFFF] border-black border-2"
          onClick={() => handleNavigation("profile-btn", "/profile")}
        >
          <div className="w-10 h-10 rounded-full ring ring-[#FFFFFF] ring-offset-base-100 ring-offset-2 bg-[#FFFFFF]">
            <img src={avatar} alt="User avatar" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Sider;
