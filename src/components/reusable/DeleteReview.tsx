import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteReview } from "@/service/reviewApi";
import { toast } from "sonner";

const DeleteReview = ({ id, refetch }: { id: number; refetch: () => void }) => {
  const onClick = async (id: number) => {
    try {
      await deleteReview(id);
      toast("Delete review successfully", {
        style: {
          border: "1px solid #22c55e",
          padding: "16px",
          color: "#22c55e",
        },
        icon: "✅",
        description: "Your review has been deleted",
      });
      setTimeout(() => {
        refetch();
      }, 1500);
    } catch (error: any) {
      toast("Delete review failed", {
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" size={"sm"} variant={"destructive"}>
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to delete this review?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            review & comments.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onClick(id)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteReview;
