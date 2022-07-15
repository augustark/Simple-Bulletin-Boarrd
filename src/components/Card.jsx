import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
  const navigate = useNavigate()
  const { title, content, id } = props

  const delBtn = () => {
    const data = JSON.parse(localStorage.getItem('articles'))
    
    const filteredData = data.articles.filter(item => item.id !== id)
    localStorage.setItem('articles', JSON.stringify({ 
      articles: filteredData 
    }))
  }

  const editBtn = () => {
    navigate('/edit', {
      replace: true,
      state: props
    })
  }

  return (
    <div className='article-card'>
      <h1 onClick={() => navigate(`/articles/${id}`)}>{title}</h1>
      <p>{content}</p>

      <button onClick={editBtn}>Edit</button>
      <button onClick={delBtn}>Delete</button>
    </div>
  )
}

export default Card