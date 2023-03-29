import "./App.css";
import React, { useState } from "react";

function App() {
  let [postTitle, setPostTitle] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);

  let [like, setLike] = useState(Array.from({ length: postTitle.length }).fill(0));
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);
  let [userInput, setUserInput] = useState("");

  function changeTitle() {
    let copy = [...postTitle];
    copy[0] = "여자코트 추천";
    setPostTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">블로그임</div>{" "}
      <div className="list">
        <button
          style={{ marginRight: "10px" }}
          onClick={() => {
            let copy = [...postTitle];
            copy.sort();
            setPostTitle(copy);
          }}>
          글 정렬
        </button>
        <button style={{ marginTop: "10px" }}>글수정</button>
      </div>
      {postTitle.map((title, index) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
                setTitleIndex(index);
              }}>
              {title}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[index] = copy[index] + 1;
                  setLike(copy[index] + 1);
                }}>
                따봉 {like[index]}
              </span>
            </h4>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(index, 1);
                setPostTitle(copy);
              }}>
              글 삭제
            </button>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          let copy = [...postTitle];
          copy.unshift(userInput);
          setPostTitle(copy);
        }}>
        글 생성
      </button>
      {/* <Modal /> */}
      {modal ? <Modal postTitle={postTitle} titleIndex={titleIndex} color="skyblue" /> : null}
      <Modal2 title="hello, world" />
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postTitle[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 제목 변경</button>
    </div>
  );
};

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        Hello, World I'm Modal2
        <p>{this.props.title}</p>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}>
          버튼
        </button>
      </div>
    );
  }
}

// class MyModal extends React.Component {
//   render(props) {
//     return (
//       <div className="modal">
//         <h4>my tag block test title</h4>
//         <p>my tag block test body</p>
//       </div>
//     );
//   }
// }
// class Modal extends React.Component {
//   render() {
//     return (
//       <div className="modal">
//         <h4>Modal</h4>
//         <p>날짜</p>
//         <p>상세 내용 클래스 테스트</p>
//       </div>
//     );
//   }
// }

export default App;
