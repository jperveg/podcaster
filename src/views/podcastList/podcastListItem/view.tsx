import { PodcastListItemViewProps } from './types'
import './style.scss'

export const PodcastListItemView = ({
  handleClickPodcast,
  author,
  image,
  title,
  id,
}: PodcastListItemViewProps) => {
  return (
    <div
      className="app-podcast-list-podcast-list-item"
      data-testid="podcast-list-item"
      onClick={() => handleClickPodcast(id)}
    >
      <img src={image} alt={title} />
      <div className="app-podcast-list-podcast-list-item-text">
        <h3>{title}</h3>
        <p>{`Author: ${author}`}</p>
      </div>
    </div>
  )
}
