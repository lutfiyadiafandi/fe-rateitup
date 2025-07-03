import CardRestaurants from "@/components/reusable/CardRestaurants";
import CardReview from "@/components/reusable/CardReview";
import EditProfile from "@/components/reusable/EditProfile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import type { IUser } from "@/utils/Interface";
import { useAxios } from "@/hooks/useAxios";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { getUser } from "@/service/userApi";

const ProfileDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { data, loading, error, refetch } = useAxios<IUser>(getUser, [token]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-10">
        <section className="flex flex-col items-center justify-center gap-5 py-8 bg-background rounded-3xl">
          <h1 className="text-2xl font-bold text-neutral-900">Profile</h1>
          <div>
            <p className="text-base font-medium text-neutral-900">
              Full Name: {data?.name}
            </p>
            <p className="text-base font-medium text-neutral-900">
              Username: @{data?.username}
            </p>
          </div>
          {data?.id && (
            <div className="flex gap-5">
              <EditProfile
                name={data.name}
                username={data.username}
                id={data.id}
                refetch={refetch}
              />
              <Button variant={"destructive"} onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex justify-center w-full h-10 item">
              <TabsTrigger value="account">Restaurants</TabsTrigger>
              <TabsTrigger value="password">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              {/* <CardRestaurants /> */}
            </TabsContent>
            <TabsContent value="password">{/* <CardReview /> */}</TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
};

export default ProfileDetail;
