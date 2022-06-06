import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import recipeImg from "./recipeImg/CreminoEspresso.png";
const ss = classNames.bind(styles);
const Recipe1 = () => {
  return (
    <div className={ss("recipeComponent")}>
      <img src={recipeImg} width="600"  />
      <div className={ss("recipeContent")}>
        <h4>Cremino Espresso(크리미노 에스프레소)</h4>
        <br/>
        <span>재료 : </span>
        <span> - 커피 또는 아마레토 : 60ml </span>
        <span> - 아몬드 우유 시럽 : 45ml </span>
        <span> - 에스프레소 커피 : 1잔 </span>
      </div>
    </div>
  );
};

export default Recipe1;

