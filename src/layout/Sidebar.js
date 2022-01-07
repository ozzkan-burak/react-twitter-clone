import React, { useState } from "react";
import twitterLogo from "../images/twitter.svg";
//custom components
import NavigationButton from "../components/NavigationButton";
import {
  MoreIcon,
  ProfileIcon,
  LitsIcon,
  BookmarkIcon,
  MessagesIcon,
  NotificationIcon,
  ExploreIcon,
  HomeIcon,
} from "../icons/icon";
import UserBox from "../components/UserBox";

const navButtons = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmark",
    icon: BookmarkIcon,
  },
  {
    name: "Lits",
    icon: LitsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];




const Sidebar = () => {

  const [active, setActive] = useState('Home');

  const handleClickMenuItem = (name) => {
    setActive(name)
  };

  return (
    <aside className="flex flex-col justify-between w-72 px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 p-2 flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-lightest transfom transition-colors duration-200">
          <img src={twitterLogo} alt="" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {navButtons.map(({name, icon}) => {
              return (
                <NavigationButton key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleClickMenuItem} />
              );
            })}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transfom transition-colors duration-200">
          Tweet
        </button>
      </div>
      <UserBox />
    </aside>
  );
};

export default Sidebar;
