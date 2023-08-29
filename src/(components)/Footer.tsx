import logo from "/svgs/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer_inner container_main">
          <img src={logo} alt="rethink-logo" className="footer_logo" />

          <p>footer</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
