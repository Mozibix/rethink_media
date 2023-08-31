import logo from "/svgs/logo.svg";

const Footer = () => {
  return (
    <>
      {/* -----------------------FOOTER SECTION---------------------- */}
      <footer>
        <div
          className="footer_inner"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="footer_left">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={logo} alt="logo" className="footer_logo" />
            </div>
            <div
              className="logo_text"
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Product by Retink Media UG
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="250"
                data-aos-duration="1000"
              >
                Bonn, Germany
              </p>
            </div>
          </div>
          <div className="footer_right">
            <div className="middle_text">
              <ul>
                <a
                  className="link_text"
                  href="#header"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <li>Get Early Access</li>
                </a>
                <a
                  className="link_text"
                  href="#header"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <li>Provide Feedback</li>
                </a>
              </ul>
            </div>
            <div
              className="connect_us"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <h3>connect with us</h3>

              <ul className="special">
                {socialLinks.map((dataInfo, key) => {
                  return (
                    <a
                      key={key}
                      href={dataInfo.link}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <li>
                        <img src={dataInfo.icon_src} alt="social-icon" />
                      </li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p> Copyright &copy; 2021 Rethink</p>

          <ul>
            <li>privacy policy</li>
            <li>terms of service</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const socialLinks = [
  {
    id: 1,
    link: "#header",
    icon_src: "/svgs/footer_icon_1.svg",
  },
  {
    id: 2,
    link: "#header",
    icon_src: "/svgs/footer_icon_2.svg",
  },
  {
    id: 3,
    link: "#header",
    icon_src: "/svgs/footer_icon_3.svg",
  },
  {
    id: 4,
    link: "#header",
    icon_src: "/svgs/footer_icon_4.svg",
  },
  {
    id: 5,
    link: "#header",
    icon_src: "/svgs/footer_icon_5.svg",
  },
  {
    id: 6,
    link: "#header",
    icon_src: "/svgs/footer_icon_6.svg",
  },
];
