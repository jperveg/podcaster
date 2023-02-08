import { cleanup, render } from '@testing-library/react'
import { EpisodeProps } from '../redux-modules'
import { EpisodeView } from '../views/podcastDetail/episode/view'
import { episodesMockup } from './common'

describe('EpisodesListView', () => {
  afterEach(cleanup)
  const renderComponent = ({
    title = '',
    description,
    player,
  }: EpisodeProps) => {
    const wrapper = render(
      <EpisodeView
        title={title}
        description={description}
        player={player}
        id={''}
        pubDate={''}
        duration={0}
        link={''}
      />
    )

    return wrapper
  }
  test('render Episode data', async () => {
    const { title, description, player, id, link, duration, pubDate } =
      episodesMockup[0]
    const wrapper = renderComponent({
      title,
      description,
      player,
      id,
      pubDate,
      duration,
      link,
    })
    const episodeContainerEl = wrapper.getByTestId(/podcast-episode-container/i)
    expect(episodeContainerEl).toBeInTheDocument()
    expect(episodeContainerEl).toHaveClass('app-podcast-episode-container')
    expect(episodeContainerEl).toHaveTextContent(title)
    const sourcePlayerEl = episodeContainerEl.querySelector('audio source')
    expect(sourcePlayerEl).toBeInTheDocument()
    expect(sourcePlayerEl).toHaveAttribute('src', player)
  })
})
