import React from 'react'
import { useParams } from 'react-router-dom'

function Article() {
  const { id } = useParams()

  const { articles } = JSON.parse(localStorage.getItem('articles'))
  const data = articles.filter(item => id === item.id)

  return (
    <div>
      {data.map(({title, dateCreated, content, id}) => {
        const date = new Date(dateCreated)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

        return (
        <React.Fragment key={id}>
          <h1>{title}</h1>
          <span>{date.toLocaleDateString(undefined, options)}</span>
          <p>{content}</p>
        </React.Fragment>
        )
      })}
    </div>
  )
}

export default Article