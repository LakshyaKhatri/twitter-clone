import FeedHeader from '@/components/FeedHeader'
import TweetBox from '@/components/TweetBox'
import Post from '@/components/Post'

function Feed() {
  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-[38rem] sm:ml-[73px] xl:ml-[330px]">

      <FeedHeader />

      <TweetBox />

      <Post />
    </div>
  )
}

export default Feed
