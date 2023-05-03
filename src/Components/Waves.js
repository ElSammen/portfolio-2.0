import React from 'react'
import Wave from 'react-wavify'

const Waves = () => (
  <Wave fill='#06265e'
        paused={false}
        options={{
          height: 1,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
           
  />
)


export default Waves