import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  getPodcastDetailIsLoadingSelector,
  getPodcastsIsLoadingSelector,
} from '../redux-modules'

interface IGlobalLoading {
  isLoading: boolean
}

interface Props {
  children: React.ReactNode
}

export const GlobalLoadingContext = createContext<IGlobalLoading>({
  isLoading: false,
})

export const GlobalLoadingProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<IGlobalLoading>({
    isLoading: false,
  })
  const isLoadingPodcastList = useSelector(getPodcastsIsLoadingSelector)
  const isLoadingPodcastDetail = useSelector(getPodcastDetailIsLoadingSelector)
  useEffect(() => {
    setIsLoading({ isLoading: isLoadingPodcastList || isLoadingPodcastDetail })
  }, [isLoadingPodcastDetail, isLoadingPodcastList])
  return (
    <GlobalLoadingContext.Provider value={isLoading}>
      {children}
    </GlobalLoadingContext.Provider>
  )
}
