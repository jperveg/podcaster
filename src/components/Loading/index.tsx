import { BeatLoader, BounceLoader } from 'react-spinners'
import { LoadingProps, LoadingTypes } from './types'

const components = {
  beat: BeatLoader,
  bounce: BounceLoader,
}

export const Loading = ({
  color = '#007aca',
  type = LoadingTypes.BEAT,
  size = 40,
}: LoadingProps) => {
  const Component = components[type]
  return <Component color={color} size={size} />
}
