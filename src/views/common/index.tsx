import { useContext } from 'react'
import { Loading } from '../../components'
import { LoadingTypes } from '../../components/Loading/types'
import { GlobalLoadingContext } from '../../contexts/globalLoading'

export const GlobalLoading = () => {
  const { isLoading } = useContext(GlobalLoadingContext)
  return isLoading ? (
    <div className="global-loading">
      <Loading type={LoadingTypes.BOUNCE} size={40} />
    </div>
  ) : null
}
