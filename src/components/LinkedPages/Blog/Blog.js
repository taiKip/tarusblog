import React,{useEffect, useState } from "react";
import BlogPost from './BlogPost/BlogPost'
import classes from './Blog.css'
import axios from 'axios'
import Spinner from "../../../UI/Spinner/Spinner";
import Modal from "../../../UI/Modal/Modal";

const DAYSOFTHEWEEK=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function Blog() {
const[posts,setPosts]=useState([])
const [showModal,setModal]=useState(false)
    useEffect(()=>{
        axios.get('https://personalblog-39684.firebaseio.com/WeekLyWorkout.json')
        .then(response=>{
            setPosts(response.data)
          
        }).catch(err=>{
            console.log(err);
            
        })
    },[])
const sortDays=(a,b)=>{
    a=DAYSOFTHEWEEK.indexOf(a);
    b=DAYSOFTHEWEEK.indexOf(b);
    return a>b ? 1:-1
}
    let blogPosts= <Spinner/>
    
    if(posts){
       const days=Object.keys(posts).sort(sortDays)
       console.log(days[0])
      blogPosts= days.map((day,i)=>{
        
          return <BlogPost
           key={day +i} 
 
           index={i} day={day}/>
      })
    }
    
    return (
        <section className={classes.Blog}>
          
            <h2 style={{color:"#D9AA8F",
            fontFamily:'inherit'}}>WeekLy Workout Routine</h2>
            
{blogPosts}
        </section>
    )
}

export default Blog

