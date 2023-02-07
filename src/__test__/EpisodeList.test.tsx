import { cleanup, fireEvent, render } from '@testing-library/react'
import { EpisodeListViewProps } from '../views/podcastDetail/episodesList/types'
import { EpisodesListView } from '../views/podcastDetail/episodesList/view'
import { episodesMockup } from './common'

describe('EpisodesListView', () => {
  afterEach(cleanup)
  const renderListComponent = ({
    episodes = [],
    handleClickEpisode,
  }: EpisodeListViewProps) => {
    const wrapper = render(
      <EpisodesListView
        episodes={episodes}
        handleClickEpisode={handleClickEpisode}
      />
    )

    return wrapper
  }
  test('render Episodes without data', async () => {
    const mockHandleClickEpisode = jest.fn()
    const wrapper = renderListComponent({
      episodes: [],
      handleClickEpisode: mockHandleClickEpisode,
    })
    const episodeListContainerEl = wrapper.getByTestId(
      /podcasts-list-episodes/i
    )
    expect(episodeListContainerEl).toBeInTheDocument()
    expect(episodeListContainerEl).toHaveClass('app-podcasts-episodes-list')
    const tbodyTrEl = episodeListContainerEl.querySelectorAll('tbody tr')
    expect(tbodyTrEl.length).toBe(0)
  })

  test('render PodcastListView with data', () => {
    const mockHandleClickEpisode = jest.fn()
    const wrapper = renderListComponent({
      episodes: episodesMockup,
      handleClickEpisode: mockHandleClickEpisode,
    })
    //test number of podcasts
    const episodeListContainerEl = wrapper.getByTestId(
      /podcasts-list-episodes/i
    )
    const headerEl = wrapper.getByRole('heading')
    expect(headerEl).toHaveTextContent(`Episodes: ${episodesMockup.length}`)

    expect(episodeListContainerEl).toBeInTheDocument()
    const tbodyTrEl = wrapper.getAllByTestId('podcasts-list-episode-tr')
    expect(tbodyTrEl.length).toBe(episodesMockup.length)
    fireEvent.click(tbodyTrEl[0])
    expect(mockHandleClickEpisode).toBeCalled()
    expect(mockHandleClickEpisode).toHaveBeenCalledWith(episodesMockup[0].id)
    expect(tbodyTrEl[0]).toHaveTextContent(episodesMockup[0].title)
    expect(tbodyTrEl[0]).toHaveTextContent(episodesMockup[0].durationString)
  })
})
