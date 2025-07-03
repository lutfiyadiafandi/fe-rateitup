import AddRestaurant from "@/components/reusable/AddRestaurant";
import CardRestaurants from "@/components/reusable/CardRestaurants";
import { useAxios } from "@/hooks/useAxios";
import { getRestaurants } from "@/service/restaurantApi";
import type { IRestaurant } from "@/utils/Interface";

const AllRestaurants = () => {
  const { data, loading, error } = useAxios<IRestaurant[]>(getRestaurants);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="w-full mx-auto overflow-hidden max-w-[768px] mt-20">
      <AddRestaurant />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {data?.map((item: IRestaurant) => (
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
