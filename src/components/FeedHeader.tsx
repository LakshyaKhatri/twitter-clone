import { HiOutlineSparkles } from 'react-icons/hi'

function FeedHeader() {
  return (
    <div className="text-[#d9d9d9] flex items-center justify-between pl-4 pr-1 sticky top-0 z-50 bg-black pt-1">
      <h2 className="text-lg sm:text-xl font-bold">Home</h2>
      <div className="hover-animation w-15 h-9 flex items-center justify-center xl:px-0">
        <HiOutlineSparkles className="h-5 w-[3.2rem] text-white" />
      </div>
    </div>
  )
}

export default FeedHeader
