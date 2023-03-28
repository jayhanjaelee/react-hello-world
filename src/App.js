import "./App.css";
import React, {useState} from "react";

function App() {
  let [postTitle, setPostTitle] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);

  let [like, setLike] = useState(Array.from({length: postTitle.length}).fill(0));
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">블로그임</div>
      <div className="list">
        <button
          style={{marginRight: "10px"}}
          onClick={() => {
            let copy = [...postTitle];
            copy.sort();
            setPostTitle(copy);
          }}>
          글 정렬
        </button>
        <button
          style={{marginTop: "10px"}}
          onClick={() => {
            let copy = [...postTitle];
            copy[0] = "여자코트 추천";
            setPostTitle(copy);
          }}>
          글수정
        </button>
      </div>
      {postTitle.map((title, index) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
              }}>
              {title}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[index] = copy[index] + 1;
                  setLike(copy[index] + 1);
                }}>
                따봉 {like[index]}
              </span>
            </h4>
          </div>
        );
      })}
      {/* <Modal /> */}
      {modal ? <MyModal /> : null}
    </div>
  );
}

const MyModal = () => {
  return (
    <div className="modal">
      <h4>my tag block test title</h4>
      <p>my tag block test body</p>
    </div>
  );
};

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
