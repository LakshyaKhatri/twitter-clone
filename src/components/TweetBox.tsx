import { useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import TweetBoxIcons from '@/components/TweetBoxIcons'
import uploadTweet from '@/lib/firebase/uploadTweet'
import { useSession } from 'next-auth/react'

function TweetBox() {
  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  const addEmoji = (e) => {
    let sym = e.unified.split("-")
    let codesArray = []
    sym.forEach((el) => codesArray.push("0x" + el))
    let emoji = String.fromCodePoint(...codesArray)
    setInput(input + emoji)
  }

  const sendPost = (e) => {
    if (loading) return
    setLoading(true)
    uploadTweet(input, selectedFile).then(() => {
      setLoading(false)
      setInput("")
      setSelectedFile(null)
    })
  }

  return (
    <div className={`border-b border-gray-700 px-4 py-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${loading && 'opacity-60'}`}>

      <img src={session.user.image}
           alt=""
           className="h-12 w-12 rounded-full cursor-pointer"/>

      <div className="w-full">
        <div>
          {/* TODO: set a min height and grow when text spans to next line, then set a max-height.
            You might need a contenteditable instead :( */}
          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rows="2"
            placeholder="What's happening?"
            className="resize-none mt-2 bg-transparent outline-none text-[#d9d9d9] text-lg w-full placeholder-gray-500 tracking-wide min-h-[50px]"
          />
        </div>

        {selectedFile && (
          <div className="relative mb-3">
            <div
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              onClick={() => setSelectedFile(null)}
            >
              <HiOutlineX className="text-white h-5 w-5" />
            </div>
            <img
              src={selectedFile}
              alt=""
              className="rounded-2xl max-h-80 w-full object-cover"
            />
          </div>
        )}

        {!loading && (<div className="flex items-center justify-between pt-2.5 border-t border-gray-700">
            <TweetBoxIcons onImageSelect={addImageToPost} onEmojiClick={addEmoji} />
            <button
              className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
              disabled={!input.trim()}
              onClick={sendPost}
            >Tweet</button>
          </div>)}
      </div>
    </div>
  )
}

export default TweetBox
