import AddRestaurant from "@/components/reusable/AddRestaurant";
import AddReview from "@/components/reusable/AddReview";
import CardRestaurants from "@/components/reusable/CardRestaurants";
import Data from "@/utils/data.json";

const AllRestaurants = () => {
  console.log("Data", Data);
  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      <AddRestaurant />
      <AddReview />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {Data.map((item) => (
          <CardRestaurants
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            photoUrl={item.photoUrl}
            location={item.location}
            mapsUrl={item.mapsUrl}
            user={item.user}
          />
        ))}
      </section>
    </main>
  );
};

export default AllRestaurants;
