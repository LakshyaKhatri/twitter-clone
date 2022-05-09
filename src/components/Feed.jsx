import FeedHeader from '@/components/FeedHeader'
import TweetBox from '@/components/TweetBox'
import Post from '@/components/Post'
import fetchPosts from '@/lib/firebase/fetchPosts'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

function Feed() {
  const [posts, setPosts] = useState([])
  const [hasMorePosts, setHasMorePosts] = useState(true)

  const morePostsPlease = async () => {
    const newPosts = await fetchPosts({ pageSize: 10, lastRecord: posts.at(-1) && posts.at(-1).data() })
    setHasMorePosts(!(newPosts.length === 0))
    hasMorePosts && setPosts(posts.concat(newPosts))
  }

  useEffect(morePostsPlease, []);

  return (
    <div className="flex-grow border-l border-r border-gray-700 max-w-[38rem] sm:ml-[73px] xl:ml-[330px]">

      <FeedHeader />

      <TweetBox />

      <InfiniteScroll
        dataLength={posts.length}
        next={morePostsPlease}
        hasMore={hasMorePosts}
        loader={(
          <div className="flex align-middle justify-center my-3">
            <div className="w-8 h-8 border-[#1d9bf0] border-opacity-10 border-4 border-t-[#1d9bf0]/100 rounded-full animate-spin">
            </div>
          </div>)}
        endMessage={
          <p className="py-3 text-center text-[#1d9bf0] text-sm">
            Damn it! I should have added more posts 🤦
          </p>
        }
      >{posts.map((post) => (
        <Post postData={post.data()} postId={post.id} key={post.id} />
      ))}</InfiniteScroll>
    </div>
  )
}

export default Feed
