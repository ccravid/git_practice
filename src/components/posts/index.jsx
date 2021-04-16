import { PostCard } from "../postCard";

export const Post = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};
