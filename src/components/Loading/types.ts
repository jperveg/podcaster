export enum LoadingTypes {
  BEAT = 'beat',
  BOUNCE = 'bounce',
}
export interface LoadingProps {
  color?: string
  type?: LoadingTypes
  size?: number
}
