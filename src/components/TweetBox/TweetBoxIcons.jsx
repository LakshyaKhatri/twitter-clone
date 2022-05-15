import MediaButton from './MediaButton'
import AnalyticsButton from './AnalyticsButton'
import EmojiButton from './EmojiButton'
import ScheduleButton from './ScheduleButton'


function TweetBoxIcons() {
  return (
    <div className="flex items-center">
      <MediaButton />
      <AnalyticsButton />
      <EmojiButton />
      <ScheduleButton />
    </div>
  )
}

export default TweetBoxIcons
