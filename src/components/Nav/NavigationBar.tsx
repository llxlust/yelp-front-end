import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "../forms/Button/Button";
import useSession from "../../hooks/useSession/useSession";

export default function NavigationBar() {
  const { user } = useSession();
  useEffect(() => {
    console.log(user, ":user");
  }, []);
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Yelp-clone
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active mr-10">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  {user ? (
                    <Link to="/users">
                      <Button text={user.name} varient="primary"/>
                    </Link>
                  ) : (
                    <Link to="/register">
                      <Button text="Register" varient="primary" />
                    </Link>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
