import React from "react";
import Comment from "./Comment";


const comments = [
  {
      name: "임정민",
      comment: "우리 잘 지내봅시다.",
  },
  {
      name: "김민성",
      comment: "네. 만나서 반가워요.",
  },
  {
      name: "강태우",
      comment: "처음 뵙겠습니다.",
  },
  {
    name: "한은성",
    comment: "잘 부탁드립니다.",
  },

  {
      name: "유호빈",
      comment: "이제 우리 이야기해요.",
  },
];

function CommentList(props) {
  return (
      <div>
          {comments.map((comment) => {
              return (
                  <Comment name={comment.name} comment={comment.comment} />
              );
          })}
      </div>
  );
}

export default CommentList;
