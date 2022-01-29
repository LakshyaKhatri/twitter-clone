import Image from 'next/image'
import { RiHome7Fill, RiHashtag } from 'react-icons/ri'
import { FiBell, FiBookmark } from 'react-icons/fi'
import {
  HiDotsHorizontal,
  HiOutlineUser,
  HiOutlineMail,
} from 'react-icons/hi'
import { CgNotes } from 'react-icons/cg'
import twitterIcon from '/public/twitterIcon.webp'
import SidebarOption from '@/components/SidebarOption'
import { useSession, signOut } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[285px] px-2.5 py-2 fixed h-full xl:ml-12 overflow-auto">
      <div className="flex items-center justify-center w-14 h-14 hover-animation p-0 mt-0">
        <Image src={twitterIcon} width={28} height={28} />
      </div>

      <div className="mb-2.5">
        <SidebarOption text="Home" Icon={RiHome7Fill} active />
        <SidebarOption text="Explore" Icon={RiHashtag} />
        <SidebarOption text="Notifications" Icon={FiBell} />
        <SidebarOption text="Messages" Icon={HiOutlineMail} />
        <SidebarOption text="Bookmarks" Icon={FiBookmark} />
        <SidebarOption text="Lists" Icon={CgNotes} />
        <SidebarOption text="Profile" Icon={HiOutlineUser} />
        <SidebarOption text="More" Icon={HiDotsHorizontal} />
      </div>

      <button className="hidden xl:inline bg-[#1d9bf0] rounded-full w-56 min-h-[54px] text-white text-lg font-bold shadow-md hover:bg-[#1a8cd8] mb-3">Tweet</button>

      <div className="text-[#d9d9d9] flex items-center justify-center hover-animation xl:-mr-5 mt-auto"
           onClick={signOut}>
        <img src={session.user.image} alt="" className="h-10 w-10 rounded-full xl:mr-2.5"/>

        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.username}</p>
        </div>
        <HiDotsHorizontal className="w-5 h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  )
}

export default Sidebar
