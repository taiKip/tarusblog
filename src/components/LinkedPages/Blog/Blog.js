import React,{ Component } from "react";
import BlogPost from './BlogPost/BlogPost'
import classes from './Blog.css'
import axios from 'axios'
class Blog extends Component{
    state={
        blogPosts:''
    }
componentDidMount(){
    axios.get('https://personalblog-39684.firebaseio.com/WeekLyWorkout.json')
.then(response=>{
   
   this.setState=({blogPosts:response.data})

}).catch(error=>
    console.log(error))
}
render(){
    
  let posts =<p>Something went wrong</p>
   
  posts =  Object.keys(this.state.blogPosts).map(day=>{
      return <BlogPost day={day}/>
  })
   
  
 
    return(
        <section className={classes.Blog}>
{posts}
        </section>
    )
}
}

export default Blog;