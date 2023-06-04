import React from "react";
import "./MySelect.scss";
function MySelect({ isActive,options, ...props }) {
  return (
    <select {...props} className={isActive ? "my-select active" : "my-select "}>
      {options?.length > 0 &&
        options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.title}
          </option>
        ))}
    </select>
  );
}

export default MySelect;
