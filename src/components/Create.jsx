import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function Create() {
  const [article, setArticle] = useState({
    title: '',
    content: '',
    id: nanoid(),
    dateCreated: new Date()
  })

  const navigate = useNavigate()

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

    localStorage.setItem('articles', JSON.stringify({ 
      articles: [...articles, article]
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
        required
      />
      <label htmlFor='content'>Content</label>
      <textarea 
        name='content' 
        onChange={handleChange} 
        id='content'
        required
      ></textarea>
      <button type='submit'>POST</button>
    </form>
  )
}

export default Create