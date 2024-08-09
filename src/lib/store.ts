import { PostWithUserData, User, CommentWithUserData } from "./types";
import { log } from "./logger";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  posts: PostWithUserData[];
  user: User | null;
  comments: CommentWithUserData[];
  selectedPostId: string | null;
  // Add more state variables
};

type Action = {
  setPosts: (posts: PostWithUserData[]) => void;
  removePost: (id: string) => void;
  addPost: (post: PostWithUserData) => void;
  setUser: (user: User) => void;
  clearUser: () => void;
  setComments: (comments: CommentWithUserData[]) => void;
  addComment: (comment: CommentWithUserData) => void;
  clearComments: () => void;
  setSelectedPostId: (id: string) => void;
  clearSelectedPostId: () => void;
  // Add more actions
};

// define the initial state
const initialState: State = {
  posts: [],
  user: null,
  comments: [],
  selectedPostId: null,
};

export const useStore = create<State & Action>()(
  immer((set, get) => ({
    ...initialState,

    setPosts: (posts) => set({ posts }),

    removePost: (id) => {
      log.debug("Store's delete post is called with id =", id);
      log.debug("# posts before delete", get().posts.length);
      const newPosts = get().posts.filter((post) => post.id !== id);
      log.debug("# posts after delete", newPosts.length);
      set({ posts: newPosts });
    },

    addPost: (post) => {
      set({ posts: [post, ...get().posts] });
    },    


    setUser: (user) => set({ user }),

    clearUser: () => set({ user: null }),


    setComments: (comments) => set({ comments }),

    addComment: (comment) => {
      set({ 
        comments: [comment, ...get().comments],
        posts: get().posts.map((post) => {
          if (post.id === comment.postId) {
            return {
              ...post,
              commentCount: post.commentCount + 1,
            };
          }
          return post;
        }),
      });
    },
    
    clearComments: () => set({ comments: [] }),
    
    setSelectedPostId: (id) => set({ selectedPostId: id }),

    clearSelectedPostId: () => set({ selectedPostId: null }),
    
  }))
);
