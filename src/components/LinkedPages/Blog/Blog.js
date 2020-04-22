import React,{ Component } from "react";
import BlogPost from './BlogPost/BlogPost'
import classes from './Blog.css'
import axios from 'axios'
class Blog extends Component{
    state={
        blogPosts:[]
    }
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
.then(response=>{
    this.setState({blogPosts:response.data.slice(0,3)})
    console.log(response)
})
}
render(){
    let posts=<p>Something Went wrong</p>
    posts =[...this.state.blogPosts].map(post =>(
        <BlogPost Link={post.url}  title={post.title}/>
    ))
    return(
        <section className={classes.Blog}>
      
        </section>
    )
}
}

export default Blog;