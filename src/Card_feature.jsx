import './App.css';

function Card_feature() {
  return (


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

  )
}

export default Card_feature