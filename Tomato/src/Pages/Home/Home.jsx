import React, { useState } from 'react'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import FoodDisplay from '../../Components/FoodDisplay'

export default function Home() {
   
  return (
    <div>
        <Header/>
        <Menu/>
        <FoodDisplay/>
    </div>
  )
}
