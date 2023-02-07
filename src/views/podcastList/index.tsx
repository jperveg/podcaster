import { usePodcastList } from '../../hooks'
import { PodcastListView } from './view'

export const PodcastList = () => {
  const {
    filteredPodcasts,
    isFiltered,
    podcasts,
    isLoading,
    handleChangeSearchInput,
    handleClickPodcast,
    filterText,
  } = usePodcastList()
  return (
    <PodcastListView
      filteredPodcasts={filteredPodcasts}
      podcasts={podcasts}
      isFiltered={isFiltered}
      isLoading={isLoading}
      handleChangeSearchInput={handleChangeSearchInput}
      handleClickPodcast={handleClickPodcast}
      filterText={filterText}
    />
  )
}
