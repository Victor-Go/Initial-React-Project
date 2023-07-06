import Authenticator from '@src/components/Authenticator/Authenticator'
import React from 'react'

const RootPage = (): JSX.Element => {
  return (
    <>
      <Authenticator />
      This is the root page of the project, check <b>src/pages/root-page/RootPage.tsx</b>
    </>
  )
}

export default RootPage
