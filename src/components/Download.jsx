function Download() {
  return (
  
   
   
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
   
  
  )
}

export default Download