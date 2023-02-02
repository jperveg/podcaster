import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  fetchPodcastsListRequest,
  getPodcastsIsLoadingSelector,
  getPodcastsSelector,
} from '../../redux-modules'

export const usePodcastList = () => {
  const dispatch = useDispatch()
  const isPodcadListLoading = useSelector(getPodcastsIsLoadingSelector)
  const podcasts = useSelector(getPodcastsSelector)
  const navigate = useNavigate()
  const [filterText, setFilterText] = useState<string | undefined>()

  const filteredPodcasts = useMemo(() => {
    if (filterText && filterText !== '' && podcasts) {
      return podcasts.filter((podcast) => {
        const { author, title } = podcast
        const searchInput = filterText.toLocaleLowerCase().trim()
        return (
          author.toLocaleLowerCase().includes(searchInput) ||
          title.toLocaleLowerCase().includes(searchInput)
        )
      })
    }
  }, [filterText, podcasts])

  useEffect(() => {
    if (!podcasts.length) {
      dispatch(fetchPodcastsListRequest())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcasts])

  const handleClickPodcast = (podcastId: string) => {
    navigate(`/podcast/${podcastId}`)
  }

  const handleChangeSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = e.target.value
      setFilterText(searchText)
    },
    []
  )

  return {
    podcasts,
    filteredPodcasts,
    isFiltered: Boolean(filterText),
    isLoading: isPodcadListLoading,
    handleClickPodcast,
    handleChangeSearchInput,
    filterText,
  }
}
