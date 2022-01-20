import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon
} from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function TweetBoxIcons({ onEmojiClick }) {
  const filePickerRef = useRef(null)
  const [showEmojis, setShowEmojis] = useState(false)

  return (
    <div className="flex items-center">
      <div className="tweet-box-icon" onClick={() => filePickerRef.current.click()}>
        <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
        <input type="file" hidden ref={filePickerRef}/>
      </div>

      <div className="tweet-box-icon rotate-90">
        <ChartBarIcon className="text-[#1d9bf0] h-[20.5px]" />
      </div>

      <div className="tweet-box-icon" onClick={() => setShowEmojis(!showEmojis)}>
        <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
      </div>

      <div className="tweet-box-icon">
        <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
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
          emojiSize="20px"
          set="twitter"
        />
      )}
    </div>
  )
}

export default TweetBoxIcons
