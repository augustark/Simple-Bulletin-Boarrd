import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Edit() {
  const location = useLocation()
  const navigate = useNavigate()

  const [article, setArticle] = useState({
    ...location.state,
    dateModified: new Date()
  })


  const handleChange = (e) => {
    const target = e.currentTarget

    setArticle((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { articles } = JSON.parse(localStorage.getItem('articles'))

    const updatedArticle = articles.filter(item => item.id !== article.id)

    localStorage.setItem('articles', JSON.stringify({ 
      articles: [...updatedArticle, article]
    }))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title</label>
      <input 
        name='title' 
        onChange={handleChange} 
        id='title'
        value={article.title}
        required
      />
      <label htmlFor='content'>Content</label>
      <textarea 
        name='content' 
        onChange={handleChange} 
        id='content'
        value={article.content}
        required
      ></textarea>
      <button type='submit'>POST</button>
    </form>
  )
}

export default Edit