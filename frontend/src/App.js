import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";

const ContainerBox = styled.div`
  display: grid;
  width: 900px;
  border: 1px solid blue;
  text-align: center;
  margin: 10px auto;
`;

class App extends Component {
  state = {
    posts: [],
  };

  getPosts = async () => {
    let response = await fetch("http://localhost:8080/post");
    console.log(response);
    let result = await response.json();
    console.log(result);
    this.setState({
      posts: result,
    });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <ContainerBox>
        {posts.map((post) => (
          <Post id={post.id} title={post.title} content={post.content} />
        ))}
      </ContainerBox>
    );
  }
}

export default App;
