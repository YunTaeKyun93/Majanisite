import React from 'react'
import { RecipeData } from "./recipeData";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import recipeImg from "./recipeImg/balsamic.jpg";

const ss = classNames.bind(styles);
const Recipe2 = () => {
  return (
    <div className={ss("recipeComponent")}>
      <img src={recipeImg}/>
      <div className={ss("recipeContent")}>
        <h4>Balsamici Truffle(발사믹 트러플)</h4>
        <br />
        <span>재료 : </span>
        <span> - 75% 다크 초콜릿 : 250g </span>
        <span> - 생크림 : 100ml </span>
        <span> - 모데나 발사믹 식초 </span>
        <span> - 무가당 코코아 가루 : 100g</span>
        <span> - 버터 : 100g</span>
        <span> - 트러플</span>
        <br/>
        <p>
          제조방법 : <br/>
          1. 크림과 버터를 끓여서 2분동안 식힙니다.<br/>
          2. 잘게 썬 초콜릿을 붓고 이 재료들을 가나슈에 섞습니다.<br/>
          3. 냉장고에 4시간 동안 보관 후 포크로 반죽을 긁습니다.<br/>
          4. 적당한 크기로 반죽을 동그랗게 빚은 뒤 가운데데를 오목하게 눌러 홈을 만듭니다.<br/>
          5. 발사믹 식제 3방울을 붓습니다. <br/>
          6. 홈에 코코아 가루를 뿌립니다. <br/>
          7. 트러플을 갈아 위에 올려서 즐기시면 됩니다.
        </p>
      </div>
    </div>
  )
}

export default Recipe2
