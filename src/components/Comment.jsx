import { comments } from "@/libs/comments";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
      <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            {likeNum > 0 && (
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span className="text-muted">{likeNum} คน</span>
            </div>)} 
            {comments.map((reply,i) => (
              <Reply 
                key = {i}
                userImagePath={reply.replies.userImagePath}
                username={reply.replies.username}
                replyText={reply.replies.replyText}
                likeNum={reply.replies.likeNum}
              />))
            }
          </div>
        </div>
  );
};
