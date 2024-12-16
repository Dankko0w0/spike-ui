import { useState } from "react";
import avatar from "../assets/avatars/avatar-01.svg";

function Sider() {
  const [selectedId, setSelectedId] = useState('home-btn');

  return (
    <div
      className=" bg-[#F3EBE5] m-4 p-4 w-16 flex flex-col items-center rounded-2xl"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div>
        <button id="logo-btn">
          <svg
            className="h-10 w-10"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M690.32 808.58l-51.33-22.68a38.978 38.978 0 0 0-31.68 0.08l-88.44 39.62a38.958 38.958 0 0 1-31.94-0.04l-87.12-39.27a38.961 38.961 0 0 0-32.73 0.33l-41.39 19.67c-25.85 12.28-55.68-6.57-55.68-35.19V427.51C270.01 296.34 376.35 190 507.52 190s237.51 106.34 237.51 237.51v345.43c0 28.16-28.95 47.02-54.71 35.64z"></path>
            <path
              d="M374.06 429.62a55.71 73.11 0 1 0 111.42 0 55.71 73.11 0 1 0-111.42 0Z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M530.77 429.62a55.71 73.11 0 1 0 111.42 0 55.71 73.11 0 1 0-111.42 0Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </button>
      </div>

      <hr className="w-full border-black border-2" />

      <ul className="flex flex-col flex-1 items-center justify-center gap-4">
        <li>
          <button 
            id="home-btn"
            className={`btn btn-circle btn-outline bg-[#FBF8F6] border-black border-2 ${
              selectedId === 'home-btn' ? "!bg-black" : ""
            }`}
            onClick={() => setSelectedId('home-btn')}
          >
            <MaterialSymbolsHomeAppLogo className={`h-6 w-6 ${selectedId === 'home-btn' ? "text-white" : "text-black"}`} />
          </button>
        </li>
        <li>
          <button 
            id="dashboard-btn"
            className={`btn btn-circle btn-outline bg-[#FBF8F6] border-black border-2 ${
              selectedId === 'dashboard-btn' ? "!bg-black" : ""
            }`}
            onClick={() => setSelectedId('dashboard-btn')}
          >
            <StashDashboard className={`h-6 w-6 ${selectedId === 'dashboard-btn' ? "text-white" : "text-black"}`} />
          </button>
        </li>
        <li>
          <button 
            id="statistics-btn"
            className={`btn btn-circle btn-outline bg-[#FBF8F6] border-black border-2 ${
              selectedId === 'statistics-btn' ? "!bg-black" : ""
            }`}
            onClick={() => setSelectedId('statistics-btn')}
          >
            <FluentDataHistogram16Filled className={`h-6 w-6 ${selectedId === 'statistics-btn' ? "text-white" : "text-black"}`} />
          </button>
        </li>
        <li>
          <button 
            id="settings-btn"
            className={`btn btn-circle btn-outline bg-[#FBF8F6] border-black border-2 ${
              selectedId === 'settings-btn' ? "!bg-black" : ""
            }`}
            onClick={() => setSelectedId('settings-btn')}
          >
            <FluentLauncherSettings20Filled className={`h-6 w-6 ${selectedId === 'settings-btn' ? "text-white" : "text-black"}`} />
          </button>
        </li>
        <li>
          <button 
            id="support-btn"
            className={`btn btn-circle btn-outline bg-[#FBF8F6] border-black border-2 ${
              selectedId === 'support-btn' ? "!bg-black" : ""
            }`}
            onClick={() => setSelectedId('support-btn')}
          >
            <IcOutlineContactSupport className={`h-6 w-6 ${selectedId === 'support-btn' ? "text-white" : "text-black"}`} />
          </button>
        </li>
      </ul>

      <div>
        <button id="profile-btn" className="btn btn-circle btn-outline bg-[#FBF8F6] border-black border-2">
          <div className="w-10 h-10 rounded-full ring ring-[#FBF8F6] ring-offset-base-100 ring-offset-2 bg-[#FBF8F6]">
            <img src={avatar} alt="User avatar" />
          </div>
        </button>
      </div>
    </div>
  );
}

function StashDashboard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m15.943 10.498l-4.055 4.505A2 2 0 0 0 10 17h4a2 2 0 0 0-.603-1.431l3.66-4.067a.75.75 0 1 0-1.114-1.004M5 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm14.75.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 .75-.75"
      />
      <path
        fill="currentColor"
        d="M18 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12.75 6a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z"
      />
      <path
        fill="currentColor"
        d="M12 3.25C6.063 3.25 1.25 8.063 1.25 14c0 1.498.307 2.927.862 4.224l.005.012c.215.502.363.848.817 1.332c.183.195.439.39.677.548c.238.157.519.315.77.407c.624.227 1.168.227 1.937.227h11.364c.769 0 1.313 0 1.937-.227c.252-.092.532-.25.77-.407s.494-.353.677-.548c.454-.484.603-.83.817-1.332l.005-.012c.555-1.297.862-2.726.862-4.224c0-5.937-4.813-10.75-10.75-10.75M2.75 14a9.25 9.25 0 0 1 18.5 0c0 1.292-.264 2.52-.741 3.634c-.204.477-.267.62-.536.907c-.071.075-.22.197-.41.323c-.19.125-.36.214-.458.25c-.352.128-.632.136-1.502.136H6.397c-.87 0-1.15-.008-1.502-.136a2.6 2.6 0 0 1-.458-.25a2.6 2.6 0 0 1-.41-.323c-.269-.287-.332-.43-.536-.907A9.2 9.2 0 0 1 2.75 14"
      />
    </svg>
  );
}

function MaterialSymbolsHomeAppLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.5 21q-.625 0-1.062-.437T3 19.5v-1.9l4-3.55V21zM8 21v-4h8v4zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.437 1.063T19.5 21zM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525t.538.088T13 3.9l2 1.775z"
      />
    </svg>
  );
}

function FluentLauncherSettings20Filled(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.911 7.383a8.5 8.5 0 0 1 1.78-3.08a.5.5 0 0 1 .54-.135l1.918.686a1 1 0 0 0 1.32-.762l.366-2.006a.5.5 0 0 1 .388-.4a8.5 8.5 0 0 1 3.554 0a.5.5 0 0 1 .388.4l.366 2.006a1 1 0 0 0 1.32.762l1.919-.686a.5.5 0 0 1 .54.136a8.5 8.5 0 0 1 1.78 3.079a.5.5 0 0 1-.153.535l-1.555 1.32a1 1 0 0 0 0 1.524l1.555 1.32a.5.5 0 0 1 .152.535a8.5 8.5 0 0 1-1.78 3.08a.5.5 0 0 1-.54.135l-1.918-.686a1 1 0 0 0-1.32.762l-.366 2.007a.5.5 0 0 1-.388.399a8.5 8.5 0 0 1-3.554 0a.5.5 0 0 1-.388-.4l-.366-2.006a1 1 0 0 0-1.32-.762l-1.918.686a.5.5 0 0 1-.54-.136a8.5 8.5 0 0 1-1.78-3.079a.5.5 0 0 1 .152-.535l1.555-1.32a1 1 0 0 0 0-1.524l-1.555-1.32a.5.5 0 0 1-.152-.535m6.188.398L6.516 9.68a.5.5 0 0 0 0 .64l1.391 1.669c.1.12.284.12.384 0l.925-1.11a.25.25 0 0 0 0-.32L8.75 10l.6-.72zM8.75 7l2.5 3l-2.158 2.59a.25.25 0 0 0 .192.41h1.849a.25.25 0 0 0 .192-.09l2.158-2.59a.5.5 0 0 0 0-.64L11.25 7z"
      />
    </svg>
  );
}

function FluentDataHistogram16Filled(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 4a2 2 0 1 0-4 0v10h4zM5 7H4a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 .5.5H5zm6 7h2.5a.5.5 0 0 0 .5-.5V7a2 2 0 0 0-2-2h-1z"
      />
    </svg>
  );
}

function IcOutlineContactSupport(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3m-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5"
      />
    </svg>
  );
}



export default Sider;
