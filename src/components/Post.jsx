{/* TODO: change to respective user's data */}
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { BsChat } from 'react-icons/bs'
import { AiOutlineRetweet } from 'react-icons/ai'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { FiShare } from 'react-icons/fi'
import Image from 'next/image'
import { db } from "@/firebase"
import { doc, onSnapshot } from "firebase/firestore"
import { updateLikesFor, isLikedByUser } from '@/lib/firebase/likes'


function Post({ postId, postData }) {
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const likeUnlikeTweet = (e) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
    updateLikesFor(postId, session.user.uid)
  }

  useEffect(() => {
    onSnapshot(doc(db, 'likes', postId), (snapshot) => {
      setLikeCount(snapshot.exists() ? snapshot.data().count : 0)
    })
  }, [db, postId])

  useEffect(() => {
    isLikedByUser(postId, session.user.uid).then((result) => {
      setIsLiked(result)
    })
  }, [])

  return (
    <article className="hover:bg-[#080808] pt-3 pr-3 pb-1 pl-4 flex space-x-3 cursor-pointer border-b border-gray-700">
      <img src={session.user.image}
           alt="profile picture"
           className="h-12 w-12 rounded-full cursor-pointer"/>

      <div className="w-full">
        <div className="text-[#6e767d] flex h-[22px] mb-2">
          <div className="inline-block group">
            <h4 className="font-semibold text-[15px] text-[#d9d9d9] group-hover:underline inline-block">
              {session.user.name}
            </h4>
            <span className="text-[15px] ml-1.5">@{session.user.username}</span>
          </div>
          <div className="icon-hover-bg group ml-auto flex">
            <HiDotsHorizontal className="w-[1.15rem] h-[1.15rem] text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <p className="text-[#d9d9d9] text-[15px] mb-2">{postData.text}</p>

        {postData.image_url && (
          <Image
            src={postData.image_url}
            alt=""
            width={502}
            height={313}
            className="rounded-2xl max-h-80 w-[98%] object-cover"
          />
        )}

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
            <div className="icon-hover-bg group-hover:bg-pink-600/10" onClick={likeUnlikeTweet}>
              {
                isLiked ?
                <IoIosHeart className="w-5 h-5 text-[#f91880]"/> :
                <IoIosHeartEmpty className="w-5 h-5 group-hover:text-[#f91880]"/>
              }
            </div>
            {
              (likeCount > 0) &&
              <div className={`group-hover:text-pink-600 text-[13px] mt-[1px] select-none ${isLiked && "text-[#f91880]"}`}>{likeCount}</div>
            }
          </div>
          <div className="flex items-center justify-center group">
            <div className="icon-hover-bg group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <FiShare className="w-[18px] h-[18px] opacity-[0.80] group-hover:text-[#1d9bf0]"/>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
