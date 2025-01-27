import React from "react";
import "./ChefSection.css";
import seafoodIcon from "../assets/icons/beef.png";
import chefHatIcon from "../assets/icons/chef-hat.png";
import wineIcon from "../assets/icons/wine.png";
import utensilsIcon from "../assets/icons/fork.png";
import chef from "../assets/chef.png";

const ChefSection = () => {
  return (
    <div className="chef-section">
      <div className="chef-image">
        <img src={chef} alt="Chef" />
      </div>
      <div className="features">
        <div className="feature">
          <div className="icon-text">
            <img src={seafoodIcon} alt="Seafood Icon" />
            <h3>
              Fresh & Quality Seafood
              <span className="underline"></span>
            </h3>
          </div>
          <p>
            Integer tincidunt. Cras dapibus. amusen semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu
          </p>
        </div>
        <div className="feature">
          <div className="icon-text">
            <img src={chefHatIcon} alt="Chef Hat Icon" />
            <h3>
              Amazing Master Chef
              <span className="underline"></span>
            </h3>
          </div>
          <p>
            Integer tincidunt. Cras dapibus. amusen semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu
          </p>
        </div>
        <div className="feature">
          <div className="icon-text">
            <img src={wineIcon} alt="Wine Icon" />
            <h3>
              Top Qualified Services 24/7
              <span className="underline"></span>
            </h3>
          </div>
          <p>
            Integer tincidunt. Cras dapibus. amusen semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu
          </p>
        </div>
        <div className="feature">
          <div className="icon-text">
            <img src={utensilsIcon} alt="Utensils Icon" />
            <h3>
              Excellent Facility Restaurant
              <span className="underline"></span>
            </h3>
          </div>
          <p>
            Integer tincidunt. Cras dapibus. amusen semper nisi. Aenean vulputate
            eleifend tellus. Aenean leo ligula, porttitor eu
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;