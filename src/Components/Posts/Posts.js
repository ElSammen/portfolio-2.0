import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import '../../App.scss';
import Postdata from './Postdata';
import Postcard from './Postcard';

function Posts() {
  const [currentPost, setCurrentPost] = useState(Postdata.post01);

  
  return (
    <Container>
      <div className="postsBody">
        <h1>Posts</h1>
        <Postcard post={currentPost} />
      </div>
    </Container>
  );
}

export default Posts;