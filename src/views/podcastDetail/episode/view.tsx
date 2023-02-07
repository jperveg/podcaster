import { EpisodeProps } from '../../../redux-modules'
import './style.scss'

export const EpisodeView = ({ title, description, player }: EpisodeProps) => {
  return (
    <div
      className="app-podcast-episode-container"
      data-testid="podcast-episode-container"
    >
      <h3>{title}</h3>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="app-podcast-episode-container-description"
      />
      <audio controls>
        <source src={player as string} type="audio/mpeg" />
      </audio>
    </div>
  )
}
