import SpikeCard from "../components/card";
import avatar1 from "../assets/avatars/avatar-01.svg";
import avatar2 from "../assets/avatars/avatar-02.svg";

function Content() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h1 className="text-6xl text-black font-TeXGyreAdventorBold tracking-in-expand">
                  Spike
                </h1>
                <RiSparkling2Line className="w-8 h-8 text-black blink-1" />
              </div>
              <h2 className="text-2xl text-black typing-effect font-TeXGyreAdventorBold">
                The AI-Powered spider platform
              </h2>
            </div>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                placeholder="🔍 URL"
                className="input input-bordered w-full max-w-xs bg-[#F3EBE5] text-black border-black"
              />
              <button className="btn bg-[#F3EBE5] text-black">
                Run <RadixIconsRocket className="w-5 h-5" />
              </button>
            </div>

            {/* <SpikeCard
              icon={<RadixIconsRocket className="w-5 h-5" />}
              category="IT & Software"
              title="CCNA 2020 200-125 Video Boot Camp"
              developers={9520}
              rating={4.8}
              avatars={[avatar1, avatar2]}
              isTopRated={false}
              className="w-[300px]"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function RiSparkling2Line(props) {
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
        d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zm-6.333 8.125l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667l2.667-5zm.75 2.667L9.19 10.812L8.001 8.583l-1.189 2.229L4.584 12l2.228 1.188l1.189 2.229l1.188-2.229zm8.25 4.333l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z"
      />{" "}
    </svg>
  );
}
function RadixIconsRocket(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m6.854 3.854l.8-.8c.644-.645 1.775-1.092 2.898-1.253a5.3 5.3 0 0 1 1.504-.02c.443.066.714.196.84.323c.127.126.257.397.323.84c.064.427.059.95-.02 1.504c-.16 1.123-.608 2.254-1.253 2.898L7.5 11.793l-1.146-1.146a.5.5 0 1 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l.547-.548l1.17 1.951a.5.5 0 0 0 .783.097l2-2a.5.5 0 0 0 .141-.425l-.465-3.252l.624-.623c.855-.856 1.358-2.225 1.535-3.465c.09-.627.1-1.25.019-1.794c-.08-.528-.256-1.05-.604-1.399c-.349-.348-.871-.525-1.4-.604a6.3 6.3 0 0 0-1.793.02C9.17.987 7.8 1.49 6.946 2.345l-.623.624l-3.252-.465a.5.5 0 0 0-.425.141l-2 2a.5.5 0 0 0 .097.783l1.95 1.17l-.547.547a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 1 0 .708-.708L3.207 7.5l.647-.646zm3.245 9.34l-.97-1.617l2.017-2.016l.324 2.262zM3.423 5.87l2.016-2.016l-2.262-.324l-1.37 1.37zm-1.07 4.484a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 1 0 .708.707zm1.5 1.5a.5.5 0 1 0-.707-.707l-2 2a.5.5 0 0 0 .708.707zm1.5 1.5a.5.5 0 1 0-.707-.708l-1 1a.5.5 0 1 0 .708.707zM9.5 6.749a1.249 1.249 0 1 0 0-2.498a1.249 1.249 0 0 0 0 2.498"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export default Content;
