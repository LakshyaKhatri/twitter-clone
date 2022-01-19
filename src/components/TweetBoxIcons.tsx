import { PhotographIcon } from '@heroicons/react/outline'
import { useRef } from 'react'

function TweetBoxIcons() {
  const filePickerRef = useRef(null);

  return (
    <div className="flex items-center" onClick={() => filePickerRef.current.click()}>
      <div className="tweet-box-icon">
        <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
        <input type="file" hidden ref={filePickerRef}/>
      </div>
    </div>
  )
}

export default TweetBoxIcons
