import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Users } from "../../dummyData";
import "./post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const user = Users.filter((u) => u.id === post.userId);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user[0].profilePic} alt="" className="postProfileImg" />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <AiOutlineMenu className="menuIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postDesc">{post.desc}</span>
          <img src={post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/like.png"
              alt=""
              className="likeIcon"
              onClick={handleLike}
            />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postComment">{post.comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
