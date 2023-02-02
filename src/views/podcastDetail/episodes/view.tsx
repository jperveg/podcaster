import { EpisodeProps } from '../../../redux-modules'
import { EpisodeListViewProps } from './types'
import './style.scss'

export const EpisodesListView = ({
  episodes,
  handleClickEpisode,
}: EpisodeListViewProps) => {
  return (
    <div className="app-podcasts-episodes-container">
      <div className="app-podcasts-episodes-header">
        <h2>{`Episodes: ${episodes.length}`}</h2>
      </div>
      <div className="app-podcasts-episodes-list">
        <table>
          <thead>
            <tr>
              <th>{'Title'}</th>
              <th>{'Date'}</th>
              <th>{'Duraction'}</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode: EpisodeProps) => (
              <tr
                key={episode.id}
                onClick={() => handleClickEpisode(episode.id)}
              >
                <td className="app-podcasts-episodes-list-title">
                  {episode.title}
                </td>
                <td>{episode.pubDate}</td>
                <td className="app-podcasts-episodes-list-duration">
                  {episode.durationString}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
