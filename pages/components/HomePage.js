import React from 'react'
import Episode from '../home/Episode'
import Landing from '../home/Landing'
import Purchase from '../home/Purchase'
import Titan from '../home/Titan'

function HomePage() {
  return (
    <div>
        <Landing />
        <Titan />
        <Episode />
        <Purchase />
    </div>
  )
}

export default HomePage