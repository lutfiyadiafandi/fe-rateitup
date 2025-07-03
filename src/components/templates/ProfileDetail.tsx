import CardRestaurants from "@/components/reusable/CardRestaurants";
import CardReview from "@/components/reusable/CardReview";
import EditProfile from "@/components/reusable/EditProfile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ProfileDetail = () => {
  return (
    <>
      <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-10">
        <section className="flex flex-col items-center justify-center gap-5 mt-10 bg pb-52 bg-background">
          <h1 className="mb-5 text-2xl font-bold text-neutral-900">Profile</h1>
          <EditProfile />
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex justify-center w-full h-10 item">
              <TabsTrigger value="account">Restaurants</TabsTrigger>
              <TabsTrigger value="password">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <CardRestaurants />
              <CardRestaurants />
            </TabsContent>
            <TabsContent value="password">
              <CardReview />
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </>
  );
};

export default ProfileDetail;
