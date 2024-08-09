import CommentHeader from "./comment-header";
import type { CommentWithUserData } from "@/lib/types";

const Comment = ({ comment }: { comment: CommentWithUserData }) => {
  const { content, user, timestamp } = comment;

  const displayName = user?.displayName ?? "Unknown";
  const username = user?.username ?? "Unknown";

  return (
    <div className="flex border-b border-slate-400">
      <div className="w-full p-4">
        <CommentHeader
          name={displayName}
          username={username}
          timestamp={timestamp}
        />
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default Comment;
