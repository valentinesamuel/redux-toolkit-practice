import PostAuthor from "./postAuthor";
import ReactionButtons from "./ReactionButton";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

const PostsExcerpt = ({post}) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  );
}

export default PostsExcerpt