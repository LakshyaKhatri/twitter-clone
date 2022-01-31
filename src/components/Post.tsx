{/* TODO: change to respective user's data */}
import { useSession } from 'next-auth/react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BsChat } from 'react-icons/bs'
import { AiOutlineRetweet } from 'react-icons/ai'
import { IoIosHeartEmpty } from 'react-icons/io'
import { FiShare } from 'react-icons/fi'


function Post() {
  const { data: session } = useSession()

  return (
    <div className="pt-3 pr-3 pb-1 pl-4 flex space-x-3 cursor-pointer border-b border-gray-700">
      <img src={session.user.image}
           alt="profile picture"
           className="h-12 w-12 rounded-full cursor-pointer"/>

      <div className="space-y-2 w-full">
        <div className="text-[#6e767d] flex h-[22px]">
          <div className="inline-block group">
            <h4 className="font-semibold text-[15px] text-[#d9d9d9] group-hover:underline inline-block">
              {session.user.name}
            </h4>
            <span className="text-[15px] ml-1.5">@{session.user.username}</span>
          </div>
          <div className="icon group flex-shrink-0 ml-auto flex justify-center align-bottom">
            <HiDotsHorizontal className="icon-hover-bg w-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <p className="text-[#d9d9d9] text-[15px] mt-0.5">
           “Remember your history, folks”
           <br/>
           <br/>
           <p>“Make sure you have all the tools. If a carpenter shows up to your house with just a hammer, you probably want to call someone else.”</p>
        </p>

        <div className="text-[#6e767d] flex justify-between max-w-[26rem]">
          <div className="flex items-center justify-center group">
            <div className="icon-hover-bg group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <BsChat className="w-4 h-4 group-hover:text-[#1d9bf0]"/>
            </div>
          </div>
          <div className="flex items-center justify-center group">
            <div className="icon-hover-bg group-hover:bg-green-500/10">
              <AiOutlineRetweet className="w-5 h-5 opacity-[0.90] group-hover:text-green-500" />
            </div>
          </div>
          <div className="flex items-center justify-center group">
            <div className="icon-hover-bg group-hover:bg-pink-600/10">
              <IoIosHeartEmpty className="w-5 h-5 group-hover:text-pink-600"/>
            </div>
          </div>
          <div className="flex items-center justify-center group">
            <div className="icon-hover-bg group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <FiShare className="w-[18px] h-[18px] opacity-[0.80] group-hover:text-[#1d9bf0]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
