import React from "react";
import styled from "styled-components";

const PostBox = styled.div`
  border: 1px solid red;
  text-align: center;
  height: 80px;
  margin: 10px;
`;

const Post = (props) => {
  const { id, title, content } = props;

  return (
    <PostBox>
      <div>번호 : {id}</div>
      <div>제목 : {title}</div>
      <div>내용 : {content}</div>
    </PostBox>
  );
};

export default Post;
