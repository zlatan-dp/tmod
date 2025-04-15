export default function TmodLanding() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="logo-wrap">
            <img src="/tmod/img/logo-mob.png" alt="logo" />
          </div>
          <h1 className="hero-text">
            A New Frontier in&nbsp;TV Innovations and Accessories
          </h1>
        </div>
      </section>

      <section className="videoblock">
        <video autoPlay muted playsInline loop>
          <source src="/tmod/video/tmod-mob.mp4" type="video/mp4" />
        </video>
        <div className="videoblock-info">
          <h2 className="videoblock-title">TMOD Technology</h2>
          <p className="videoblock-text">
            is a central hub for new kinds of TV accessories, created for
            comfort, safety and information
          </p>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <div className="section-title">
            Main Benefits of TMOD Integrations
          </div>
          <div className="bentobox-1">
            <div className="bentobox-panel panel-1">
              <h3 className="bento-title">
                TV as a central hub for IoT and the Smart Home
              </h3>
              <p className="bento-text">
                Offer a cutting-edge TV with modules like lighting, climate
                control, and security.
              </p>
            </div>
            <div className="bentobox-panel panel-2">
              <h3 className="bento-title">
                Upselling potential and revenue growth
              </h3>
              <p className="bento-text">
                Unlike usual TV accessories, modules can be provided to end
                customers after TV was sold. Either by adding more modules to
                initial sales or upgrading their versions over the years.
              </p>
            </div>
            <div className="bentobox-panel panel-3">
              <h3 className="bento-title">
                Unique product with extra functions and USPs
              </h3>
              <p className="bento-text">
                Differentiate your brand with actually unique selling point.
              </p>
            </div>
            <div className="bentobox-panel panel-4">
              <h3 className="bento-title">Boosting ASP and increasing sales</h3>
              <p className="bento-text">
                Modules - are separately sold devices, which provides higher
                average sales price for the TV kit and adds flexibility of
                proposition for various target audiences.
              </p>
            </div>
            <div className="bentobox-panel panel-5">
              <h3 className="bento-title">
                New marketing opportunities & engagement cause
              </h3>
              <p className="bento-text">
                Tap into a growing market of Smart Home and get an extra
                opportunity for marketing with new unique tech in your products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="modules">
        <div className="container">
          <div className="modules-logo">
            <img src="/tmod/img/modules/modules-logo-mob.png" alt="logo" />
          </div>
          <div className="modules-wrap">
            <img src="/tmod/img/modules/modules-frame-mob.png" alt="modules" />
          </div>
        </div>
      </section>

      <section className="videoblock">
        <video autoPlay muted playsInline loop>
          <source src="/tmod/video/rgb-mob.mp4" type="video/mp4" />
        </video>
        <div className="videoblock-info">
          <h2 className="videoblock-title">
            RGB Light
            <br /> module
          </h2>
          <p className="videoblock-text">
            LED light panel
            <br /> with nice set of modes
            <br /> and ability to create custom ones
          </p>
        </div>
      </section>
    </>
  );
}
