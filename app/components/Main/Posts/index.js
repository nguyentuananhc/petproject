import React, { Component } from 'react';
import './Posts.css';
import Post from '../Post';
import dummyData from '../../../dummyData';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    };
  }
  render() {
    return (
      <div>
        <div className="Posts">
          {this.state.posts
            .slice(0)
            .reverse()
            .map((post, index) => (
              <Post
                nickname={post.username}
                avatar={post.thumbnailUrl}
                image={post.imageUrl}
                caption=""
                key={index}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Posts;
