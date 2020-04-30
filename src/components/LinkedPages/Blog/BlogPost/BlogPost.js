import React from 'react'
import classes from './BlogPost.css'

const blogPost =(props)=>{
  let exactDay = new Date().getDay();

console.log(exactDay)
  let assignedClasses = [classes.BlogPost]
  if(exactDay===(props.index)){
assignedClasses.push(classes.LightGreen)
  }
  return(
    <article className={assignedClasses.join(' ')}>
    
      <h1>{props.day}
      </h1>
     
       <div>
     {props.title}
        </div>
    </article>
)
  }
export default blogPost;