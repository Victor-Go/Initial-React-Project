import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import CustomizedRoute from './router/CustomizedRoute'
import * as pkg from '../package.json'
import styles from './App.scss'

const App = (): JSX.Element => {
  console.log(`Version: ${pkg.version}`)
  return (
    <BrowserRouter>
      <CustomizedRoute />
    </BrowserRouter>
  )
}

export default App
