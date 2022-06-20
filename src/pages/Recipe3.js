import React from 'react'
import { RecipeData } from "./recipeData";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import recipeImg from "./recipeImg/cake.jpg";
const ss = classNames.bind(styles);
const Recipe3 = () => {
  return (
    <div className={ss("recipeComponent")}>
      <img src={recipeImg}/>
      <div className={ss("recipeContent")}>
        <h4>Balsamici Truffle(발사믹 트러플)</h4>
        <br />
        <span>재료 : </span>
        <span> - 마자니 다크 초콜릿 52% 코코아 : 200g </span>
        <span> - 유당이없는 식물성 마가린 : 50g </span>
        <span> - 밀가루 : 250g </span>
        <span> - 베이킹파우더 : 1/2봉지</span>
        <span> - 설탕 : 200g</span>
        <span> - 트러플</span>
        <br/>
        <p>
          제조방법 : <br/>
          1. 베인 마리(네모난 틀)에 다크 초콜릿과 마가린을 녹이고 베이킹 파우더 반 봉지, 설탕 및 코코넛 밀크로 체질 된 밀가루를 첨가.<br/>
          2. 재료를 거품기로 몇 분간 휘핑하여 크림이 될 때까지 돌린 후 틀러붙지 않는 틀에 붓습니다.<br/>
          3. 180°C로 예열된 오븐에 굽습니다.<br/>
        </p>
      </div>
    </div>  )
}

export default Recipe3