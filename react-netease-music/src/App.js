import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from '@/router'


import NWAppHeader from '@/components/app-header'
import NWAppFooter from '@/components/app-footer'


export default memo(function App() {
  return (
    <HashRouter>
      <NWAppHeader />
      {renderRoutes(routes)}
      <NWAppFooter />
    </HashRouter>
  )
})
