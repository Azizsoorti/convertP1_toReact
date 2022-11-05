import { Link } from "react-router-dom";
function Header() {
  return (

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
                    <li className="nav-item">

                      <Link to="banner" className="nav-link  fw-bold px-3 " >  HOME </Link>


                    </li>

                    <li className="nav-item">

                      <Link to="categories" className="nav-link fw-bold px-3  " >
                        {" "}
                        SERVICE
                      </Link>
                    </li>
                    <li className="nav-item">

                      <Link to="features" className="nav-link fw-bold px-3  ">
                        {" "}
                        FEATURES
                      </Link>

                    </li>
                    <li className="nav-item">

                      <Link to="price" className="nav-link fw-bold px-3  ">
                        PRICING
                      </Link>

                    </li>
                    <li className="nav-item">

                      <Link to="questions" className="nav-link fw-bold px-3  ">
                        FAQ
                      </Link>

                    </li>
                    <li className="nav-item">

                      <Link to="event" className="nav-link fw-bold px-3  " href="#event">
                        PAGES
                      </Link>

                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header