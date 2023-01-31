import './App.scss'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'
import { Route, Routes } from 'react-router-dom'
import { Loading } from './components'
import { PodcastList } from './views'

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="app">
        <header className="app-header">
          <p>{'Podcaster'}</p>
          <Loading />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        {/* <Route path="/podcast/:podcastId" element={<AddSubmission />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<ListSubmission />}
        /> */}
      </Routes>
    </ReduxProvider>
  )
}

export default App
