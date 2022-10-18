import './App.css';


function Banner() {
  return (
    
  
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

  )
}

export default Banner