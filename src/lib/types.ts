export type User = {
    id: number;
    username: string;
    displayName: string;
    avatar?: string;
  };
  
  export type Post = {
    id: string;
    userId: number;
    content: string;
    timestamp: string;
    image?: string;
    likeCount: number;
    commentCount: number;
  };
  
  export type Like = {
    id: string;
    postId: string;
    userId: string;
  };
  
  export type Comment = {
    id: string;
    postId: string;
    userId: string;
    content: string;
    timestamp: string;
  };
  
  export type PostWithUserData = Post & { user?: User };

  export type CommentWithUserData = Comment & { user?: User };

