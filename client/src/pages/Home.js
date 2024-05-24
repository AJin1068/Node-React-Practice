import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [postList, setPostList] = useState([]);

  /** useEffect : 컴포넌트가 렌더링될때마다 실행되는 함수
   *
   * 두번째 인자 배열은 검사하고자 하는 특정 값
   * 컴포넌트 처음 렌더링 : mount
   * 컴포넌트의 props, state가 바뀔때 : update
   * 컴포넌트 사라질때 or update되기 전 : unmount
   *
   */
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div>
      {postList.map((value, key) => {
        return (
          <div className="post">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.userName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
