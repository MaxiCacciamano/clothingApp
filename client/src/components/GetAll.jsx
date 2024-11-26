import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from './Card'

export const GetAll = () => {
    const dispatch = useDispatch()
    const {men} = useSelector(state=>state)
  return (
    <div>
       {
        men.map(e=>(
            <Card key={e.id} name={e.name} />
        ))
       }
    </div>
  )
}
