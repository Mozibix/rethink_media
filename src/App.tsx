import { useState } from "react";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import YouTubeEmbed from "./(components)/YoutubeEmbed";
import { ActivateBox, BoxData } from "./(components)/boxData";
import banner from "/svgs/avatar_img.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  const [clicked, setClicked] = useState(false);
  const videoId = "ZvBenCpG3dY";
  return (
    <>
      {/* ----------HEADER SECTION---------- */}
      <Header />

      {/* ----------MAIN SECTION---------- */}
      <main>
        <section className="hero_sec">
          <div className="hero_inner container_main ">
            <div className="hero_left">
              <div className="hero_left_inner">
                <div
                  className="hero_header"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <h2>Get Advanced AI + Expert Created </h2>
                  <p className="secondary_text">logo</p>
                </div>
                <p
                  className="hero_left_bottom_text"
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1500"
                >
                  Boost your sales{" "}
                  <span className="fw_900 secondary_text">10x faster </span>
                  with content customized by our unique partnership of &nbsp;
                  <span className="fw_900 secondary_text">
                    human creativity and AI optimization
                  </span>
                </p>
              </div>
            </div>

            <div className="hero_right">
              <div
                className="hero_right_inner"
                data-aos="fade-up-right"
                data-aos-delay="150"
                data-aos-duration="2000"
              >
                <img src={banner} alt="avater-img" className="hero-banner" />
              </div>
            </div>
          </div>
        </section>

        {/* ----------EXPLAINER SECTION---------- */}

        <section className="explainer_sec">
          <div className="explainer_inner ">
            <h2
              className="secondary_text medium_text"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              explainer video
            </h2>
            <div
              className="explainer_video"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <YouTubeEmbed videoId={videoId} />
            </div>

            {/* BOX SECTION */}
            <div className="explainer_flexbox">
              <div className="explainer_flexbox_inner container_main">
                {/* BOX */}
                {BoxData.map((boxInfo, key) => {
                  return (
                    <div
                      key={key}
                      className="explainer_box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      <div className="explainer_box_inner">
                        <div
                          className="explainer_box_header"
                          data-aos="fade-up"
                          data-aos-delay="250"
                          data-aos-duration="1000"
                        >
                          <img
                            src={boxInfo.icon_src}
                            alt="icon"
                            className="box_icon"
                          />
                          <h3>{boxInfo.header_text}</h3>
                        </div>
                        <div
                          className="explainer_box_quotes"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration="1000"
                        >
                          <p>{boxInfo.box_quotes}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ----------TRANSFORM SECTION---------- */}
      <section className="transform_sec">
        <div className="transform_inner">
          <h3
            className="secondary_text medium_text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Transform your Creation Process
          </h3>

          <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
            With a new approach to ordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </p>
        </div>
      </section>

      {/* ----------ACTIVATE SECTION---------- */}
      <section className="activate_sec">
        <div
          className="activate_inner container_main"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h3
            className="secondary_text medium_text"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            Activate your business growth with RetinkContent.{" "}
          </h3>
          <p
            className="activate_top_quotes"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </p>

          {/* ACTIVATE FLEXBOX */}
          <div className="activate_flexbox">
            <div className="activate_flexbox_inner">
              {/* BOX */}
              {ActivateBox.map((activateInfo, key) => {
                return (
                  <div key={key} className="activate_box">
                    <div
                      className="activate_box_inner"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      <img
                        src={activateInfo.img_src}
                        alt="services"
                        className="activate_box_img"
                      />
                      <div
                        className="activate_box_header"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                      >
                        <p className="light_text">{activateInfo.header_text}</p>
                        <div className="short_line"></div>
                      </div>

                      <div
                        className="activate_box_quotes"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                      >
                        <p>{activateInfo.box_quotes}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ----------BUTTONS SECTION---------- */}

      <section className="buttons_sec">
        <div className="buttons_inner ">
          <h3
            className="secondary_text medium_text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Sign Up For The BETA to see more
          </h3>

          <div className="buttons_business_email">
            <a
              href="mailto:i@retink.io"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <button>button name</button>
            </a>
            <a
              href="mailto:i@retink.io"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              <button>email</button>
            </a>
          </div>

          <div
            className="buttons_notify"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <button onClick={() => setClicked(!clicked)}>
              {!clicked ? (
                <div>
                  <span>n</span>otify me
                </div>
              ) : (
                <div>
                  <span>s</span>uccessful
                </div>
              )}
            </button>
          </div>

          <div className="buttons_sign_up">
            <a
              href="https://rethinkmedia.org"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <button>Sign up as a freelance partner</button>
            </a>
          </div>
        </div>
      </section>

      {/* ----------FOOTER SECTION---------- */}
      <Footer />
    </>
  );
}

export default App;
