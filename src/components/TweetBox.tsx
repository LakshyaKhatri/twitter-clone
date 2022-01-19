import { useState } from 'react';
import TweetBoxIcons from './TweetBoxIcons'

function TweetBox() {
  const [input, setInput] = useState();

  return (
    <div className={`border-b border-gray-700 px-4 py-3 flex space-x-5 overflow-y-scroll scrollbar-hide`}>

      <img src="https://pbs.twimg.com/profile_images/1308745418856042497/rcf4_gRQ_normal.jpg"
           alt=""
           className="h-12 w-12 rounded-full cursor-pointer"/>

      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rows="2"
            placeholder="What's happening?"
            className="mt-2 bg-transparent outline-none text-[#d9d9d9] text-lg w-full placeholder-gray-500 tracking-wide min-h-[50px]"
          />
        </div>

        {/* Image */}

        <TweetBoxIcons />
      </div>
    </div>
  )
}

export default TweetBox
