import FeedHeader from './FeedHeader'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-[38rem] sm:ml-[73px] xl:ml-[370px]">

      <FeedHeader />

      <TweetBox />
    </div>
  )
}

export default Feed