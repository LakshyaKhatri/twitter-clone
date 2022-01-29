import { BsCalendarEvent } from 'react-icons/bs'
import { GrEmoji } from 'react-icons/gr'
import { BiPoll } from 'react-icons/bi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { useRef, useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function TweetBoxIcons({ onImageSelect, onEmojiClick }) {
  const filePickerRef = useRef(null)
  const [showEmojis, setShowEmojis] = useState(false)

  return (
    <div className="flex items-center">
      <div className="icon-hover-bg" onClick={() => filePickerRef.current.click()}>
        <HiOutlinePhotograph className="text-[#1d9bf0] h-[22px] w-[22px]" />
        <input type="file" hidden ref={filePickerRef} onChange={onImageSelect}/>
      </div>

      <div className="icon-hover-bg">
        <BiPoll className="text-[#1d9bf0] h-[23px] w-[23px]" />
      </div>

      <div className="icon-hover-bg" onClick={() => setShowEmojis(!showEmojis)}>
        <GrEmoji className="text-[#1d9bf0] h-5 w-5" />
      </div>

      <div className="icon-hover-bg">
        <BsCalendarEvent className="text-[#1d9bf0] h-4 w-4" />
      </div>

      {showEmojis && (
        <Picker
          onClick={onEmojiClick}
          style={{
            position: "absolute",
            marginTop: "465px",
            marginLeft: -40,
            borderRadius: "20px",
            maxWidth: "320px"
          }}
          theme="dark"
          emojiSize={20}
          set="twitter"
        />
      )}
    </div>
  )
}

export default TweetBoxIcons
