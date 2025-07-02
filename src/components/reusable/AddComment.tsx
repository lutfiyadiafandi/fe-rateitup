import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema, type CommentForm } from "@/utils/Schema";

const AddComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentForm) => {
    // TODO: handle API call here
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center w-full gap-2 mt-5"
    >
      <Textarea
        id="text"
        placeholder="Write a comment..."
        required
        {...register("text")}
      />
      {errors.text && (
        <span className="text-xs text-red-500">{errors.text.message}</span>
      )}
      <Button
        type={"submit"}
        variant={"default"}
        disabled={isSubmitting}
        className="size-14"
      >
        <Send />
      </Button>
    </form>
  );
};

export default AddComment;
