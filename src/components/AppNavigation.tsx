import { NavLink } from "react-router-dom";

function AppNavigation() {
  return (
    <div className="z-1000 shadow-xl/12 rounded-[26px] w-70/100 h-24 border border-white/24 bg-[#DDF9E7]/50 backdrop-blur-[1.5px] mt-5 p-2 grid grid-cols-3 gap-2">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-r-[8px] rounded-l-[18px] bg-white"
            : isActive
              ? "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-r-[8px] rounded-l-[18px] bg-[#73B48C]"
              : "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-r-[8px] rounded-l-[18px] bg-white"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </NavLink>

      <NavLink
        to="/DogDonate"
        className={({ isActive, isPending }) =>
          isPending
            ? "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-[10px] bg-white"
            : isActive
              ? "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-[10px] bg-[#73B48C]"
              : "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-[10px] bg-white"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </NavLink>

      <NavLink
        to="/Gifts"
        className={({ isActive, isPending }) =>
          isPending
            ? "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-l-[8px] rounded-r-[18px] bg-white"
            : isActive
              ? "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-l-[8px] rounded-r-[18px] bg-[#73B48C]"
              : "flex justify-center items-center transition delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-[#73B48C] shadow-xl/8 rounded-l-[8px] rounded-r-[18px] bg-white"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </NavLink>
    </div>
  );
}

export default AppNavigation;
