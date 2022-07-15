import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

function Main() {
  const navigate = useNavigate()

  const getItem = localStorage.getItem('articles')
  const data = getItem ? JSON.parse(getItem) : null

  return (
    <div>
      <button onClick={() => navigate('create')}>Create New Article</button>

      <div className='articles'>
        {data && data.articles.map((item) => <Card key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default Main