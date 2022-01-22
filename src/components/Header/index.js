import React from "react";
import avatar from "../../assets/avatar-placeholder.svg";
import ThemeSwitch from "../ThemeSwitch";

const Header = () => {
  return (
    <header className="bg-white shadow fixed w-full z-40">
      <nav className="px-5 md:px-8 py-4 flex items-center justify-between">
        <button className="flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent lg:hidden">
          <svg width="25.567" height="18" viewBox="0 0 25.567 18">
            <g transform="translate(-776 -462)">
              <rect
                width="12.749"
                height="2.499"
                rx="1.25"
                transform="translate(776 462)"
                fill="currentColor"
              ></rect>
              <rect
                width="25.567"
                height="2.499"
                rx="1.25"
                transform="translate(776 469.75)"
                fill="currentColor"
              ></rect>
              <rect
                width="17.972"
                height="2.499"
                rx="1.25"
                transform="translate(776 477.501)"
                fill="currentColor"
              ></rect>
            </g>
          </svg>
        </button>

        <div className="hidden md:flex ms-5 me-auto">
          <a className="inline-flex" href="/">
            <span
              className="overflow-hidden relative"
              style={{ width: 128, height: 40 }}
            >
              <div className="block bg-accent overflow-hidden absolute inset-0 box-border m-0">
                {/* <img
                    alt="EintHotels"
                    sizes="100vw"
                    src={logo}

                    // style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;"
                  /> */}
                <div className="text-center text-white text-2xl font-bold">
                  Logo Here
                </div>
                <noscript></noscript>
              </div>
            </span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none cursor-pointer focus:shadow bg-accent text-white border border-transparent hover:bg-accent-focus px-3 py-0 text-sm h-10 ms-4 md:ms-6 ms-4 md:ms-6">
            Create Hotel
          </a>
          <ThemeSwitch />
          <div className="relative inline-block text-left">
            <button className="flex items-center focus:outline-none">
              <div className="relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100">
                <div className="block overflow-hidden absolute inset-0 box-border m-0">
                  <img
                    className="absolute inset-0 border-box p-0  border-none m-auto block w-0 h-0 min-w min-w-full max-w-full min-h-full max-h-full"
                    src={avatar}
                    alt="avatar"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
