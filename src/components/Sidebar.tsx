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
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] px-2.5 py-2 fixed h-full xl:ml-12 overflow-auto">
      <div className="flex items-center justify-center w-14 h-14 hover-animation p-0 mt-0">
        <Image src="https://rb.gy/ogau5a" width={28} height={28} />
      </div>

      <div className="mb-2.5">
        <SidebarOption text="Home" Icon={HomeIcon} active />
        <SidebarOption text="Explore" Icon={HashtagIcon} />
        <SidebarOption text="Notifications" Icon={BellIcon} />
        <SidebarOption text="Messages" Icon={MailIcon} />
        <SidebarOption text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarOption text="Lists" Icon={ClipboardListIcon} />
        <SidebarOption text="Profile" Icon={UserIcon} />
        <SidebarOption text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="hidden xl:inline bg-[#1d9bf0] rounded-full w-56 min-h-[54px] text-white text-lg font-bold shadow-md hover:bg-[#1a8cd8] mb-3">Tweet</button>

      <div className="text-[#d9d9d9] flex items-center justify-center hover-animation xl:-mr-5 mt-auto">
        <img src="https://lh3.googleusercontent.com/ogw/ADea4I5OONOW8CDeT20jW2D_l-4ulrCOKJYq_z-ZwuJS=s83-c-mo" alt="" className="h-10 w-10 rounded-full xl:mr-2.5"/>

        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Lakshya Khatri</h4>
          <p className="text-[#6e767d]">@lakshyakhatri_</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default Sidebar
