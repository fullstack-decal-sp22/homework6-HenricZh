import React, { useEffect, useState } from 'react';
import ComponentPost from './ComponentPost';
import Component from './Component';

const Post = ({ title, body, postId, comments }) => {

  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <ComponentPost comments={comments} />
    <Component postId={postId} />
  </div>
}

export default Post;
