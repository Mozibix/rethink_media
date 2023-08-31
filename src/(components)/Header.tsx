import logo from "/svgs/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div
          className="header_inner container_main"
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={logo} alt="rethink-logo" className="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
