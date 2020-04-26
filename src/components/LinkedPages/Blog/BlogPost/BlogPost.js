import React from 'react'
import classes from './BlogPost.css'

const blogPost =(props)=>(
    <article className={classes.BlogPost}>
    
      <h1>{props.day}
      </h1>
     
       <div>
          {props.title}
        </div>
    </article>
)

export default blogPost;