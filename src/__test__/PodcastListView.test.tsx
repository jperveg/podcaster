import { cleanup, fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { usePodcastList } from '../hooks'
import { IPodcast } from '../redux-modules'
import { PodcastListView } from '../views/podcastList/view'
import { podcastsMockup } from './common'

describe('PodcastListView', () => {
  afterEach(cleanup)
  const renderListComponent = ({
    filteredPodcasts,
    isFiltered,
    podcasts,
    isLoading,
    handleChangeSearchInput,
    handleClickPodcast,
    filterText,
  }: ReturnType<typeof usePodcastList>) => {
    const wrapper = render(
      <PodcastListView
        filteredPodcasts={filteredPodcasts}
        isFiltered={isFiltered}
        podcasts={podcasts}
        isLoading={isLoading}
        handleChangeSearchInput={handleChangeSearchInput}
        handleClickPodcast={handleClickPodcast}
        filterText={filterText}
      />
    )

    return wrapper
  }
  test('render PodcastListView without data', async () => {
    const mockHandleClickPodcast = jest.fn()
    const wrapper = renderListComponent({
      filteredPodcasts: [],
      isFiltered: false,
      podcasts: [],
      isLoading: true,
      handleChangeSearchInput: jest.fn(),
      handleClickPodcast: mockHandleClickPodcast,
      filterText: '',
    })
    const inputEl = wrapper.getByPlaceholderText(/Filter podcasts.../i)
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toHaveClass('form-input')
    expect(inputEl).toHaveValue('')
    expect(inputEl).toHaveFocus()
    const loadingEl = await wrapper.getByTestId(/loading/i)
    expect(loadingEl).toBeInTheDocument()
  })

  test('render PodcastListView with data', () => {
    const mockHandleClickPodcast = jest.fn()
    const mockHandleChangeInput = jest.fn()
    const wrapper = renderListComponent({
      filteredPodcasts: [],
      isFiltered: false,
      podcasts: podcastsMockup,
      isLoading: false,
      handleChangeSearchInput: mockHandleChangeInput,
      handleClickPodcast: mockHandleClickPodcast,
      filterText: '',
    })
    const inputEl = wrapper.getByPlaceholderText(/Filter podcasts.../i)
    expect(inputEl).toBeInTheDocument()
    const loadingEl = wrapper.queryByText(/loading/i)
    expect(loadingEl).not.toBeInTheDocument()

    //test number of podcasts
    const podcastsEl = wrapper.getAllByTestId('podcast-list-item')
    expect(podcastsEl.length).toBe(podcastsMockup.length)
    expect(podcastsEl[0]).toHaveTextContent(podcastsMockup[0].title)
    expect(podcastsEl[0]).toHaveTextContent(podcastsMockup[0].author)
    expect(podcastsEl[1]).toHaveTextContent(podcastsMockup[1].title)
    fireEvent.click(podcastsEl[0])
    expect(mockHandleClickPodcast).toBeCalled()
    expect(mockHandleClickPodcast).toHaveBeenCalledWith(podcastsMockup[0].id)
    userEvent.type(inputEl, 'Hearthstone')
    expect(mockHandleChangeInput).toBeCalled()
  })

  test('render PodcastListView with filtered data', () => {
    const mockHandleClickPodcast = jest.fn()
    const mockHandleChangeInput = jest.fn()
    const filterText = 'Heart'
    const filteredPodcasts = podcastsMockup.filter(
      (podcasts) =>
        podcasts.title.toLowerCase().includes('heart') ||
        podcasts.author.toLowerCase().includes('heart')
    ) as IPodcast[]
    const wrapper = renderListComponent({
      filteredPodcasts,
      isFiltered: true,
      podcasts: podcastsMockup,
      isLoading: false,
      handleChangeSearchInput: mockHandleChangeInput,
      handleClickPodcast: mockHandleClickPodcast,
      filterText,
    })
    const inputEl = wrapper.getByPlaceholderText(/Filter podcasts.../i)
    expect(inputEl).toHaveValue(filterText)
    const loadingEl = wrapper.queryByText(/loading/i)
    expect(loadingEl).not.toBeInTheDocument()

    //test number of podcasts
    const podcastsEl = wrapper.getAllByTestId('podcast-list-item')
    expect(podcastsEl.length).toBe(filteredPodcasts.length)
    expect(podcastsEl[0]).toHaveTextContent(filteredPodcasts[0].title)
    expect(podcastsEl[0]).toHaveTextContent(filteredPodcasts[0].author)
    fireEvent.click(podcastsEl[0])
    expect(mockHandleClickPodcast).toBeCalled()
    expect(mockHandleClickPodcast).toHaveBeenCalledWith(filteredPodcasts[0].id)
  })
})
