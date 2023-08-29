import logo from "/svgs/logo.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header_inner container_main">
          <img src={logo} alt="rethink-logo" className="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
