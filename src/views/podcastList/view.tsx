import { FormInput, Loading } from '../../components'
import { usePodcastList } from '../../hooks'
import { PodcastListItem } from './podcastListItem'
import './style.scss'
import { IPodcastList } from './types'

export const PodcastListView: IPodcastList = () => {
  const {
    filteredPodcasts,
    isFiltered,
    podcasts,
    isLoading,
    handleChangeSearchInput,
    handleClickPodcast,
    filterText,
  } = usePodcastList()

  const podcastList = isFiltered ? filteredPodcasts : podcasts

  if (isLoading) return <Loading />

  return (
    <div className="app-podcast-list-container">
      <div className="app-podcast-list-container-header">
        <div className="app-podcast-list-container-header-counter">
          {podcastList?.length ?? 0}
        </div>
        <div className="app-podcast-list-container-header-search-input">
          <FormInput
            name="searchInput"
            onChange={handleChangeSearchInput}
            value={filterText}
            placeholder="Filter podcasts..."
            autoFocus
          />
        </div>
      </div>
      <div className="app-podcast-list-container-body">
        {podcastList?.map((podcast) => (
          // <p key={podcast.id}>{podcast.author}</p>
          <PodcastListItem
            key={podcast.id}
            author={podcast.author}
            image={podcast.image}
            title={podcast.title}
            id={podcast.id}
            handleClickPodcast={handleClickPodcast}
          />
        ))}
      </div>
    </div>
  )
}