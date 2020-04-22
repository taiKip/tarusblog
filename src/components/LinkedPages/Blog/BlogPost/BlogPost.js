import React from 'react'
import classes from './BlogPost.css'

const blogPost =(props)=>(
    <article className={classes.BlogPost}>
    
      <img src={props.Link} alt="Blog" />
     
       <div>
          {props.title}
        </div>
    </article>
)

export default blogPost;