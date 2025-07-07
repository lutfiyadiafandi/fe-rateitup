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
import { deleteRestaurant } from "@/service/restaurantApi";
import { toast } from "sonner";

const DeleteRestaurant = ({
  id,
  refetch,
}: {
  id: number;
  refetch: () => void;
}) => {
  const onClick = async (id: number) => {
    try {
      await deleteRestaurant(id);
      toast("Delete restaurant successfully", {
        style: {
          border: "1px solid #22c55e",
          padding: "16px",
          color: "#22c55e",
        },
        icon: "✅",
        description: "Your restaurant has been deleted",
      });
      setTimeout(() => {
        refetch();
      }, 1500);
    } catch (error: any) {
      toast("Delete restaurant failed", {
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
            Do you want to delete this restaurant?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            restaurant & reviews.
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

export default DeleteRestaurant;
