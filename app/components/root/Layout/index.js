import React from 'react'

import Layout from './Layout'
import Navbar from 'components/common/Navbar'

const ConnectedLayout = ({route, ...props}) => {
  return (
    <React.Fragment>
      <Navbar />
      <Layout route={route} {...props} />
    </React.Fragment>
  )
}

export default ConnectedLayout
