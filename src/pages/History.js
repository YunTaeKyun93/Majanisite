import React from 'react'
import HistoryBack from './historyImg/HistoryBack.PNG';
import Logo from './historyImg/logo1.png';
import styles from './styles/History.module.css';
import History1 from './historyImg/1796.png';
import History2 from './historyImg/1832.png';
import History3 from './historyImg/1867.png';
import History4 from './historyImg/1878.png';
import History5 from './historyImg/1908.png';
import History6 from './historyImg/1911.png';
import History7 from './historyImg/1950.png';
import History8 from './historyImg/2017.png';
import { Fade, Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
const ss = classNames.bind(styles)


const History = () => {
  return (
    <div>
      <div className={ss('historyWrap')}>
        <img src={HistoryBack} alt="HistoryBack" />
        <Link to="/" className={ss('logo')}>
          <img src={Logo} alt="Logo" width="250px" />
        </Link>
        <div className={ss('historyExp')}>
          <h1>
            1796년부터 역사를 만들어 온 이탈리아 초콜릿
          </h1>
        </div>
        <div className={ss('historyContent')}>
          <div className={ss('history1796')}>
            <Bounce left>
              
              <img src={History1} alt="1796" />
            </Bounce>
            <Fade right>
              <div className={ss('text1796')}>
                <h1>1796년</h1>
                <h3>마야니 탄생</h3>
                <p>
                  마야니의 맛의 기원은 나폴레옹 군대가 점령한 시스파다네 공화국에 막 합병된
                  볼로냐의 작은가게 였습니다.
                </p>
                <p>
                  카운터 뒤에는 이탈리아에서 가장 오래된 쇼콜라티에 가문의 설립자인
                  Teresina Majani가 첫 번째 가게를 설립하였습니다.
                </p>
              </div>
            </Fade>
          </div>

          <div className={ss('history1832')}>
            <Bounce left>
              <div className={ss('text1832')}>
                <h1>1832년</h1>
                <h3>마야니 스코르자의 발명</h3>
                <p>
                  이탈리아에서 생산된 최초의 고형 초콜릿은 마야니 가문의 혁신적인 독창성과 열정에서 탄생했습니다.
                </p>
                <p>
                  나무 껍질을 닮았다고 해서 '스코르자'라고 불리는 이 제품은 특수 제작된 기계로 생산되어
                  오늘날에도 흉내낼 수 없는 <br />전설적인 제품이 되었습니다.
                </p>
              </div>
            </Bounce>
            <Fade right>
              <img src={History2} alt="1832" />
            </Fade>
          </div>


          <div className={ss('history1867')}>
            <Bounce left>
              <img src={History3} alt="1867" />
            </Bounce>
            <Fade right>
              <div className={ss('text1867')}>
                <h1>1867년</h1>
                <h3>토리노행 여권을 발행받다</h3>
                <p>
                  주세페 마야니는 혁신적인 증기 엔진을 구입하기 위해 토리노로 가는 귀중한 여권을 발행받았습니다.
                </p>
                <p>
                  그는 이를 활용하여 보다 더 초콜릿 연구에 박차를 가하였습니다.
                </p>
              </div>
            </Fade>
          </div>

          <div className={ss('history1878')}>
            <Bounce left>
              <div className={ss('text1878')}>
                <h1>1878년</h1>
                <h3>왕실의 정식 공급업체</h3>
                <p>
                  이탈리아의 통일 이후 마자니는 수많은 세계 박람회, 전 세계 사람들의 교류로 인해, 세계적인 우수성을 인정받았습니다
                </p>
                <p>
                  1878년 사보이 가문의 공식 공급업체가 되었고, 오늘날에도 여전히 문양을 새겨 그 영광을 지속하였습니다.
                </p>
              </div>
            </Bounce>
            <Fade right>
              <img src={History4} alt="1878" />
            </Fade>
          </div>

          <div className={ss('history1908')}>
            <Bounce left>
              <img src={History5} alt="1908" />
            </Bounce>
            <Fade right>
              <div className={ss('text1908')}>
                <h1>1908년</h1>
                <h3>팔라자니 마야니의 개점</h3>
                <p>
                  마야니는 성장 하여 유명한 건축가 '세잔'에게 볼로냐의 Via Indipendza에
                </p>
                <p>
                  건축의뢰를 했고, 그곳에서 실험실과 가게를 차렸습니다.
                </p>
              </div>
            </Fade>
          </div>

          <div className={ss('history1911')}>
            <Bounce left>
              <div className={ss('text1911')}>
                <h1>1911년</h1>
                <h3>크리미노 피아트 마야니의 탄생</h3>
                <p>
                  마야니의 최고의 제품 크리미노 피아트는 자동차인 Belle Epoque의 <br/>럭셔리함을 기리기 위해 만들어졌습니다.
                </p>
                <p>
                  피아트는 모델 FIAT Type4와 마야니의 시장출시를 축하하기 위해 대회를 발표했는데
                  <br/> 혁신적인 4겹의 크림이 있는 피아트가 토리노 초콜릿 제조업체의 경쟁에서 이겼습니다
                </p>
              </div>
            </Bounce>
            <Fade right>
              <img src={History6} alt="1911" />
            </Fade>
          </div>

          <div className={ss('history1950')}>
            <Bounce left>
              <img src={History7} alt="1950" />
            </Bounce>
            <Fade right>
              <div className={ss('text1950')}>
                <h1>1950년</h1>
                <h3>볼로네즈 돌체 비타</h3>
                <p>
                  마야니는 성장 하여 유명한 건축가 '세잔'에게 볼로냐의 Via Indipendza에
                </p>
                <p>
                  건축의뢰를 했고, 그곳에서 실험실과 가게를 차렸습니다.
                </p>
              </div>
            </Fade>
          </div>

          <div className={ss('history2017')}>
            <Bounce left>
              <div className={ss('text2017')}>
                <h1>2017년</h1>
                <h3>어제, 오늘 그리고 마야니</h3>
                <p>
                  오늘 날 마야니는 자신의 초콜릿 걸작을 전통적인 제조방법과 대대로 전해지는<br/>
                  조리법을 따르고 있습니다.
                </p>
                <p>
                  회사의 역사전 전문지식은 이탈리아인 뿐만이 아닌 전 세계적인 미각을 만족 시켜주고 있습니다.
                </p>
              </div>
            </Bounce>
            <Fade right>
            <img src={History8} alt="2017" />
            </Fade>
          </div>
      
        
         
          

        </div>
      </div>
    </div>
  )
}

export default History