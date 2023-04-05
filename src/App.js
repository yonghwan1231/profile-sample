import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [currCon, setCurrCon] = useState('skills')
  const [fixedNav, setFixedNav] = useState('')
  const skills = ['html', 'css', 'sass', 'js', 'jquery', 'react', 'redux', 'nodejs', 'mongodb']

  function navBarMove() {
    const contents = document.querySelector(`.nav.${currCon}`)
    document.querySelectorAll('.active-bar').forEach((el) => {
      el.style.left = `${contents.getBoundingClientRect().left}px`
      el.style.width = `${contents.clientWidth}px`
    });
  }

  useEffect(() => {

    let minus = window.innerHeight / 4

    const nav = document.querySelector('.profile-nav')
    const skills = document.querySelector('.profile-contents.skills')
    const portfolio = document.querySelector('.profile-contents.portfolio')
    const career = document.querySelector('.profile-contents.career')
    const education = document.querySelector('.profile-contents.education')
    const contactus = document.querySelector('.profile-contents.contactus')

    const navY = window.scrollY + nav.getBoundingClientRect().top
    const skillsY = window.scrollY + skills.getBoundingClientRect().top - minus
    const portfolioY = window.scrollY + portfolio.getBoundingClientRect().top - minus
    const careerY = window.scrollY + career.getBoundingClientRect().top - minus
    const educationY = window.scrollY + education.getBoundingClientRect().top - minus
    const contactusY = window.scrollY + contactus.getBoundingClientRect().top - minus

    window.addEventListener('resize', navBarMove)

    window.addEventListener('scroll', () => {
      if (window.scrollY > navY) {
        setFixedNav('show')
      } else (setFixedNav(''))

      if (window.scrollY > skillsY &&
        window.scrollY < skillsY + (skills.clientHeight * 0.8)
      ) { setCurrCon('skills') }
      else if (
        window.scrollY > portfolioY &&
        window.scrollY < portfolioY + (portfolio.clientHeight * 0.8)
      ) { setCurrCon('portfolio') }
      else if (
        window.scrollY > careerY &&
        window.scrollY < careerY + (career.clientHeight * 0.8)
      ) { setCurrCon('career') }
      else if (
        window.scrollY > educationY &&
        window.scrollY < educationY + (education.clientHeight * 0.8)
      ) { setCurrCon('education') }
      else if (
        window.scrollY > educationY &&
        window.scrollY < educationY + (education.clientHeight * 0.8)
      ) { setCurrCon('education') }
      else if (
        window.scrollY > contactusY &&
        window.scrollY < contactusY + (contactus.clientHeight * 0.8)
      ) { setCurrCon('contactus') }
    })

    document.querySelectorAll('nav').forEach((el) => {
      el.addEventListener('click', (e) => {
        const targetClass = e.target.classList[1]
        const target = document.querySelector(`.profile-contents.${targetClass}`)
        target.scrollIntoView({ behavior: 'smooth' })
      })
    })

    // axios({
    //   url: 'https://port-0-portfolio-server-private-4y6tt2blds7g9x0.sel3.cloudtype.app/api/profile',
    //   // url: 'http://localhost:8080/api/profile',
    //   withCredentials: true,
    //   method: 'GET'
    // })
  }, [])

  useEffect(() => {
    navBarMove()
  }, [currCon])

  return (
    <div className='profile-wrap'>

      <section className='profile-banner'>
        <p>
          어떠한 요구사항에도<br />
          ❝그건 좀 어려울 것 같은데요.❞ 가 아닌<br />
          <strong>❝네 가능합니다, 문제 없습니다.❞</strong><br className='show-mobile' /> 라고 대답할 수 있는<br />
          <span>친</span><span>절</span>하고 <span>유</span><span>능</span>한 개발자가 되겠습니다.
        </p>
      </section>

      <header>
        <section className='profile-info'>
          <figure className='profile-picture' />
          <div className='info-box'>
            <h1>홍길동</h1>
            <p>1995.12.31~(만 27세)</p>
          </div>
          <ul className='my-skill'>
            {
              skills.map((el, idx) => {
                return (
                  <li key={idx}>
                    <img src={require('./assets/img/' + el + '.png')} />
                  </li>
                )
              })
            }
          </ul>
          <div className='contact-box'>
            <p>
              <img src={require('./assets/img/phone.png')} />
              <span>010-0000-0000</span>
            </p>
            <p>
              <img src={require('./assets/img/email.png')} />
              <span>xxxxxx@naver.com</span>
            </p>
          </div>
        </section>

        <nav className='profile-nav'>
          <ul>
            <li className='nav skills'>Skills</li>
            <li className='nav portfolio'>Portfolio</li>
            <li className='nav career'>Career</li>
            <li className='nav education'>Education</li>
            <li className='nav contactus'>Contact Us</li>
          </ul>
          <div className='active-bar'></div>
        </nav>

        <nav className={`profile-nav fixed ${fixedNav}`}>
          <ul>
            <li className='nav skills'>Skills</li>
            <li className='nav portfolio'>Portfolio</li>
            <li className='nav career'>Career</li>
            <li className='nav education'>Education</li>
            <li className='nav contactus'>Contact Us</li>
          </ul>
          <div className='active-bar'></div>
        </nav>


      </header>

      <article className='profile-contents skills'>
        <h1 className='contents-title'>Skills</h1>
        <div className='skills-wrap'>
          <ul>
            <li className='skill-level'>
              <img src={require('./assets/img/html.png')} />
              <h4>HTML5</h4>
              <p>
                프론트 작업에 있어 가장 기초적이고 필수 언어인 만큼 모든 업무와 개인 작업에서 사용하기 때문에 충분한 기본기와 이해도를 갖추고 있습니다. 웹 표준을 준수하고 웹 접근성을 고려하여 능숙한 마크업이 가능합니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/css.png')} />
              <h4>CSS3</h4>
              <p>
                프론트 작업에서 가장 기초적이고 필수 언어인 만큼 모든 업무와 개인 작업에서 사용하기 때문에 능숙한 수준이며 CSS로 가능한 구현 영역은 거의 모두 소화할 수 있습니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/sass.png')} />
              <h4>Sass</h4>
              <p>
                근무한 회사의 대부분의 프로젝트에서 사용했으며 제 포트폴리오에도 사용되었습니다.
                편리한 스타일 코드 작성을 위해 사용하며 중첩 문법과 변수 관리, 믹스인 이외의 기능은 잘 활용하지 않지만 필요에 따라 모든 기능을 어려움 없이 사용할 수 있습니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/js.png')} />
              <h4>Javascript</h4>
              <p>
                자바스크립트 코어 지식에 대한 이해도와 ES6 문법 활용 능력을 통해 웹에서 사용되는 대부분의 기능 구현이 어려움 없이 가능한 수준이며, 보다 유지보수에 용이하고 확장성 있는 코드를 작성하기 위해 노력하고 있습니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/jquery.png')} />
              <h4>JQuery</h4>
              <p>
                근무한 회사 대부분의 프로젝트에서 사용하여 문법에 익숙합니다.
                DOM 조작의 편의성 때문에 주로 사용 했지만 바닐라 JS를 깊이 공부한 이후로는 개인 작업물에서는 굳이 사용하지 않습니다. 제이쿼리로 작성된 코드를 바닐라 JS로 어려움 없이 변환할 수 있는 수준입니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/react.png')} />
              <h4>React</h4>
              <p>
                리액트의 작동 원리에 대한 이해와 상태관리, 훅, 라이프사이클 등에 대한 기본지식을 바탕으로 함수형 프로그래밍을 지향하며 작업 합니다.
                소규모의 쇼핑몰 SPA 사이트를 제작할 수 있는 수준입니다. (포트폴리오를 참고해 주시면 감사드리겠습니다.)
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/redux.png')} />
              <h4>Redux</h4>
              <p>
                Redux toolkit 라이브러리 문법을 통해 리액트 환경에서 전역적인 state를 관리할 때 사용합니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/nodejs.png')} />
              <h4>Node.js Express</h4>
              <p>
                Express 라이브러리 문법을 통해 간단한 서버 구축이 가능한 수준입니다.
                데이터베이스를 기반으로 프론트단과 데이터를 통신하는 기초적인 api 구현이 가능합니다.
              </p>
            </li>
            <li className='skill-level'>
              <img src={require('./assets/img/mongodb.png')} />
              <h4>MongoDB</h4>
              <p>
                프트폴리오에 사용한 데이터베이스 입니다.<br />
                서버와 연동하여 기본적인 데이터 CRUD 작업이 가능합니다.
              </p>
            </li>
          </ul>
        </div>
      </article>

      <article className='profile-contents portfolio'>
        <h1 className='contents-title'>Portfolio</h1>

        <section className='portfolio-1'>
          <div className='preview-img'>
            <figure className='preview-pc'>
              <img src={require('./assets/img/pf1_pc.png')} />
            </figure>
            <figure className='preview-mc'>
              <img src={require('./assets/img/pf1_mc.png')} />
            </figure>
          </div>
          <section className='desc'>
            <h3>의류쇼핑몰 <span>(개인프로젝트)</span></h3>
            <h4>작업시기 - 2022.12~2023.02</h4>
            <div className='link-wrap'>
              <a href='https://web-portfolio-4y6tt2blds7g9x0.sel3.cloudtype.app/' target='_blank'>
                <img src={require('./assets/img/icon_homepage.png')} />
                사이트 <span className='show-desktop'>방문</span>
              </a>
              <a href='https://github.com/yonghwan1231/portfolio' target='_blank'>
                <img src={require('./assets/img/icon_github.png')} />
                깃허브 <span className='show-desktop'>방문</span>(프론트)
              </a>
              <a href='https://github.com/yonghwan1231/portfolio_server_public' target='_blank'>
                <img src={require('./assets/img/icon_github.png')} />
                깃허브 <span className='show-desktop'>방문</span>(백)
              </a>
            </div>
            <p className='desc-detail'>
              프론트와 백엔드는 React, Node.js Express 기반, DB는 몽고DB를 사용하여 작업한 반응형 쇼핑몰 포트폴리오입니다.
              <br />
              기능 구현 위주의 포트폴리오로 일반적인 쇼핑몰에서 지원하는 기본 기능들을 모두 구현 하였습니다.
              <br />
              그중 로그인 기능은 jwt 인증 방식으로 구현 하였고 쇼핑몰의 고객센터 페이지에는 CRUD 기능도 구현되어 있습니다.
              <br />
              <span className='point'>대부분의 기능이 로그인 상태에서 지원</span>되므로 포트폴리오 확인 시 <span className='point'>회원가입 및 로그인</span>을 진행한 후 확인 부탁드립니다.
            </p>

            <div className='used-skill'>
              <strong>사용기술</strong>
              <ul>
                {
                  skills.map((el, idx) => {
                    if (el === 'jquery') return
                    return (
                      <li key={idx}>
                        <img src={require('./assets/img/' + el + '.png')} />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>

        </section>

        <section className='portfolio-2'>
          <div className='preview-img'>
            <figure className='preview-pc'>
              <img src={require('./assets/img/pf2.png')} />
            </figure>
          </div>
          <section className='desc'>
            <h3>프로그레스 <span>(토이프로젝트)</span></h3>
            <h4>작업시기 - 2022.07</h4>
            <div className='link-wrap'>
              <a href='https://yonghwan1231.github.io/progress/' target='_blank'>
                <img src={require('./assets/img/icon_homepage.png')} />
                사이트 <span className='show-desktop'>방문</span>
              </a>
              <a href='https://github.com/yonghwan1231/progress' target='_blank'>
                <img src={require('./assets/img/icon_github.png')} />
                깃허브 <span className='show-desktop'>방문</span>
              </a>
            </div>
            <p className='desc-detail'>
              재직하던 회사 프로젝트에서 진행한 프로그레스 기능 구현 샘플입니다.
              <br />
              객체지향식으로 구현하였고 실제 사용 시 해당 페이지의 페이지의 콘텐츠 종류와 프로세스 단계에 따라 html 파일 내에서 프로그레스 객체의 옵션값 설정 코드를 추가하여 사용하는 방식 입니다.
              <br />
              기능확인을 위해 하단 조작바를 추가 하였으니 이를 사용하여 확인 부탁드립니다.
            </p>

            <div className='used-skill'>
              <strong>사용기술</strong>
              <ul>
                <li>
                  <img src={require('./assets/img/html.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/css.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/js.png')} />
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className='portfolio-3'>
          <div className='preview-img'>
            <figure className='preview-pc'>
              <img src={require('./assets/img/pf3.png')} />
            </figure>
          </div>
          <section className='desc'>
            <h3>사용자정보입력창 <span>(토이프로젝트)</span></h3>
            <h4>작업시기 - 2022.06</h4>
            <div className='link-wrap'>
              <a href='https://yonghwan1231.github.io/userinput/' target='_blank'>
                <img src={require('./assets/img/icon_homepage.png')} />
                사이트 <span className='show-desktop'>방문</span>
              </a>
              <a href='https://github.com/yonghwan1231/userinput' target='_blank'>
                <img src={require('./assets/img/icon_github.png')} />
                깃허브 <span className='show-desktop'>방문</span>
              </a>
            </div>
            <p className='desc-detail'>
              재직하던 회사 프로젝트에서 진행한 사용자 정보 입력창 기능 구현 샘플입니다.
              <br />
              객체지향식으로 구현하였고 입력창 유형별로 입력규칙이 존재하며, 이를 만족하면 다음 페이지 버튼이 생성됩니다.
              <br />
              상단 탭 메뉴에서 입력창 유형을 변경할 수 있으며 탭 메뉴 하단에는 해당 입력창에 대한 설명이 적혀 있으니 참고하시어 확인 부탁드립니다.
            </p>

            <div className='used-skill'>
              <strong>사용기술</strong>
              <ul>
                <li>
                  <img src={require('./assets/img/html.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/css.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/js.png')} />
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className='portfolio-4'>
          <div className='preview-img'>
            <figure className='preview-pc'>
              <img src={require('./assets/img/pf4.png')} />
            </figure>
          </div>
          <section className='desc'>
            <h3>달력 <span>(토이프로젝트)</span></h3>
            <h4>작업시기 - 2022.06</h4>
            <div className='link-wrap'>
              <a href='https://yonghwan1231.github.io/calender/' target='_blank'>
                <img src={require('./assets/img/icon_homepage.png')} />
                사이트 <span className='show-desktop'>방문</span>
              </a>
              <a href='https://github.com/yonghwan1231/calender' target='_blank'>
                <img src={require('./assets/img/icon_github.png')} />
                깃허브 <span className='show-desktop'>방문</span>
              </a>
            </div>
            <p className='desc-detail'>
              자바스크립트로 만든 반드시 6*7 표로 생성되는 달력입니다.
              <br />
              해당 월 날짜가 모두 표시되며, 남은 칸은 지난달과 다음달 날짜가 채워집니다.
            </p>

            <div className='used-skill'>
              <strong>사용기술</strong>
              <ul>
                <li>
                  <img src={require('./assets/img/html.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/css.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/js.png')} />
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section className='portfolio-5'>
          <div className='preview-img'>
            <figure className='preview-pc'>
              <img src={require('./assets/img/pf5.png')} />
            </figure>
          </div>
          <section className='desc'>
            <h3>햄버거웹사이트 <span>(개인프로젝트)</span></h3>
            <h4>작업시기 - 2022.02</h4>
            <div className='link-wrap'>
              <a href='https://yonghwan1231.github.io/chefsburger/main.html' target='_blank'>
                <img src={require('./assets/img/icon_homepage.png')} />
                사이트 <span className='show-desktop'>방문</span>
              </a>
              <a href='https://github.com/yonghwan1231/chefsburger' target='_blank'>
                <img src={require('./assets/img/icon_github.png')} />
                깃허브 <span className='show-desktop'>방문</span>
              </a>
            </div>
            <p className='desc-detail'>
              웹 퍼블리싱 학원에 다니면서 작업했던 저의 첫 웹사이트입니다.<br />
              퍼블리싱만 완료된 사이트이며 제이쿼리를 통해 간단한 애니메이션까지 구현되어 있습니다.
              일반적인 웹사이트에서 서비스되는 모든 페이지를 구현하고자 노력했습니다.
              초보 시절의 작업물인 만큼 제품 상세페이지를 일일이 하드코딩으로 만드는 등 다소 비효율적인 방식으로 제작된 점 참고해서 봐주시면 감사드리겠습니다.
              당시의 실력을 기억하고 싶은 마음에 리팩토링은 진행하지 않았습니다.
            </p>

            <div className='used-skill'>
              <strong>사용기술</strong>
              <ul>
                <li>
                  <img src={require('./assets/img/html.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/css.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/js.png')} />
                </li>
                <li>
                  <img src={require('./assets/img/jquery.png')} />
                </li>
              </ul>
            </div>
          </section>
        </section>

      </article>



      <article className='profile-contents career'>
        <h1 className='contents-title'>Career</h1>
        <div className='career-wrap'>
          <section className='logo-area'>
            <img src={require('./assets/img/bythem_logo.png')} />
          </section>
          <section className='career-detail'>
            <section className='career-title'>
              <h1>
                (주)바이뎀
              </h1>
              <dl>
                <dd>재직기간 : 2022.03.21~2023.03.31</dd>
                <dd>소속부서 : 퍼블리싱팀</dd>
                <dd>직급 : 매니저(사원)</dd>
              </dl>
            </section>

            <section className='career-project'>
              <h1>#참여 프로젝트</h1>

              <figure className='project-detail'>
                <h3>민팃ATM 국내향 리뉴얼</h3>
                <dl>
                  <dt>프로젝트 내용</dt>
                  <dd>-ATM 증고폰 판매 프로세스 페이지 제작</dd>
                  <dt>투입기간</dt>
                  <dd>-2022.03~2023.01</dd>
                  <dt>담당업무</dt>
                  <dd>
                    -신규 프로젝트 구축업무 보조
                  </dd>
                  <dd>
                    -신규 화면 추가, 기능구현 및 유지보수
                  </dd>
                  <dt>사용환경</dt>
                  <dd>-ie10</dd>
                  <dt>사용기술</dt>
                  <dd>-HTML, CSS, SASS, JS, JQuery</dd>
                </dl>
              </figure>

              <figure className='project-detail'>
                <h3>민팃ATM 일본향,구 국내향</h3>
                <dl>
                  <dt>프로젝트 내용</dt>
                  <dd>-ATM 증고폰 판매 프로세스 페이지 제작</dd>
                  <dt>투입기간</dt>
                  <dd>-2022.05~2022.08</dd>
                  <dt>담당업무</dt>
                  <dd>
                    -신규 기능구현, 페이지 추가 및 유지보수
                  </dd>
                  <dt>사용환경</dt>
                  <dd>-ie10</dd>
                  <dt>사용기술</dt>
                  <dd>-HTML, CSS, SASS, JS, JQuery</dd>
                </dl>
              </figure>

              <figure className='project-detail'>
                <h3>제네시스 세일즈 가이드</h3>
                <dl>
                  <dt>프로젝트 내용</dt>
                  <dd>-제네시스 직원 교육용 세일즈 가이드 반응형 다국어 페이지 제작</dd>
                  <dt>투입기간</dt>
                  <dd>-2022.05~2022.07</dd>
                  <dt>담당업무</dt>
                  <dd>
                    -신규 페이지 추가 및 유지보수
                  </dd>
                  <dt>사용환경</dt>
                  <dd>-chrome, edge, ie11, safari, firefox</dd>
                  <dt>사용기술</dt>
                  <dd>-HTML, CSS, SASS</dd>
                </dl>
              </figure>

              <figure className='project-detail'>
                <h3>자사 홈페이지 관리</h3>
                <dl>
                  <dt>프로젝트 내용</dt>
                  <dd>-워드프레스 기반 자사 홈페이지 관리 및 리뉴얼 진행</dd>
                  <dt>투입기간</dt>
                  <dd>-2022.05~현재</dd>
                  <dt>담당업무</dt>
                  <dd>
                    -콘텐츠 추가·수정 및 유지보수
                  </dd>
                  <dd>
                    -자사 리뉴얼 홈페이지(워드프레스X) 어드민 페이지 제작
                  </dd>
                  <dd>
                    -자사 리뉴얼 홈페이지(워드프레스X) 프론트 페이지 제작
                  </dd>
                  <dt>사용환경</dt>
                  <dd>-chrome, edge, ie11, safari, firefox</dd>
                  <dt>사용기술</dt>
                  <dd>-HTML, CSS, SASS, JS, JQuery</dd>
                </dl>
              </figure>

              <figure className='project-detail'>
                <h3>SKT 이프랜드&글로벌5GX</h3>
                <dl>
                  <dt>프로젝트 내용</dt>
                  <dd>-SKT 이프랜드&글로벌5GX 서비스 페이지, 이벤트 페이지 제작</dd>
                  <dd>-SKT 이프랜드 오큘러스 어드민 페이지 제작</dd>
                  <dt>투입기간</dt>
                  <dd>-2022.10~현재</dd>
                  <dt>담당업무</dt>
                  <dd>
                    -콘텐츠 추가·수정 및 유지보수
                  </dd>
                  <dd>
                    -프론트 기능개발
                  </dd>
                  <dt>사용환경</dt>
                  <dd>-chrome, edge, ie11, safari, firefox</dd>
                  <dt>사용기술</dt>
                  <dd>-HTML, CSS, SASS, JS, JQuery</dd>
                </dl>
              </figure>
            </section>
          </section>

        </div>
      </article>

      <article className='profile-contents education'>
        <h1 className='contents-title'>Education</h1>
        <section className='education-wrap'>
          <figure className='education-detail'>
            <h1>이젠IT아카데미 수료</h1>
            <dl>
              <dt>수강기간</dt>
              <dd>2021.11~2022.02</dd>
              <dt>과정명</dt>
              <dd>웹 디자인&웹 퍼블리싱 과정</dd>
            </dl>
          </figure>
          <div className='line'></div>
          <figure className='education-detail'>
            <h1>한국산업기술대학교 졸업(야간)</h1>
            <dl>
              <dt>재학기간</dt>
              <dd>2014.03~2018.02</dd>
              <dt>전공</dt>
              <dd>광융합시스템공학</dd>
            </dl>
          </figure>
          <div className='line'></div>
          <figure className='education-detail'>
            <h1>단국공업고등학교 졸업</h1>
            <dl>
              <dt>재학기간</dt>
              <dd>2011.03~2014.02</dd>
              <dt>전공</dt>
              <dd>전자기계</dd>
            </dl>
          </figure>

        </section>
      </article>

      <article className='profile-contents contactus'>
        <h1 className='contents-title'>Contact Us</h1>
        <section className='contactus-wrap'>
          <div className='contactus-guide'>
            <h1>
              궁금한 사항이 있으시면
              <br />
              <strong>언제든</strong> 연락 주시기 바랍니다.
              <br />
            </h1>
            <p>연락가능시간 00:00~24:00</p>
          </div>
          <div className='contact-list'>
            <figure>
              <img src={require('./assets/img/icon_phone.png')} />
              <span>010-0000-0000</span>
            </figure>
            <figure>
              <img src={require('./assets/img/icon_email.png')} />
              <span>xxxxxx@naver.com</span>
            </figure>
            <figure>
              <img src={require('./assets/img/icon_kakao.png')} />
              <span>xxxxxx</span>
            </figure>
            <figure>
              <img src={require('./assets/img/icon_github.png')} />
              <span><a href='https://github.com/yonghwan1231' target='_blank'>yonghwan1231</a></span>
            </figure>
          </div>
        </section>

      </article>

      <article className='profile-contents greeting'>
        ❝감사합니다!❞
      </article>

    </div>
  );
}

export default App;
