export const PostCard = (props) => {
  const { post } = props;
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="postcontent">
        <h3>Post {post.id}</h3>
        <h1> title: {post.title}</h1>
        <p>body :{post.body}</p>
      </div>
    </div>
  );
};
