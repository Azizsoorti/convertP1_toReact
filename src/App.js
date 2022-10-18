import './App.css';

function App() {
  return (
<>
  

<div style={{ overflowX: "hidden" }}>
  {/* header */}
  <section id="header" className="container-fluid bg-white fixed-top">
    <div className="container">
      <div className="row bg-white ">
        <div className="col-6 ">
          <img className="py-3" src="./images/logo.webp" alt="" />
        </div>
        <div className="col-6 ">
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ms-auto  ">
                  <li className="nav-item ">
                    <a className="nav-link  fw-bold px-3 " href="#header">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold px-3  " href="#categories">
                      {" "}
                      SERVICE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold px-3  " href="#features">
                      {" "}
                      FEATURES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold px-3  " href="#price">
                      PRICING
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold px-3  " href="#questions">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold px-3  " href="#event">
                      PAGES
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/* banner */}
  <section id="banner" style={{ backgroundColor: "rgb(105, 194, 253)" }}>
    <div className="container">
      <div className="row  pt-sm-5  align-items-center banner_row">
        <div className="  col-lg-6   ">
          <div className="row">
            <h2 className="col-lg-12 text-white fw-bold fs-1">
              The Best App in Universe{" "}
            </h2>
            <p className="col-lg-12 lead text-white py-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              distinctio <br /> nisi accusamus at inventore placeat assumenda
              quod.
            </p>
            <a
              className=" col-sm-4 text-center btn_banner  fw-bold rounded-pill text-decoration-none  p-2 "
              href=""
            >
              LOAD MORE ITEM
            </a>
          </div>
        </div>
        <div className=" col-lg-6">
          <img src="./images/iphone.png" alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  </section>
  {/*CATEGORIES*/}
  <section id="categories" className="bg-white">
    <div className="container">
      <div className="row py-5 categories_row">
        <div className="offset-lg-2 col-lg-8  text-center">
          <h2 className="fw-bold pt-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="opacity-50">
            {" "}
            consecteturdolor sit amet consectetur adipisicing elitLorem ipsum
            dolor sit amet consecteturdolor adipisicing elit. Nobis in aperiam
            error maxime lab
          </p>
        </div>
      </div>
      <div className="row py-5 categories_row">
        <div className=" col-lg-4  col-sm-6 text-center  ">
          <img
            src="./images/rocket (1).png"
            alt=""
            style={{ width: "3.5rem" }}
          />
          <h5 className="mt-4 ">Maintenance </h5>
          <p className="text-center opacity-50">
            {" "}
            consecteturdolor sit amet consectetur adipisicing elitLorem ipsum
            dolor sit, amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div className="  col-lg-4 col-sm-6 text-center ">
          <img src="./images/physics.png" alt="" style={{ width: "3rem" }} />
          <h5 className="mt-4   ">Lntenance </h5>
          <p className="opacity-50">
            consecteturdolor sit amet consectetur adipisicing elitLorem ipsum,
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="  col-lg-4 col-sm-6 text-center ">
          <img src="./images/award.png" alt="" style={{ width: "3rem" }} />
          <h5 className="mt-4  ">Kntenance </h5>
          <p className="opacity-50">
            {" "}
            consecteturdolor sit amet consectetur adipisicing elitLorem ipsum
            dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Believe */}
  <section id="believe" style={{ backgroundColor: "rgb(238, 242, 245)" }}>
    <div className="container ">
      <div className="row align-items-center py-5">
        <div className="  col-lg-6 col-sm-6">
          <div className="believe_row">
            <h4 className="col-lg-12 fw-bold fs-1">
              We Beleive that <br /> interiotrv beautifies the <br /> Total
              Architecture
            </h4>
            <p className="col-lg-12 opacity-50 fs-6 py-4">
              Lorem ipsum dolor sit amet consectetur,?, e veniam a tempora
              quibusdam blanditiis iusto deleniti eaque, repellendus nesciunt
              consequatur. Fugit eveniet et quaerat voluptates numquam omnis
              nihil excepturi possimus, voluptas repellendus modi ab, facere quo
              aliquam sed.
            </p>
            <a
              className="col-sm-4 text-center btn_believe text-white fw-bold rounded-pill text-decoration-none px-4 py-2 "
              href=""
            >
              SEE DETAILS
            </a>
          </div>
        </div>
        <div className=" col-lg-6 col-sm-6">
          <img src="./images/believe.png" alt="beleive" />
        </div>
      </div>
    </div>
  </section>
  {/* features */}
  <section id="features" className="bg-white">
    <div className="container">
      <div className="row py-3">
        <div className=" col-lg-12 text-center  mt-5">
          <h4 className="fs-1 fw-bold"> Som e Features Made Us Unique</h4>
          <p className="opacity-50">
            Lorem ipsum dolor dolor sit ame dolor dolor sit amet.
          </p>
        </div>
      </div>
      <div className="row py-5 ">
        <div className=" col-lg-4   text-center pb-4">
          <div className="p-5 features_col">
            <img
              className=""
              src="./images/icon4.webp"
              alt=""
              style={{ width: "3rem" }}
            />
            <h4 className="mt-4">Expert Technicians </h4>
          </div>
        </div>
        <div className="  col-lg-4  text-center pb-4">
          <div className="p-5 features_col">
            <img src="./images/icon5.webp" alt="" style={{ width: "3rem" }} />
            <h4 className="mt-4 ">Professional Service</h4>
          </div>
        </div>
        <div className="   col-lg-4  text-center  pb-4">
          <div className="p-5 features_col">
            <img src="./images/icon6.webp" alt="" style={{ width: "3rem" }} />
            <h4 className="mt-4 ">Great Support</h4>
          </div>
        </div>
        <div className=" col-lg-4   text-center  pb-4">
          <div className="p-5 features_col">
            <img src="./images/icon7.webp" alt="" style={{ width: "3rem" }} />
            <h4 className="mt-4">Maintenance </h4>
          </div>
        </div>
        <div className="  col-lg-4  text-center pb-4 ">
          <div className="p-5 features_col">
            <img src="./images/icon8.webp" alt="" style={{ width: "3rem" }} />
            <h4 className="mt-4 ">Intenance </h4>
          </div>
        </div>
        <div className="   col-lg-4  text-center  pb-4">
          <div className="p-5 features_col">
            <img src="./images/icon9.webp" alt="" style={{ width: "3rem" }} />
            <h4 className="mt-4 ">Lntenance </h4>
          </div>
        </div>
      </div>
    </div>
  </section>



  {/* Event */}
  <section id="event" className=" video_area " style={{ backgroundImage: "url(./images/video-area.webp)" }}>
    <div className="vid">
      <div className="vid_icon" style={{ backgroundImage: "url(./images/video_icon.webp)" }}></div>
    </div>
  </section>



  {/* card-feature  */}
  <section id="card-feature" className="bg-white">
    <div className="container">
      <div className="row pt-5 mt-4">
        <div className="col-lg-12 text-center card-feature_col_12 ">
          <h1>Some Features that Made us Unique</h1>
          <p className="opacity-50">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
      </div>
      <div className="row py-5 mb-4 owl-carousel owl-theme  ">
        <div className="col-12 col-lg-4 col-sm-6">
          <img src="./images/card1.webp" alt="card_image"/>
        </div>
        <div className="col-12 col-lg-4 col-sm-6">
          <img src="./images/card2.webp" alt="card_image"/>
        </div>
        <div className="col-12 col-lg-4 col-sm-6">
          <img src="./images/card3.webp" alt="card_image"/>
        </div>
      </div>
    </div>
  </section>
  {/* price */}
  <section id="price" style={{ backgroundColor: "rgb(238, 242, 245)" }}>
    <section id="price">
      <div className="container">
        <div className="row text-center py-5">
          <div className="col-lg-12">
            <h1>Choose the Perfect Plan for you</h1>
            <p className="opacity-50">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6 px-3 ">
            <div className="price_card  bg-white mb-5">
              <div className="top_card py-4 ">
                <div className="row ">
                  <div className="col-sm-6 left_top text-center">
                    <h4>Standard</h4>
                    <p className="opacity-50">For the individuals</p>
                  </div>
                  <div className="col-sm-6 right_top text-center">
                    <h1>£199</h1>
                  </div>
                </div>
              </div>
              <hr className="opacity-25" />
              <div className="center_card py-2 text-center">
                <p className="opacity-50">
                  “Few would argue that, despite the <br /> advancements
                </p>
              </div>
              <hr className="opacity-25" />
              <div className="bottom_card px-3 pb-4 ">
                <p className="opacity-50">2.5 GB Free Photos</p>
                <p className="opacity-50">Secure Online Transfer Indeed</p>
                <p className="opacity-50">Unlimited Styles for interface</p>
                <p className="opacity-50">Reliable Customer Service</p>
                <p className="opacity-50">Manual Backup Provided</p>
                <button
                  className=" mt-2 bg-dark text-white"
                  style={{ width: "12rem", height: "3rem" }}
                >
                  Purchase Plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-3">
            <div className="price_card  bg-white mb-5">
              <div className="top_card py-4">
                <div className="row">
                  <div className="col-sm-7 left_top text-center">
                    <h4 className="">Business</h4>
                    <p className="opacity-50 ">For the small Company</p>
                  </div>
                  <div className="col-sm-5 right_top text-center">
                    <h1>£399</h1>
                  </div>
                </div>
              </div>
              <hr className="opacity-25" />
              <div className="center_card py-2 text-center">
                <p className="opacity-50">
                  “Few would argue that, despite the <br /> advancements
                </p>
              </div>
              <hr className="opacity-25" />
              <div className="bottom_card px-3 pb-4 ">
                <p className="opacity-50">2.5 GB Free Photos</p>
                <p className="opacity-50">Secure Online Transfer Indeed</p>
                <p className="opacity-50">Unlimited Styles for interface</p>
                <p className="opacity-50">Reliable Customer Service</p>
                <p className="opacity-50">Manual Backup Provided</p>
                <button
                  className=" mt-2 bg-dark text-white"
                  style={{ width: "12rem", height: "3rem" }}
                >
                  Purchase Plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 px-3">
            <div className="price_card  bg-white mb-5">
              <div className="top_card py-4">
                <div className="row">
                  <div className="col-sm-7 left_top text-center">
                    <h4>Ultimate</h4>
                    <p className="opacity-50 ">For the large Company</p>
                  </div>
                  <div className="col-sm-5 right_top text-center">
                    <h1>£199</h1>
                  </div>
                </div>
              </div>
              <hr className="opacity-25" />
              <div className="center_card py-2 text-center">
                <p className="opacity-50">
                  “Few would argue that, despite the <br /> advancements
                </p>
              </div>
              <hr className="opacity-25" />
              <div className="bottom_card px-3 pb-4 ">
                <p className="opacity-50">2.5 GB Free Photos</p>
                <p className="opacity-50">Secure Online Transfer Indeed</p>
                <p className="opacity-50">Unlimited Styles for interface</p>
                <p className="opacity-50">Reliable Customer Service</p>
                <p className="opacity-50">Manual Backup Provided</p>
                <button
                  className=" mt-2 bg-dark text-white"
                  style={{ width: "12rem", height: "3rem" }}
                >
                  Purchase Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Questions */}
    <section id="questions" className="bg-white">
      <div className="container">
        <div className="row py-5 text-center">
          <div className="col-lg-12">
            <h1>Frequently Asked Questions</h1>
            <p className="opacity-50">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-3  questions_col3">
            <div className="counter1 text-center ps-md-5 ms-md-5">
              <h2 className="text-info fw-bold" style={{ fontSize: "3rem" }}>
                5962
              </h2>
              <p className="opacity-50">Projects Completed</p>
            </div>
            <div className="counter2 text-center ps-md-5 ms-md-5">
              <h2 className="text-info  fw-bold" style={{ fontSize: "3rem" }}>
                2394
              </h2>
              <p className="opacity-50">New Projects</p>
            </div>
            <div className="counter3 text-center ps-md-5 ms-md-5">
              <h2 className="text-info fw-bold" style={{ fontSize: "3rem" }}>
                1439
              </h2>
              <p className="opacity-50">Tickets Submitted</p>
            </div>
            <div className="counter4 text-center ps-md-5 ms-md-5">
              <h2 className="text-info fw-bold" style={{ fontSize: "3rem" }}>
                933
              </h2>
              <p className="opacity-50">Cup of Coffee</p>
            </div>
          </div>
          <div
            className="col-md-9 questions_col9"
            style={{ padding: "0 5rem" }}
          >
            <div className="question1">
              <h5 className="fw-bold">Are your Templates responsive?</h5>
              <p className="opacity-50">
                “Few would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior. While mens borderline-inappropriate
                behavior.
              </p>
            </div>
            <div className="question2 my-5">
              <h5 className="fw-bold">
                Does it have all the plugin as mentioned?
              </h5>
              <p className="opacity-50">
                “Few would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior. While mens borderline-inappropriate
                behavior.
              </p>
            </div>
            <div className="question3">
              <h5 className="fw-bold">
                Can i use the these theme for my client?
              </h5>
              <p className="opacity-50">
                “Few would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior. While mens borderline-inappropriate
                behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* download */}
    <section id="download" style={{ backgroundColor: "rgb(105, 194, 253)" }}>
      <div className="container">
        <div className="row text-center text-white py-5 px-3">
          <div className="col-lg-12">
            <h2 className="fw-bold mt-4">Download This App Today!</h2>
            <p className="mt-4">
              It wont be a bigger problem to find one video game lover in your
              neighbor. Since the introduction of Virtual Game, it has been
              achieving great heights so far as its popularity and technological
              advancement are concerned.
            </p>
          </div>
        </div>
        <div className="row pb-5 ">
          <div className=" col-md-6 pb-5 download_btn  ">
            <div
              className="button bg-white text-center py-2  float-end download_btn-inner"
              style={{ width: "15rem", height: "5rem" }}
            >
              <div className="row download_inner_row">
                <div className="col-sm-4 pt-2 ps-4 download_left">
                  <img
                    src="./images/apple-logo.png"
                    alt=""
                    style={{ width: "2.5rem" }}
                  />
                </div>
                <div className="col-sm-8 pe-5 download_right">
                  <h3 className="fw-bold " href="">
                    Available
                    <p className="lead ">on App Store</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-6 pb-5  download_btn">
            <div
              className="button bg-white text-center py-2 download_btn-inner "
              style={{ width: "15rem", height: "5rem" }}
            >
              <div className="row">
                <div className="col-sm-4 pt-2 ps-4 download_left">
                  <img
                    src="./images/android-logo.png"
                    alt=""
                    style={{ width: "2.5rem" }}
                  />
                </div>
                <div className="col-sm-8 pe-5 download_right">
                  <h3 className="fw-bold " href="">
                    Available
                    <p className="lead">on App Store</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* footer */}
    <section id="footer" className="bg-dark">
      <div className="container">
        <div className="row text-white py-5 ">
          <div className="col-md-3 footer_col3">
            <h5 className="pb-4">Top Products</h5>
            <p>Managed Website</p>
            <p>Manage Reputation</p>
            <p>Power Tools</p>
            <p>Marketing Service</p>
          </div>
          <div className="col-md-6 footer_col6 ">
            <h5 className="pb-4">Newsletter</h5>
            <p>
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <div className="row">
              <div className="col-md-8 ">
                <input
                  type="text"
                  placeholder="Enter Email"
                  style={{ width: "100%", height: "2.5rem" }}
                  className="rounded-pill "
                />
              </div>
              <div className="col-md-4 subscribe_btn">
                <button
                  className="rounded-pill text-white "
                  style={{
                    width: "100%",
                    height: "2.5rem",
                    backgroundColor: "rgb(105, 194, 253)"
                  }}
                >
                  SUBSCRIBE{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 footer_col3">
            <h5 className="pb-4">Instragram Feed</h5>
            <div className="row  ">
              <div className="d-flex justify-content-around">
                <div className="col-sm-3  ">
                  {" "}
                  <img src="./images/insta2.webp" alt="" />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <img src="./images/insta3.webp" alt="" />
                </div>
                <div className="col-sm-3 ">
                  {" "}
                  <img src="./images/insta4.webp" alt="" />
                </div>
                <div className="col-sm-3 ">
                  {" "}
                  <img src="./images/insta1.webp" alt="" />{" "}
                </div>
              </div>
            </div>
            <div className="row pt-3 ">
              <div className="d-flex justify-content-around ">
                <div className="col-sm-3">
                  {" "}
                  <img src="./images/insta5.webp" alt="" />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <img src="./images/insta6.webp" alt="" />{" "}
                </div>
                <div className="col-sm-3">
                  {" "}
                  <img src="./images/insta7.webp" alt="" />
                </div>
                <div className="col-sm-3">
                  {" "}
                  <img src="./images/insta8.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row copy_row pb-5 ">
          <div className="col-md-8 pb-4 copy_col8">
            <p className="text-white">
              Copyright © 2022 All rights reserved | This portfolio has been
              made By <span className="text-info"> Aziz Soorti </span>
            </p>
          </div>
          <div className="col-md-4 copy_col4">
            <div className="social_media float-end">
              <a
                className="p-3 text-decoration-none"
                href="https://www.facebook.com/azizsoorti"
              >
                {" "}
                <img
                  src="./images/facebook.png"
                  alt=""
                  style={{ width: "2rem" }}
                />{" "}
              </a>
              <a className="p-3" href="#">
                {" "}
                <img
                  src="./images/gmail.png"
                  alt=""
                  style={{ width: "2rem" }}
                />
              </a>
              <a
                className="p-3 text-decoration-none"
                href="https://www.linkedin.com/in/azizsoorti/"
              >
                {" "}
                <img
                  src="./images/linkedin.png"
                  alt=""
                  style={{ width: "2rem" }}
                />{" "}
              </a>
              <a className="p-3" href="https://github.com/Azizsoorti">
                {" "}
                <img
                  src="./images/github.png"
                  alt=""
                  style={{ width: "2rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</div>



</>
  );
}

export default App;
