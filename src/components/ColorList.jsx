import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = (props) => {
  const { colors } = props;
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const id = nanoid();
        return <SingleColor key={id} index={index} color={color} />;
      })}
    </section>
  );
};

export default ColorList;
