import { PodcastDetailProps } from './types'
import './style.scss'
import { Outlet } from 'react-router-dom'

export const PodcastDetailView = ({
  author,
  summary,
  image,
  title,
}: PodcastDetailProps) => {
  return (
    <div className="app-podcast-detail-container">
      <div className="app-podcast-detail-sidebar">
        <div className="app-podcast-detail-sidebar-image">
          <img src={image} alt={title} />
        </div>
        <div className="app-podcast-detail-sidebar-author">
          <h4>{`${title}`}</h4>
          <p>{`by ${author}`}</p>
        </div>
        <div className="app-podcast-detail-sidebar-description">
          <h5>{'Description:'}</h5>
          <p>{summary}</p>
        </div>
      </div>
      <div className="app-podcast-detail-content">
        <Outlet />
      </div>
    </div>
  )
}
