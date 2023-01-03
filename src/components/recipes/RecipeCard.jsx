import React from "react";
import {
  FaBalanceScaleLeft,
  FaClock,
  FaUtensils,
  FaHeart,
  FaCommentAlt,
} from "react-icons/fa";

function RecipeCard() {
  const iconSize = "1.5em";
  const iconColor = "#efefef";

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 gy-3">
      <div className="col">
        <div className="card h-100">
          <img
            src="https://www.allrecipes.com/thmb/pl6IzWa0p5VGZP-8ZsF4wfpEIwk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8000900-2000-d41f8a550fe5444894bf4a9e4d84fd1c.jpg"
            className="card-img-top"
            alt="Recipe Title"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#!">Huevos con almondigas</a>
            </h5>
            <p className="card-text">
              Delicioso manjar de huevos con almondigas
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item small">
              <div className="row row-cols-3 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-1">
                <div className="col">
                  <span className="badge rounded-pill bg-success">
                    <FaBalanceScaleLeft color={iconColor} size={iconSize} />{" "}
                    Fácil
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-primary">
                    <FaClock color={iconColor} size={iconSize} /> 45 min
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-dark">
                    <FaUtensils color={iconColor} size={iconSize} /> 4 Personas
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item small">
              <div className="row row-cols-2 g-1">
                <div className="col">
                  Recipe by{" "}
                  <a href="#!" className="card-link">
                    israelfl
                  </a>
                </div>
                <div className="col text-end">
                  <a href="#!" className="card-link">
                    <FaHeart color="#ff4300" size={"1.3em"} />
                  </a>{" "}
                  45
                  <a href="#!" className="card-link">
                    <FaCommentAlt color="#f5c613" size={"1.3em"} />
                  </a>{" "}
                  23
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg"
            className="card-img-top"
            alt="Recipe Title"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#!">Huevos con almondigas</a>
            </h5>
            <p className="card-text">
              Delicioso manjar de huevos con almondigas
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item small">
              <div className="row row-cols-3 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-1">
                <div className="col">
                  <span className="badge rounded-pill bg-success">
                    <FaBalanceScaleLeft color={iconColor} size={iconSize} />{" "}
                    Fácil
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-primary">
                    <FaClock color={iconColor} size={iconSize} /> 45 min
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-dark">
                    <FaUtensils color={iconColor} size={iconSize} /> 4 Personas
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item small">
              <div className="row row-cols-2 g-1">
                <div className="col">
                  Recipe by{" "}
                  <a href="#!" className="card-link">
                    israelfl
                  </a>
                </div>
                <div className="col text-end">
                  <a href="#!" className="card-link">
                    <FaHeart color="#ff4300" size={"1.3em"} />
                  </a>{" "}
                  45
                  <a href="#!" className="card-link">
                    <FaCommentAlt color="#f5c613" size={"1.3em"} />
                  </a>{" "}
                  23
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg"
            className="card-img-top"
            alt="Recipe Title"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#!">Huevos con almondigas</a>
            </h5>
            <p className="card-text">
              Delicioso manjar de huevos con almondigas
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item small">
              <div className="row row-cols-3 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-1">
                <div className="col">
                  <span className="badge rounded-pill bg-success">
                    <FaBalanceScaleLeft color={iconColor} size={iconSize} />{" "}
                    Fácil
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-primary">
                    <FaClock color={iconColor} size={iconSize} /> 45 min
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-dark">
                    <FaUtensils color={iconColor} size={iconSize} /> 4 Personas
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item small">
              <div className="row row-cols-2 g-1">
                <div className="col">
                  Recipe by{" "}
                  <a href="#!" className="card-link">
                    israelfl
                  </a>
                </div>
                <div className="col text-end">
                  <a href="#!" className="card-link">
                    <FaHeart color="#ff4300" size={"1.3em"} />
                  </a>{" "}
                  45
                  <a href="#!" className="card-link">
                    <FaCommentAlt color="#f5c613" size={"1.3em"} />
                  </a>{" "}
                  23
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg"
            className="card-img-top"
            alt="Recipe Title"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#!">Huevos con almondigas</a>
            </h5>
            <p className="card-text">
              Delicioso manjar de huevos con almondigas
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item small">
              <div className="row row-cols-3 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-1">
                <div className="col">
                  <span className="badge rounded-pill bg-success">
                    <FaBalanceScaleLeft color={iconColor} size={iconSize} />{" "}
                    Fácil
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-primary">
                    <FaClock color={iconColor} size={iconSize} /> 45 min
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-dark">
                    <FaUtensils color={iconColor} size={iconSize} /> 4 Personas
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item small">
              <div className="row row-cols-2 g-1">
                <div className="col">
                  Recipe by{" "}
                  <a href="#!" className="card-link">
                    israelfl
                  </a>
                </div>
                <div className="col text-end">
                  <a href="#!" className="card-link">
                    <FaHeart color="#ff4300" size={"1.3em"} />
                  </a>{" "}
                  45
                  <a href="#!" className="card-link">
                    <FaCommentAlt color="#f5c613" size={"1.3em"} />
                  </a>{" "}
                  23
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/british_shakshuka_26737_16x9.jpg"
            className="card-img-top"
            alt="Recipe Title"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="#!">Huevos con almondigas</a>
            </h5>
            <p className="card-text">
              Delicioso manjar de huevos con almondigas
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item small">
              <div className="row row-cols-3 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-1">
                <div className="col">
                  <span className="badge rounded-pill bg-success">
                    <FaBalanceScaleLeft color={iconColor} size={iconSize} />{" "}
                    Fácil
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-primary">
                    <FaClock color={iconColor} size={iconSize} /> 45 min
                  </span>
                </div>
                <div className="col">
                  <span className="badge rounded-pill bg-dark">
                    <FaUtensils color={iconColor} size={iconSize} /> 4 Personas
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item small">
              <div className="row row-cols-2 g-1">
                <div className="col">
                  Recipe by{" "}
                  <a href="#!" className="card-link">
                    israelfl
                  </a>
                </div>
                <div className="col text-end">
                  <a href="#!" className="card-link">
                    <FaHeart color="#ff4300" size={"1.3em"} />
                  </a>{" "}
                  45
                  <a href="#!" className="card-link">
                    <FaCommentAlt color="#f5c613" size={"1.3em"} />
                  </a>{" "}
                  23
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
