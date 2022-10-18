import './App.css';

function Footer() {
  return (
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



  )
}

export default Footer