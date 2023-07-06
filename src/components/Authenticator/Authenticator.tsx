import { SpecialRoutePaths } from '@src/router/config'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Authenticator = (): JSX.Element => {
  const navigate = useNavigate()
  const { userInfo } = useSelector((state: any) => state)

  useEffect(() => {
    if (!userInfo.email) {
      navigate(SpecialRoutePaths.authentication)
    }
  }, [userInfo])

  return <></>
}

export default Authenticator
