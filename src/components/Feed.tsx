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
        loader={<h4 className="text-white">Loading...</h4>}
        endMessage={
          <p className="py-2 text-center text-[#d9d9d9] bg-[#090909]">
            Damn it! I should have added more posts 🤦
          </p>
        }
      >{posts.map((post) => (
        <Post postData={post.data()} key={post.id} />
      ))}</InfiniteScroll>
    </div>
  )
}

export default Feed
