import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import useMutationPosts from "@/hooks/use-mutation-posts";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";


export const AddPostDialog = () => {
  const [content, setContent] = useState("");
  const { addNewPost } = useMutationPosts();
  const { toast } = useToast();

  const handleSave = async () => {
    if (!content) {
      toast({
        variant: "destructive",
        title: "Sorry! Content cannot be empty! 🙁",
        description: `Please enter the content for your post.`,
      });
      return;
    }
    await addNewPost(content);
    setContent("");
  };

  const handleCancel = () => {
    setContent("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label={"Make a Post"} variant="default" size="sm">
          <PlusCircledIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
          <DialogDescription>
            Provide the content of your post here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid content-center gap-4 py-4">
          <div className="grid content-center grid-cols-4 gap-4">
            <Textarea
              id="content"
              value={content}
              className="content-center col-span-3"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"secondary"} type="reset" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSave}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
