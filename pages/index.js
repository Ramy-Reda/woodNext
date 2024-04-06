import home from "../styles/index.module.scss";
import Image from "next/image";
import ImageCuroser from "../public/img/xx.png";
import feature1 from "../public/img/feature/feature_1.png";
import feature2 from "../public/img/feature/feature_2.png";
import feature3 from "../public/img/feature/feature_3.png";
import feature4 from "../public/img/feature/feature_4.png";
import product1 from "../public/img/product/product_1.png";
import product2 from "../public/img/product/product_2.png";
import product3 from "../public/img/product/product_3.png";
import product4 from "../public/img/product/product_4.png";
import product5 from "../public/img/product/product_5.png";
import product6 from "../public/img/product/product_6.png";
import product7 from "../public/img/product/product_7.png";
import product8 from "../public/img/product/product_8.png";
import logo1 from "../public/img/client_logo/client_logo_1.png";
import logo2 from "../public/img/client_logo/client_logo_2.png";
import logo3 from "../public/img/client_logo/client_logo_3.png";
import logo4 from "../public/img/client_logo/client_logo_4.png";
import logo5 from "../public/img/client_logo/client_logo_5.png";
import timer from "../public/img/offer_img.png";
import { useRef } from "react";
import { useEffect } from "react";

export default function index(props) {
  const picts = useRef();
  const Next = useRef();
  const Prev = useRef();
  const container = useRef();
  const dots = useRef();
  const sliders = useRef();
  const nextAwesome = useRef();
  const prevAwesome = useRef();
  const awesomeSlides = useRef();
  const time = useRef();
  const bests = useRef();
  const bestsAuto = useRef();


  useEffect(() => {
    const pict = picts.current.querySelectorAll(".styles_box__e_jBy");
    const dot = dots.current.querySelectorAll(".styles_dot__rMfZF");
    const btnNext = Next.current;
    const btnPrev = Prev.current;
    let counter = 0;
    
    btnNext.addEventListener("click", () => nextSlide() );
    function nextSlide() {
      
      pict[counter].style.animation = "styles_next1__DNB0W .5s ease-in-out forwards";
      if (counter == pict.length - 1) {
        counter = 0;
      } else {
        counter++;
      }

      pict[counter].style.animation = "styles_next2__zl__r .5s ease-in-out forwards";
      indicator ();
    }
    btnPrev.addEventListener("click", () => prevSlide ());
    function prevSlide () {
      pict[counter].style.animation = "styles_prev1__A_UX8 .5s ease-in-out forwards";
      if (counter == 0) {
        counter = pict.length - 1;
      } else {
        counter--;
      }

      pict[counter].style.animation = "styles_prev2__P_Ij2 .5s ease-in-out forwards";
      indicator ();
    }
    function atuoSlide () {
      let clear = setInterval(() => {
        nextSlide();
        indicator ();
      }, 1000);
      container.current.addEventListener("mouseover", () => clearInterval(clear));
    }
    atuoSlide();
    function indicator () {
      for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' styles_active__A7HWZ', '');
      }
      dot[counter].className += (' styles_active__A7HWZ');
    }
    dot.forEach(ele => {
      ele.addEventListener('click', (e) => {
          e.target.classList.add('styles_active__A7HWZ')
          const attrNum = e.target.getAttribute('attr');
          if (counter > attrNum) {
            pict[counter].style.animation = "styles_next1__DNB0W .5s ease-in-out forwards";
            counter = attrNum ;
            pict[counter].style.animation = "styles_next2__zl__r .5s ease-in-out forwards";
          } else if (counter == attrNum) {
            return;
          } else {
            pict[counter].style.animation = "styles_prev1__A_UX8 .5s ease-in-out forwards";
            counter = attrNum;
            pict[counter].style.animation = "styles_prev2__P_Ij2 .5s ease-in-out forwards";
          }
          indicator ();
      })
    });

    const slider = sliders.current.querySelectorAll(".styles_slider__3jxud");
    const nextSliders = nextAwesome.current;
    const prevSliders = prevAwesome.current;;
    let counterSlide = 0;

    nextSliders.addEventListener('click', () => {
      slider[counterSlide].style.animation ="styles_nxtAwesome1__IIhC9 .7s ease-in-out forwards";
      if (counterSlide == slider.length - 1) {
        counterSlide = 0;
      } else {
        counterSlide++;
      }
      slider[counterSlide].style.animation ="styles_nxtAwesome2__MG_NV .7s ease-in-out forwards";
    });

    prevSliders.addEventListener('click', () => {
      slider[counterSlide].style.animation ="styles_prevAwesome1__ysbsX .7s ease-in-out forwards";
      if (counterSlide == 0) {
        counterSlide = slider.length - 1
      } else {
        counterSlide--;
      }
      slider[counterSlide].style.animation ="styles_prevAwesome2__y_VZZ .7s ease-in-out forwards";
    });

    const cleared = setInterval(() => {
      slider[counterSlide].style.animation ="styles_nxtAwesome1__IIhC9 .7s ease-in-out forwards";
      if (counterSlide == slider.length - 1) {
        counterSlide = 0;
      } else {
        counterSlide++;
      }
      slider[counterSlide].style.animation ="styles_nxtAwesome2__MG_NV .7s ease-in-out forwards";
    }, 1000);

    awesomeSlides.current.addEventListener("mouseover", () => {
      clearInterval(cleared);
    })
    let timer = time.current;
    let sales = new Date("3 23 2025 9:40:59").getTime();
    setInterval(() => {
      let endSalse = new Date().getTime(),
      diff = sales - endSalse,
      days = Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )),
      minutes = Math.floor(diff % (1000 * 60 * 60 ) / ((1000 * 60 ) )),
      secondes = Math.floor(diff % (1000 * 60) / 1000);
      timer.querySelector("p .days").innerHTML = days;
      timer.querySelector("p .houre").innerHTML = hours;
      timer.querySelector("p .minute").innerHTML = minutes;
      timer.querySelector("p .seconde").innerHTML = secondes;
    }, 1000);

    const rowBest = bests.current.querySelector(`.styles_rowBest__o9tyU`);
    const best = bests.current;
    const rowBtns = bests.current.querySelectorAll(`.styles_btns__3f0v9 span`);
    const firstCardWidth = bests.current.querySelector(`.styles_rowBest__o9tyU .styles_box__e_jBy`).offsetWidth;
    const rowBoxs = [...bestsAuto.current.children];
    let cardPreview = Math.round(rowBest.offsetWidth / firstCardWidth);
    rowBoxs.slice(-cardPreview).reverse().forEach(element => {
      rowBest.insertAdjacentHTML("afterbegin", element.outerHTML);
    });
    rowBoxs.slice(0, cardPreview).forEach(element => {
      rowBest.insertAdjacentHTML("beforeend", element.outerHTML);
    });
    rowBtns.forEach(ele => {
      ele.addEventListener("click", () =>{
        rowBest.scrollLeft+= ele.id === "prev" ? -firstCardWidth : firstCardWidth;
      })
    });
    let isDragging = false, startX, startScrollLeft, timeOuteId;
    const dragStart = (e) => {
      isDragging = true;
      rowBest.classList.add(`${home.dragging}`);
      startX = e.pageX;
      startScrollLeft = rowBest.scrollLeft;
    }
    const dragging = (e) => {
      if (!isDragging) {return}
      rowBest.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    const dragStop = () => {
      isDragging = false;
      rowBest.classList.remove(`${home.dragging}`);
    }
    const autoPlay = () => {
      if(window.innerWidth < 800) return;
      timeOuteId = setTimeout(() => rowBest.scrollLeft += firstCardWidth , 2500)
    }
    autoPlay();
    const InfinitScroll = () => {
        if (rowBest.scrollLeft === 0) {
          rowBest.classList.add(`${home.noTansition}`);
          rowBest.scrollLeft = rowBest.scrollWidth - (2 * rowBest.offsetWidth);
          rowBest.classList.remove(`${home.noTansition}`);
      } else if (Math.ceil(rowBest.scrollLeft) === rowBest.scrollWidth - rowBest.offsetWidth) {
        rowBest.classList.add(`${home.noTansition}`);
        rowBest.scrollLeft = rowBest.offsetWidth;
        rowBest.classList.remove(`${home.noTansition}`);
      }
      clearTimeout(timeOuteId);
      if (!best.matches(":hover")) {
        autoPlay();
      }
    }
    rowBest.addEventListener("mousemove", dragging);
    rowBest.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragStop);
    rowBest.addEventListener("scroll", InfinitScroll);
    best.addEventListener("mouseenter", () => clearTimeout(timeOuteId));
    best.addEventListener("mouseleave", autoPlay());

  }, [])
  
  return (
    <div className={home.container_fluid}>
      <div ref={container} className={home.slider_container}>
        <div ref={picts} className={home.slider}>
          <div className={`${home.box} ${home.active}`}>
            <div className={home.wordes}>
              <h2>wood & cloth sofa </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero facere rem labore illum facilis optio tempora modi sint omnis! Commodi!</p>
              <button>buy now</button>
            </div>
            <Image src={ImageCuroser} alt="kanaba" />
          </div>
          <div className={home.box}>
            <div className={home.wordes}>
              <h2>wood & cloth sofa </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero facere rem labore illum facilis optio tempora modi sint omnis! Commodi!</p>
              <button>buy now</button>
            </div>
            <Image src={ImageCuroser} alt="kanaba" />
          </div>
          <div className={home.box}>
            <div className={home.wordes}>
              <h2>wood & cloth sofa </h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero facere rem labore illum facilis optio tempora modi sint omnis! Commodi!</p>
              <button>buy now</button>
            </div>
            <Image src={ImageCuroser} alt="kanaba" />
          </div>
        </div>
        <div className={home.btn}>
            <span ref={Next} className={home.next}>{`>`}</span>
            <span ref={Prev} className={home.prev}>{`<`}</span>
        </div>
        <div ref={dots} className={home.dots}>
          <span attr= '0' className={`${home.dot} ${home.active}`}></span>
          <span attr= '1' className={home.dot}></span>
          <span attr= '2' className={home.dot}></span>
        </div>
        
    </div>
      {/* category */}
      <div className={home.container}>
        <header className={home.headerCat}>Featured Category</header>
        <div className={home.cat}>
          <div className={home.box}>
            <div className={home.words}>
              <span>Premium Quality</span>
              <p>Latest foam Sofa</p>
              <a href="#">EXPLORE NOW {`>`}</a>
            </div>
            <div className={home.img}>
              <Image src={feature1} alt="feature" />
            </div>
          </div>
          <div className={home.box}>
            <div className={home.words}>
              <span>Premium Quality</span>
              <p>Latest foam Sofa</p>
              <a href="#">EXPLORE NOW {`>`}</a>
            </div>
            <div className={home.img}>
              <Image src={feature2} alt="feature" />
            </div>
          </div>
          <div className={home.box}>
            <div className={home.words}>
              <span>Premium Quality</span>
              <p>Latest foam Sofa</p>
              <a href="#">EXPLORE NOW {`>`}</a>
            </div>
            <div className={home.img}>
              <Image src={feature3} alt="feature" />
            </div>
          </div>
          <div className={home.box}>
            <div className={home.words}>
              <span>Premium Quality</span>
              <p>Latest foam Sofa</p>
              <a href="#">EXPLORE NOW {`>`}</a>
            </div>
            <div className={home.img}>
              <Image src={feature4} alt="feature" />
            </div>
          </div>
        </div>
      </div>
      {/* Awesome  */}
      <div className={home.container}>
        <div ref={awesomeSlides} className={home.awesomeSlide}>
          <div className={home.head}>
            <span>Awesome</span><span>Shop</span>
          </div>
          <div ref={sliders} className={home.sliderContainer}>
            <div className={`${home.slider} ${home.activeAwsome}`}>
              <div className={home.box}>
                  <Image src={product1} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart">heart</i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product2} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product3} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product4} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product5} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product6} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product7} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product8} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
            </div>
            <div className={home.slider}>
              <div className={home.box}>
                  <Image src={product1} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product2} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product3} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product4} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product5} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product6} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product7} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
              <div className={home.box}>
                  <Image src={product8} alt="product" />
                  <div className={home.text}>
                    <h4>Quartz Belt Watch</h4>
                    <h3>$150.00</h3>
                    <a href="#" className="add_cart">+ add to cart<i className="ti-heart"></i></a>
                  </div>
              </div>
            </div>
          </div>
          <div className={home.btnAwesome}>
            <span ref={nextAwesome}>next</span>
            <span>|</span>
            <span ref={prevAwesome}>previous</span>
          </div>
        </div>
      </div>
      <div className={home.container_fluid}>
        <div className={home.timerRow}>
          <Image src={timer} alt="ofer Image" /> 
          <div className={home.text}>
            <h1>Weekly Sale on 60% Off All Products</h1>
            <div ref = {time} className={home.time}>
              <p>
                <spna>Days</spna>
                <spna className="days"></spna>
              </p>
              <p>
                <spna>Houre</spna>
                <spna className="houre"></spna>
              </p>
              <p>
                <spna>MINUTES</spna>
                <spna className="minute"></spna>
              </p>
              <p>
                <spna>Second</spna>
                <spna className="seconde"></spna>
              </p>
            </div>
            <form action="">
              <input  className={home.txt} type="text" />
              <input  className={home.sub} type="Submit" value="book now"/>
            </form>
          </div>
        </div>
      </div>
      {/* Best Sellers  */}
      <div className={home.container}>
        <div ref={bests} className={home.bests}>
          <div className={home.btns}>
            <span id="next" className={home.btnsNxt}>Next</span>
            <span id="prev" className={home.btnsPrv}>Previous</span>
          </div>
          <div className={home.bestSlider}>
            <div ref={bestsAuto} className={home.rowBest}>
              <div className={home.box}>
                <Image hassan="false" src={product1} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product2} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product3} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product4} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product5} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product6} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product7} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
              <div className={home.box}>
                <Image hassan="false" src={product8} alt="Products" />
                <div className={home.text}>
                  <p className={home.h1}>Quartz Belt Watch</p>
                  <p className={home.h3}>$150.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NEWSLETTER */}
      <div className={home.container_fluid}>
        <div className={home.rowLetter}>
          <div className={home.center}>
            JOIN OUR NEWSLETTER
          </div>
          <div className={home.headr}>
            Subscribe to get Updated with new offers
          </div>
          <form action="">
            <input type="text" placeholder="Enter Email Address" />
            <input type="submit" value="Subscribe Now" />
          </form>
        </div>
      </div>
      {/* Logo */}
      <div className={home.container}>
        <div className={home.logoRow}>
          <div className={home.boxes1}>
            <Image src={logo1} alt="Logo" />
            <Image className={home.hover} src={logo2} alt="Logo" />
            <Image src={logo3} alt="Logo" />
            <Image src={logo4} alt="Logo" />
            <Image src={logo5} alt="Logo" />
            <Image src={logo1} alt="Logo" />
            <Image src={logo3} alt="Logo" />
            <Image className={home.hover} src={logo2} alt="Logo" />
            <Image src={logo4} alt="Logo" />
            <Image src={logo5} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
