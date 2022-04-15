import React from "react";
import "./Checkbox.css";

function Checkbox() {
  return (
    <>
      <div className="container__checkbox">
        <div>
          <div className="checkbox__content">
            <label className="switcher">
              <input type="checkbox" name="Essential" />
              <div className="switcher__indicator"></div>
              <span>Essential</span>
            </label>
            <br />
            <label className="switcher">
              <input type="checkbox" name="Professional" />
              <div className="switcher__indicator"></div>
              <span>Professional</span>
            </label>
            <br />
            <label className="switcher">
              <input type="checkbox" name="Standards" />
              <div className="switcher__indicator"></div>
              <span>Standards</span>
            </label>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkbox;
