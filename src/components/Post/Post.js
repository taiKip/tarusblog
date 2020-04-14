import React from 'react'

const post=(props)=>(
<article>
    <h2>{props.title}</h2>
    <div>
        <h3>{props.author}</h3>
    </div>
</article>
)
export default post;