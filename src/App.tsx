import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import YouTubeEmbed from "./(components)/YoutubeEmbed";
import BoxData from "./(components)/boxData";
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
                <h2 className="hero_header">
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
          <div className="explainer_inner container_main">
            <h2 className="secondary_text">explainer video</h2>
            <div className="explainer_video">
              <YouTubeEmbed videoId={videoId} />
            </div>

            {/* BOX SECTION */}
            <div className="explainer_flexbox">
              <div className="explainer_flexbox_inner">
                {/* BOX */}
                {BoxData.map((boxinfo, key) => {
                  return (
                    <div key={key} className="explainer_box">
                      <div className="explainer_box_inner container_main">
                        <div className="explainer_box_header">
                          <img
                            src={boxinfo.icon_src}
                            alt="icon"
                            className="box_icon"
                          />
                          <h3>{boxinfo.header_text}</h3>
                        </div>
                        <div className="explainer_box_quotes">
                          <p>{boxinfo.box_quotes}</p>
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

      {/* ----------FOOTER SECTION---------- */}
      <Footer />
    </>
  );
}

export default App;
