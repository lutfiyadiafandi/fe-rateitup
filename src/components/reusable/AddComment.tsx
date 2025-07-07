import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema, type CommentForm } from "@/utils/Schema";
import { createComment } from "@/service/commentApi";
import { toast } from "sonner";

const AddComment = ({ id, refetch }: { id: number; refetch: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data: CommentForm) => {
    try {
      await createComment(id, data);
      toast("Add comment successfully", {
        style: {
          border: "1px solid #22c55e",
          padding: "16px",
          color: "#22c55e",
        },
        icon: "✅",
        description: "Thanks for your contribution",
      });
      reset();
      setTimeout(() => {
        refetch();
      }, 1500);
    } catch (error: any) {
      toast("Add comment failed", {
        style: {
          border: "1px solid #ef4444",
          padding: "16px",
          color: "#ef4444",
        },
        icon: "❌",
        description: `${error.response.data.message}`,
      });
    }
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
