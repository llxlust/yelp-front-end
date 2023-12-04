import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IRestaurant } from "../../types/restaurant";
import useRestaurant from "../../hooks/useRestaurant";
import classes from "./restaurantDetail.module.scss";
import Spiner from "../../components/spiner/spiner";
export default function RestaurantDetail() {
  const { id } = useParams();
  const { isLoading, getOneRestaurant } = useRestaurant();
  const [restaurantDetail, setRestaurantDetail] = useState<IRestaurant>();
  const fetchRestaurantDetail = async () => {
    if (id) {
      const res = await getOneRestaurant(id);
      if (res) {
        setRestaurantDetail(res.data);
        console.log(res.data);
      }
    }
  };
  useEffect(() => {
    fetchRestaurantDetail();
  }, []);
  return (
    <>
     {isLoading ? <Spiner/> : <>
     {restaurantDetail && (
        <div className={`container m-t-25`}>
          <div className={`row m-t-50`}>
            <div className="col-3">
              <img
                className={classes.image}
                src="https://www.shutterstock.com/image-photo/calgary-alberta-may-30-2021-260nw-1983144530.jpg"
                alt={restaurantDetail.name}
              />
            </div>
            <div className="col-6 p-l-50">
              <h1>{restaurantDetail.name}</h1>
              <p>{restaurantDetail.description}</p>
              <p>ADDRESS: {restaurantDetail.address}</p>
              <p>PHONE-NUMBER: {restaurantDetail.phone}</p>
              <p>
                WEBSITE:{" "}
                <a href={restaurantDetail.website} target="_blank">
                  {restaurantDetail.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
     </>}
    </>
  );
}
