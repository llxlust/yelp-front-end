import Spiner from "../../../../components/spiner/spiner";
import useRestaurant from "../../../../hooks/useRestaurant";
import { IRestaurant } from "../../../../types/restaurant";
import RestaurantList from "../RestaurantList/RestaurantList";
import { useState, useEffect } from "react";
export default function HomeContent() {
  const { getAllRestaurant, isLoading } = useRestaurant();
  const [restaurant, setRestaurant] = useState<IRestaurant[]>();
  const fetchRestaurant = async () => {
    const res = await getAllRestaurant();
    if (res) {
      setRestaurant(res.data);
      console.log(res.data);
    }
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <>
          <Spiner />
        </>
      ) : (
        <>
          {restaurant && (
            <div>
              {restaurant?.map(({name,address,description,_id}) => {
                return (
                  <div className="">
                    <RestaurantList
                      key={_id}
                      id={_id}
                      name={name}
                      image="https://www.shutterstock.com/image-photo/calgary-alberta-may-30-2021-260nw-1983144530.jpg"
                      address={address}
                      description={description}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
