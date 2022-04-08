import React, {useState} from "react";

const ComponentPost = ({comments}) => {

    return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
        {
        comments?.map(c =>
          <p>{c}</p>
        )
      }
      
    </div>

    
  }
  
export default ComponentPost;