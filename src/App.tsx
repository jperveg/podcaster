import './App.scss'
import { Provider as ReduxProvider } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { Loading } from './components'
import { GlobalLoading, PodcastDetail, PodcastList } from './views'
import { EpisodesList } from './views/podcastDetail/episodesList'
import { Episode } from './views/podcastDetail/episode'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'
import { GlobalLoadingProvider } from './contexts/globalLoading'

const { store, persistor } = configureStore()
function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className="app">
          <header className="app-header">
            <Link to="/">{'Podcaster'}</Link>
            <GlobalLoadingProvider>
              <GlobalLoading />
            </GlobalLoadingProvider>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<PodcastList />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail />}>
            <Route index element={<EpisodesList />} />
            <Route path="episode/:episodeId" element={<Episode />} />
          </Route>
        </Routes>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
