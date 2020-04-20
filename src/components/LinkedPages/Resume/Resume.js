import React from 'react'
import classes from './Resume.css'
const resume=()=>(
    <div>
        
        <div className={classes.Resume}>
          <div>Technologies</div>
            <div>
               <h4>DAY-TO-DAY COMFORT</h4>
               <ul>
                  <li>Java /Android</li> 
                  <li>Javascript</li>
                  <li>Css</li>
                  <li>html</li>
                  <li>Sql</li>
                  <li>Json</li>
                  <li>Firebase</li>
                  <li>Git</li>
                 
               </ul>
            </div>
            <div>
            <h5>EXPERIENCE WITH</h5>
               <ul>
              
                  <li>Ajax</li> 
                  <li>Rest</li>
                  <li>Node.js</li>
                  <li>React.js</li>
                  <li>Php (limited)</li>
                 
               </ul>
            </div>
            <div>Education</div>
            <div>
                <h5>IT engineering</h5>
                <p>Centria University Of Applied Sciences,2016-2020</p>
                <h5>HighSchool</h5>
                <p>Kapsabet HighSchool ,2010-2013</p>
            </div>
        </div>
    </div>
)
export default resume;