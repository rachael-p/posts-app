import Aside from "@/components/aside";
import Comments from "@/components/comment/comments";
import Post from "@/components/post/post";
import Sidebar from "@/components/sidebar";
import useQueryPosts from "@/hooks/use-query-posts";
import { useStore } from "@/lib/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostView = () => {
  const { postId } = useParams();       // allows you to access dynamic parameteres from URL in React components
  // useParams hook can only be used within a component rendered by a RouterProvider component (won't work outside of router context)
  const { post, loadPost } = useQueryPosts();
  const selectedPostId = useStore((state) => state.selectedPostId);

  useEffect(() => {
    if (postId) {
      loadPost(postId);
    }
  }, [postId]);

  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen border-x-2 border-slate-400 md:max-w-xl">
        {post && <Post post={post} />}
        {post && selectedPostId && <Comments />}
      </div>
      <Aside />
    </>
  );
};

export default PostView;
