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
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { deleteRestaurant } from "@/service/restaurantApi";

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
      refetch();
    } catch (error) {
      console.error("Failed to delete restaurant", error);
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
