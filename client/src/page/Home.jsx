import React from 'react'
import { GetAll } from '../components/GetAll'
import { Nav } from '../components/Nav'

export const Home = () => {
  return (
    <div>
      <Nav/>
      <GetAll/>
    </div>
  )
}
