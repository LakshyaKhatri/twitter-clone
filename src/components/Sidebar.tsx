import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full  xl:ml-24">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5">
      <SidebarOption text="Home" Icon={HomeIcon} active />
      <SidebarOption text="Explore" Icon={HashtagIcon} />
      <SidebarOption text="Notifications" Icon={BellIcon} />
      <SidebarOption text="Messages" Icon={MailIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkIcon} />
      <SidebarOption text="Lists" Icon={ClipboardListIcon} />
      <SidebarOption text="Profile" Icon={UserIcon} />
      <SidebarOption text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
    </div>
  )
}

export default Sidebar
