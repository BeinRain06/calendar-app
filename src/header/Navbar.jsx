import "./Navbar.css";
function Navbar({ current, handleViewIcon }) {
  return (
    <nav className="header_nav">
      <div className="nav_logo d-flex">
        <p className="logo d-flex">
          <span className="first_log mx-1">Carp</span>
          <span className="second_log">BounD</span>
        </p>
        <p className="label_mob_calendar">
          <span className="icon_shcool">
            <i className="bi bi-mortarboard-fill"></i>
          </span>
          calendar
        </p>
        <p className="label_desk_calendar">
          <span className="icon_shcool">
            <i className="bi bi-mortarboard-fill"></i>
          </span>
          scholar academic calendar
        </p>
        <ul className="menu_wrap" onClick={handleViewIcon}>
          <div className="menu_content">
            <div className={current ? `icon_content active` : `icon_content`}>
              {current ? (
                <div className="icon_cross_wrapper">
                  <i className="bi bi-x-lg"></i>
                </div>
              ) : (
                <div className="icon_box_wrapper ">
                  <i className="bi bi-box-seam-fill"></i>
                </div>
              )}
            </div>
          </div>
        </ul>
        <ul className="menu_wrap_decorative">
          <div className="menu_decor_content">
            <div className="icon_content">
              <div className="icon_box_wrapper ">
                <i className="bi bi-box-seam-fill"></i>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
