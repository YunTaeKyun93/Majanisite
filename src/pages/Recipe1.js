import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import recipeImg from "./recipeImg/CreminoEspresso.png";
const ss = classNames.bind(styles);
const Recipe1 = () => {
  return (
    <div className={ss("recipeComponent")}>
      <img src={recipeImg}/>
      <div className={ss("recipeContent")}>
        <h4>Cremino Espresso(크리미노 에스프레소)</h4>
        <br />
        <span>재료 : </span>
        <span> - 커피 또는 아마레토 : 60ml </span>
        <span> - 아몬드 우유 시럽 : 45ml </span>
        <span> - 에스프레소 커피 : 1잔 </span>
        <span> - 피아트 크리미노 : 1개 </span>
        <br/>
        <p>
          제조방법 : <br/>
          1. 셰이커에 절반을 얼음으로 채운다<br/>
          2. 유리잔에 크리미노을 넣고 티스푼으로 퍼뜨립니다.<br/>
          3. 블래스트 칠러에 30분 이상 둡니다.<br/>
          4. 지거를 사용하여 커피, 리큐어, 아몬드 시럽, 에스프레소를 적당량 계량 한 다음<br/>
          셰이커에 붓습니다.<br/>
          5. 셰이커의 반대부분을 얼음을 채우고 셰이커를 합친 후 흔듭니다 . <br/>
          6. 셰이커를 열고 얼음 조각이 들어가지
          않도록 <br/>
          금속 메쉬 스트레이너를 사용하여 스트레이너로 혼합물을 걸러 냅니다. <br/>
          7. 유리잔에 넣은 후 크리미노 에스프레소를 즐기시면 됩니다.
        </p>
      </div>
    </div>
  );
};

export default Recipe1;
