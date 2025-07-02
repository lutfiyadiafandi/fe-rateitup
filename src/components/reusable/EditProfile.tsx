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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userSchema, type UserForm } from "@/utils/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserForm>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserForm) => {
    // TODO: handle API call here
    console.log(data);
    reset();
    dialogCloseRef.current?.click();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} required type="text" />
              {errors.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                {...register("username")}
                required
              />
              {errors.username && (
                <span className="text-xs text-red-500">
                  {errors.username.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button ref={dialogCloseRef} type="button" className="hidden" />
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Editing..." : "Edit Profile"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
