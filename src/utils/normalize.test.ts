import { IPodcastFromITunes } from '../redux-modules'
import {
  episode,
  podcastLisFormattedResult,
  podcastListnotFormatted,
  rssString,
} from '../__test__/common'
import {
  convertDateToSeconds,
  convertRssStringToEpisodes,
  convertSecondsToTime,
  normalizePodcasts,
  removeCDATA,
} from './normalize'

const STRING_DESCRIPTION = `<p>God Must Have Spent a Little More Time On… Joey Fatone! That's a fact that has never been more apparent than right now! This episode almost seems too good to be true as Joey recalls his first impression of Lance, his honest opinion of his talents and what went down the first time Joey met JC and Justin.</p>
<p>Plus, wait until you hear the details of a prank Lance once played on Joey, that included a cop that wanted payback.</p>
<p>This episode is guaranteed 'tearin' up your heart' material.</p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>`

const STRING_WITH_CDATA = `<![CDATA[${STRING_DESCRIPTION}]]>`

test('make sure removeCDATA remove CDATA', () => {
  const resultWithoutCDATA = removeCDATA(STRING_WITH_CDATA)
  const resultSameAsArgument = removeCDATA(STRING_DESCRIPTION)
  expect(resultWithoutCDATA).toBe(STRING_DESCRIPTION)
  expect(resultSameAsArgument).toBe(STRING_DESCRIPTION)
})

test('make sure normilizePodcasts', () => {
  const podcasts = normalizePodcasts(
    podcastListnotFormatted as unknown as IPodcastFromITunes[]
  )
  expect(podcasts).toHaveLength(5)
  expect(JSON.stringify(podcasts[0])).toBe(
    JSON.stringify(podcastLisFormattedResult[0])
  )
})

test('make sure convertSecondsToTime', () => {
  const time = convertSecondsToTime(3030)
  expect(time).toBe('0:50:30')
})

test('make sure convertRssStringToEpisodes', () => {
  const episodes = convertRssStringToEpisodes(rssString)

  expect(episodes).toHaveLength(1)
  expect(episodes[0].id).toBe(episode.id)
  console.log(episodes[0])
  expect(episodes[0].link).toBe(episode.link)
})

test('make sure convertDateToSeconds', () => {
  const seconds = convertDateToSeconds('3043')
  expect(seconds).toBe(3043)
  const calculatedSeconds = convertDateToSeconds('04:20')
  expect(calculatedSeconds).toBe(260)
})
