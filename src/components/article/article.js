import React from 'react'
import './article.css'
const Article = ({iamgeUrl,date,text}) => {
  return (
    <div className="gpt3__article ">
      <div className="gpt3__article-image">
        <img src={iamgeUrl} alt="blog" />
      </div>
      <div className="gpt3__article-content">
      <div>
      <p>{date}</p>
      <h3>{text}</h3>
      </div>
          <p>Read Full Article</p>
      </div>
    
    </div>
  )
}

export default Article