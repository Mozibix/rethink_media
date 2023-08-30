import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import YouTubeEmbed from "./(components)/YoutubeEmbed";
import { ActivateBox, BoxData } from "./(components)/boxData";
import banner from "/svgs/avatar_img.svg";

function App() {
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
                <h2 className="hero_header ">
                  Get Advanced AI + Expert Created{" "}
                  <span className="secondary_text">logo</span>
                </h2>
                <p>
                  Boost your sales 10x faster with content customized by our
                  unique partnership of human creativity and AI optimization
                </p>
              </div>
            </div>

            <div className="hero_right">
              <div className="hero_right_inner">
                <img src={banner} alt="avater-img" className="hero-banner" />
              </div>
            </div>
          </div>
        </section>

        {/* ----------EXPLAINER SECTION---------- */}

        <section className="explainer_sec">
          <div className="explainer_inner ">
            <h2 className="secondary_text medium_text">explainer video</h2>
            <div className="explainer_video">
              <YouTubeEmbed videoId={videoId} />
            </div>

            {/* BOX SECTION */}
            <div className="explainer_flexbox">
              <div className="explainer_flexbox_inner">
                {/* BOX */}
                {BoxData.map((boxInfo, key) => {
                  return (
                    <div key={key} className="explainer_box">
                      <div className="explainer_box_inner container_main">
                        <div className="explainer_box_header">
                          <img
                            src={boxInfo.icon_src}
                            alt="icon"
                            className="box_icon"
                          />
                          <h3>{boxInfo.header_text}</h3>
                        </div>
                        <div className="explainer_box_quotes">
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
        <div className="transform_inner container_main">
          <h3 className="secondary_text medium_text">
            Transform your Creation Process
          </h3>

          <p>
            With a new approach to ordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </p>
        </div>
      </section>

      {/* ----------ACTIVATE SECTION---------- */}
      <section className="activate_sec">
        <div className="activate_inner container_main">
          <h3 className="secondary_text medium_text">
            Activate your business growth with RetinkContent.{" "}
          </h3>
          <p>
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
                    <div className="activate_box_inner">
                      <img
                        src={activateInfo.img_src}
                        alt="services"
                        className="activate_box_img"
                      />
                      <div className="activate_box_header">
                        <h3 className="light_text">
                          {activateInfo.header_text}
                        </h3>
                        <div className="short_line"></div>
                      </div>

                      <div className="activate_box_quotes">
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
          <h3 className="secondary_text medium_text">
            Sign Up For The BETA to see more
          </h3>

          <div className="buttons_business_email">
            <button>button name</button>
            <button>email</button>
          </div>

          <div className="buttons_notify">
            <button>
              <span>n</span>otify me
            </button>
          </div>

          <div className="buttons_sign_up">
            <button>Sign up as a freelance partner</button>
          </div>
        </div>
      </section>

      {/* ----------FOOTER SECTION---------- */}
      <Footer />
    </>
  );
}

export default App;
