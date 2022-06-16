import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import recipeImg from "./recipeImg/CreminoEspresso.png";
const ss = classNames.bind(styles);
const Recipe1 = () => {
  return (
    <div className={ss("recipeComponent")}>
      <img src={recipeImg} width="600" />
      <div className={ss("recipeContent")}>
        <h4>Cremino Espresso(크리미노 에스프레소)</h4>
        <br />
        <span>재료 : </span>
        <span> - 커피 또는 아마레토 : 60ml </span>
        <span> - 아몬드 우유 시럽 : 45ml </span>
        <span> - 에스프레소 커피 : 1잔 </span>
        <br/>
        <p>
          제조방법 : <br/>
          1. 셰이커에 절반을 채울 만큼의 충분한 얼음을 잔에 넣는다<br/>
          2. 가장자리 헴 부드러운 크레미노가 든 유리잔에 티스푼으로 퍼뜨립니다.<br/>
          3. 그런 다음 블래스트 칠러에 30분 이상 둡니다.<br/>
          4. 지거를 사용하여 커피, 리큐어, 아몬드 시럽, 에스프레소를 적당량 계량 한 다음<br/>
          셰이커에 붓습니다.<br/>
          5. 셰이커의 반대부분을 얼음을 채우고 몇 초 동안 모든 것을 격렬하게 닫고 흔듭니다 . <br/>
          6. 셰이커를 열고 작은 얼음 조각이 들어가지
          않도록 <br/>
          금속 메쉬 스트레이너를 사용하여 스트레이너로 혼합물을 걸러 냅니다.
        
        </p>
      </div>
    </div>
  );
};

export default Recipe1;
