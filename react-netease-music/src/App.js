import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from '@/router'
import store from '@/store'

import NWAppHeader from '@/components/app-header'
import NWAppFooter from '@/components/app-footer'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NWAppHeader />
        {renderRoutes(routes)}
        <NWAppFooter />
      </HashRouter>
    </Provider>
  )
})
