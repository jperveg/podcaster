import { BeatLoader } from 'react-spinners'
import { LoadingProps } from './types'

export const Loading = ({ color = '#007aca' }: LoadingProps) => {
  return <BeatLoader color={color} />
}
