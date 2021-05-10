import React from 'react'
// icons
import {HomeIcon} from "../icons/icon";
import {MoreIcon} from "../icons/icon";
import {ProfileIcon} from "../icons/icon";
import {LitsIcon} from "../icons/icon";
import {BookmarkIcon} from "../icons/icon";
import {MessagesIcon} from "../icons/icon";
import {NotificationIcon} from "../icons/icon";
import {ExploreIcon} from "../icons/icon";
// header icons
import {MediaIcon} from "../icons/icon";
import {GifIcon} from "../icons/icon";
import {SurveyIcon} from "../icons/icon";
import {EmojiyIcon} from "../icons/icon";
import {ScheduleIcon} from "../icons/icon";


const Sidebar = () => {
  return (
    <aside className="w-72 bg-blue-200">
      SideBar
      <HomeIcon />
      <ExploreIcon />
      <NotificationIcon />
      <MessagesIcon />
      <BookmarkIcon />
      <LitsIcon />
      <ProfileIcon />
      <MoreIcon />
      <MediaIcon className="w-7 h-7" />
      <GifIcon className="w-7 h-7" />
      <SurveyIcon className="w-7 h-7" />
      <EmojiyIcon className="w-7 h-7" />
      <ScheduleIcon className="w-7 h-7" />
    </aside>
  )
}

export default Sidebar

