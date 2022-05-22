import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PostAuthor from "./postAuthor";
import { selectAllPosts,getPostsError,getPostsStatus,fetchPosts } from "./postsSlice";
import ReactionButtons from "./ReactionButton";
import TimeAgo from "./users/TimeAgo";

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
  if (postsStatus === 'idle') {
    dispatch(fetchPosts())
  }
}, [postsStatus, dispatch])

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 200)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
              <TimeAgo timeStamp={post.date} />
              <ReactionButtons post={post}/>
      </p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
