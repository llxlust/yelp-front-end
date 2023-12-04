import { Link } from "react-router-dom";
import Button from "../../../../components/forms/Button/Button";
import classes from "./Restaurant.module.scss";
interface IRestaurantListProps {
  image: string;
  name: string;
  address: string;
  description: string;
  id: string;
}

export default function RestaurantList({
  image,
  name,
  address,
  description,
  id,
}: IRestaurantListProps) {
  return (
    <div className={`row p-t-15 m-b-15 ${classes.formContainer}`}>
      <div className="col-3">
        <img src={image} alt={name}></img>
      </div>
      <div className="col-9">
        <h3>{name}</h3>
        <p>{address}</p>
        <p>{description}</p>
        <Link to={`restaurant/${id}`}>
          <Button text="detail" varient="success" />
        </Link>
      </div>
    </div>
  );
}
