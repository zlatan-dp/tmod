import { useRef } from "react";
import { sendEmailData } from "@/app/services/sendEmail.service";

export default function TmodLanding() {
  const contactForm = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const btnText = useRef(null);
  const spinner = useRef(null);
  const submitModal = useRef(null);
  const tvIcon = useRef(null);
  const submitModalMessage = useRef(null);
  const whatsup = useRef(null);
  const okBtn = useRef(null);

  const okSubmitMessage =
    "Thank you for reaching out! We’ve received your request and will be in touch shortly. We appreciate your interest and look forward to working with you.";

  const errorSubmitMessage =
    "Oops, something went wrong! We’re really sorry for the inconvenience. Please reach out to us on WhatsApp for a direct response.";

  const showModal = function (message, tv, showBtn) {
    submitModalMessage.current.textContent = message;
    tvIcon.current.src = tv;
    whatsup.current.classList.add("display-none");
    okBtn.current.classList.add("display-none");

    if (showBtn === "whatsup") {
      whatsup.current.classList.remove("display-none");
    } else {
      okBtn.current.classList.remove("display-none");
    }

    submitModal.current.classList.remove("is-hidden");
  };

  const toogleSpinner = function (isLoading) {
    if (isLoading) {
      spinner.current.classList.add("active");
      btnText.current.textContent = "Sending...";
      btnText.current.disabled = true;
    } else {
      spinner.current.classList.remove("active");
      btnText.current.textContent = "Send";
      btnText.current.disabled = false;
    }
  };

  const handlerSubmit = async function (e) {
    e.preventDefault();

    toogleSpinner(true);

    const data = {
      project: "TMOD",
      to: ["a.nikitin@kivismart.com"],
      subject: "TMOD",
      text: `Name: ${nameRef.current.value}, Email: ${emailRef.current.value}, Message: ${messageRef.current.value}`,
    };

    try {
      const responce = await sendEmailData(data);
      //   console.log(responce);
      if (!responce) {
        toogleSpinner(false);
        showModal(errorSubmitMessage, "/tmod/img/tv-sad-icon.svg", "whatsup");
      } else {
        toogleSpinner(false);
        showModal(okSubmitMessage, "/tmod/img/tv-smile-icon.svg", "ok");
        contactForm.current.reset();
      }
    } catch (error) {
      console.error(error);
      toogleSpinner(false);
      showModal(errorSubmitMessage, "/tmod/img/tv-sad-icon.svg", "whatsup");
    }
  };

  return (
    <>
      <div className="backdrop-submit is-hidden" ref={submitModal}>
        <div className="submit-message-wrap">
          <div className="submit-menu-close">
            <img src="/tmod/img/close-icon.svg" alt="close icon" />
          </div>
          <div className="tv-icon-wrap">
            <img
              src="/tmod/img/tv-smile-icon.svg"
              alt="tv icon"
              id="tv-icon"
              ref={tvIcon}
            />
          </div>
          <p className="submit-menu-message" ref={submitModalMessage}></p>
          <a
            href="https://wa.me/48781464422?text=Hello%20Anton!%20I’d%20like%20to%20discuss%20a%20B2B%20inquiry%20about%20KidsTV.%20Could%20you%20please%20provide%20more%20information%20on%20partnership%20options%20and%20how%20we%20can%20move%20forward?%20Thank%20you!"
            target="_blank"
            className="submit-message-btn link display-none"
            ref={whatsup}
            id="whatsup"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="submit-message-btn display-none"
            ref={okBtn}
            id="ok-btn"
          >
            OK
          </button>
        </div>
      </div>

      <section className="header">
        <div className="container">
          <a className="logo-wrap" href="#">
            <img src="/tmod/img/tmod_logo.svg" alt="tmod logo" />
          </a>
          <a className="contacts-link link" href="#contact-us-section">
            Contact Us
          </a>
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <div className="logo-wrap">
            <img src="/tmod/img/logo.png" alt="logo" />
          </div>
          <h1 className="hero-text">
            A New Frontier in&nbsp;TV Innovations and Accessories
          </h1>
          <div className="icon-wrap">
            <img src="/tmod/img/icon-arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </section>

      <div className="parallax">
        <section className="videoblock">
          <div className="videoblock-decor"></div>
          <video autoPlay muted playsInline loop>
            <source
              media="(max-width: 759px)"
              src="/tmod/video/tmod-mob.mp4"
              type="video/mp4"
            />
            <source src="/tmod/video/tmod.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="videoblock-info">
          <h2 className="videoblock-title">TMOD Technology</h2>
          <p className="videoblock-text">
            is a central hub for new kinds of
            <br /> TV accessories, created for comfort,
            <br /> safety and information
          </p>
        </section>

        <section className="benefits">
          <div className="container">
            <h2 className="section-title">
              Main Benefits of TMOD Integrations
            </h2>
            <div className="bentobox-1 default">
              <div className="bento-item bento-item-1">
                <div className="bentobox-panel panel-1">
                  <h3 className="bento-title">
                    TV as a central hub for IoT and the Smart Home
                  </h3>
                  <p className="bento-text">
                    Offer a cutting-edge TV with modules like lighting, climate
                    control, and security.
                  </p>
                  <div className="expand-btn">
                    <span>Expand</span>
                    <div className="expand-btn-arrow">
                      <img src="/tmod/img/benefits/arrow.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento-item bento-item-2">
                <div className="bentobox-panel panel-2">
                  <h3 className="bento-title">
                    Upselling potential and revenue growth
                  </h3>
                  <p className="bento-text">
                    Unlike usual TV accessories, modules can be provided to end
                    customers after TV was sold. Either by adding more modules
                    to initial sales or upgrading their versions over the years.
                  </p>
                </div>
              </div>
              <div className="bento-item bento-item-3">
                <div className="bentobox-panel panel-3">
                  <h3 className="bento-title">
                    Unique product with extra functions and USPs
                  </h3>
                  <p className="bento-text">
                    Differentiate your brand with actually unique selling point.
                  </p>
                </div>
              </div>
              <div className="bento-item bento-item-4">
                <div className="bentobox-panel panel-4">
                  <h3 className="bento-title">
                    Boosting ASP and increasing sales
                  </h3>
                  <p className="bento-text">
                    Modules - are separately sold devices, which provides higher
                    average sales price for the TV kit and adds flexibility of
                    proposition for various target audiences.
                  </p>
                </div>
              </div>
              <div className="bento-item bento-item-5">
                <div className="bentobox-panel panel-5">
                  <h3 className="bento-title">
                    New marketing opportunities & engagement cause
                  </h3>
                  <p className="bento-text">
                    Tap into a growing market of Smart Home and get an extra
                    opportunity for marketing with new unique tech in your
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="modules">
        <div className="container">
          <div className="modules-logo">
            <img src="/tmod/img/modules/modules-logo-mob.png" alt="logo" />
          </div>
          <div className="modules-wrap">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/tmod/img/modules/modules-frame-mob.png"
              />
              <img src="/tmod/img/modules/modules-frame.png" alt="modules" />
            </picture>
          </div>
        </div>
      </section>

      <div className="parallax">
        <section className="videoblock">
          <div className="videoblock-decor"></div>
          <video autoPlay muted playsInline loop>
            <source
              media="(max-width: 759px)"
              src="/tmod/video/rgb-mob.mp4"
              type="video/mp4"
            />
            <source src="/tmod/video/rgb.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="videoblock-info">
          <h2 className="videoblock-title">
            RGB Light
            <br /> module
          </h2>
          <p className="videoblock-text">
            LED light panel
            <br /> with nice set of modes
            <br /> and ability to create custom ones
          </p>
        </section>

        <section className="modules-info rgb-module">
          <div className="container">
            <div className="bentobox-panel main-panel">
              <h3 className="bento-title">RGB Light module</h3>
              <p className="bento-text">
                Perfect solution for additional lighting in your space. This
                module creates striking, ambient colorful backlight that
                enhanhance any interior.
              </p>
            </div>
            <ul className="modules-info-list list">
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/rgb/Icons-1.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">
                  Control via TV RCU and Voice Assistant
                </p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/rgb/Icons-2.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">
                  Custom, pleasant and useful modes
                </p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/rgb/Icons-3.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Wide brightness range</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/rgb/Icons-4.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Wide color range</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="parallax">
        <section className="videoblock">
          <div className="videoblock-decor"></div>
          <video autoPlay muted playsInline loop>
            <source
              media="(max-width: 759px)"
              src="/tmod/video/light-mob.mp4"
              type="video/mp4"
            />
            <source src="/tmod/video/light.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="videoblock-info">
          <h2 className="videoblock-title">
            Light Projection
            <br /> module
          </h2>
          <p className="videoblock-text">
            Directed light source
            <br />
            that changes overall room mood
          </p>
        </section>

        <section className="modules-info light-module">
          <div className="container">
            <div className="bentobox-panel main-panel">
              <h3 className="bento-title">Light Projection module</h3>
              <p className="bento-text margin-bottom">
                With light effects covering a wide area, this module creates
                excellent atmospheric colors and pattern, providing a unique
                visual experience.
              </p>
              <p className="bento-text">
                Module supplied with bracket that allows to adjust image angle
                or choose where to aim it (wall behind the TV or the ceiling of
                the room).
              </p>
            </div>
            <ul className="modules-info-list list">
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/light/Icons-1.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Quiet work</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/light/Icons-2.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Only LED light (no lasers)</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/light/Icons-3.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">
                  Wide light angle and range of brightness
                </p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/light/Icons-4.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Nice "Aurora" light pattern</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="parallax">
        <section className="videoblock">
          <div className="videoblock-decor"></div>
          <video autoPlay muted playsInline loop>
            <source
              media="(max-width: 759px)"
              src="/tmod/video/climate-mob.mp4"
              type="video/mp4"
            />
            <source src="/tmod/video/climate.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="videoblock-info">
          <h2 className="videoblock-title">
            Home Climate
            <br /> module
          </h2>
          <p className="videoblock-text">
            A compact climate monitor
            <br />
            that can serve as a thermostat
          </p>
        </section>

        <section className="modules-info climate-module">
          <div className="container">
            <div className="bentobox-panel main-panel">
              <h3 className="bento-title">Home Climate module</h3>
              <p className="bento-text margin-bottom">
                Reliable assistant in creating a comfortable microclimate. The
                device measures temperature and humidity.
              </p>
              <p className="bento-text">
                The obtained data help you effectively adjust the climate in
                your room.
              </p>
            </div>
            <ul className="modules-info-list list">
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/climate/Icons-1.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Temperature</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/climate/Icons-2.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Humidity</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/climate/Icons-3.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Alarms via app notifications</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/climate/Icons-4.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">
                  Home climate control via other appliances
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="parallax">
        <section className="videoblock">
          <div className="videoblock-decor"></div>
          <video autoPlay muted playsInline loop>
            <source
              media="(max-width: 759px)"
              src="/tmod/video/smoke-mob.mp4"
              type="video/mp4"
            />
            <source src="/tmod/video/smoke.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="videoblock-info">
          <h2 className="videoblock-title">
            Gas Sensing
            <br /> module
          </h2>
          <p className="videoblock-text">
            A Smoke and CO gas detector
            <br />
            with emergency audio &<br />
            mobile alerts
          </p>
        </section>

        <section className="modules-info gas-module">
          <div className="container">
            <div className="bentobox-panel main-panel">
              <h3 className="bento-title">Gas Sensing module</h3>
              <p className="bento-text">
                The Gas Sensing module provides your home with extra safety.
                <br />
                The module detects smoke and elevated levels of carbon monoxide
                (CO), providing emergency sound alarms and notifications via app
                in case of a dangerous situation.
              </p>
            </div>
            <ul className="modules-info-list list">
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/gas/Icons-1.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Smoke sensor</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/gas/Icons-2.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Carbon monoxide (CO) sensor</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/gas/Icons-3.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">Sound alarm</p>
              </li>
              <li className="modules-info-item bentobox-panel">
                <div className="info-icon-wrap">
                  <img src="/tmod/img/gas/Icons-4.svg" alt="icon" />
                </div>
                <p className="bento-sub-title">App and SMS notifications</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="control">
        <div className="container">
          <div className="phone-wrap">
            <picture>
              <source
                media="(max-width: 759px)"
                srcSet="/tmod/img/control/phone-mob.png"
              />
              <img src="/tmod/img/control/phone.png" alt="smartphone" />
            </picture>
          </div>
          <div className="control-info-wrap">
            <h2 className="control-title">Control any module from anywhere</h2>
            <p className="control-text">
              TMOD Technology ensures each module stays connected around the
              clock,{" "}
              <span className="underline">
                even when the TV is switched off.
              </span>{" "}
              Whether you’re managing home safety, climate settings, or
              lighting, TMOD’s versatile integrations deliver seamless,
              on-demand access to all your devices.
            </p>
            <ul className="control-list list">
              <li className="control-item">
                <div className="control-icon-wrap">
                  <img src="/tmod/img/control/Icons-1.svg" alt="icon" />
                </div>
                <p className="control-item-text">Android or iOS systems</p>
              </li>
              <li className="control-item">
                <div className="control-icon-wrap">
                  <img src="/tmod/img/control/Icons-2.svg" alt="icon" />
                </div>
                <p className="control-item-text">TV controls</p>
              </li>
              <li className="control-item">
                <div className="control-icon-wrap">
                  <img src="/tmod/img/control/Icons-3.svg" alt="icon" />
                </div>
                <p className="control-item-text">Voice Assistant in the TV</p>
              </li>
              <li className="control-item">
                <div className="control-icon-wrap">
                  <img src="/tmod/img/control/Icons-4.svg" alt="icon" />
                </div>
                <p className="control-item-text">Smart Speakers</p>
              </li>
            </ul>

            <ul className="control-logos-list list">
              <li className="control-logos-item">
                <img src="/tmod/img/control/logo-1.svg" alt="logo" />
              </li>
              <li className="control-logos-item">
                <img src="/tmod/img/control/logo-2.svg" alt="logo" />
              </li>
              <li className="control-logos-item">
                <img src="/tmod/img/control/logo-3.svg" alt="logo" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="technology">
        <div className="container">
          <h2 className="section-title">How TMOD Technology Works</h2>
          <div className="bentobox-2 default">
            <div className="bento2-item bento2-item-1">
              <div className="bentobox-panel panel-1">
                <h3 className="bento-title">
                  Full-Fledged & Cheap Integration
                </h3>
                <p className="bento-text">
                  Can be integrated with any TV size. Requires only minor and
                  cost-effective design adjustments.
                </p>
              </div>
            </div>
            <div className="bento2-item bento2-item-2">
              <div className="bentobox-panel panel-2">
                <h3 className="bento-title">Connectors</h3>
                <p className="bento-text margin-bottom">
                  Each TV has from 1 to 4 designated places on the back cover
                  that are equipped with pin-connectors.
                </p>
                <p className="bento-text">
                  Creating special places on the TV for exact modules ensures
                  aesthetics and reliable work for each module.
                </p>
              </div>
            </div>

            <div className="bento2-item bento2-item-3">
              <div className="bentobox-panel panel-3">
                <h3 className="bento-title">
                  Data
                  <br /> source
                </h3>
                <p className="bento-text">
                  Each module equipped with Wi-Fl and can be setup and
                  interacted with using smartphone and compatible smart home
                  ecosystem.
                </p>
              </div>
            </div>

            <div className="bento2-item bento2-item-4">
              <div className="bentobox-panel panel-4">
                <h3 className="bento-title">Independent & Versatile</h3>
                <p className="bento-text">
                  No hardware or software integration to TV mainboard required.
                  Compatible with any color or shape.
                </p>
              </div>
            </div>

            <div className="bento2-item bento2-item-5">
              <div className="bentobox-panel panel-5">
                <h3 className="bento-title">
                  Central
                  <br /> MCU
                </h3>
                <p className="bento-text">
                  Tiny and simple MCU connects all pin-connectors between each
                  other, providing required amount of power to each pf them and
                  ensuring customers' safety.
                </p>
              </div>
            </div>

            <div className="bento2-item bento2-item-6">
              <div className="bentobox-panel panel-6">
                <h3 className="bento-title">
                  Power
                  <br /> source
                </h3>
                <p className="bento-text">
                  Central MCU is connected directly to the powerboard of the TV.
                  Hence, modules can work 24/7 regardless of the TV status and
                  there's no need for software integration or changes in
                  mainboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="section-title">Partner FAQs</h2>
          <ul className="faq-list list">
            <li className="bentobox-panel">
              <h3 className="bento-title">What is a Module TV?</h3>
              <p className="bento-text">
                A Module TV is a unique customizable smart TV with
                interchangeable modules, allowing users to upgrade features like
                lighting, climate control, and safety.
              </p>
            </li>
            <li className="bentobox-panel">
              <h3 className="bento-title">
                How does the Module TV integrate with smart home systems?
              </h3>
              <p className="bento-text">
                The Module TV connects with other smart home devices, allowing
                users to control their home ecosystem via their smartphone or
                smart home hub.
              </p>
            </li>
            <li className="bentobox-panel">
              <h3 className="bento-title">
                Can we get exclusive distribution rights for certain regions?
              </h3>
              <p className="bento-text">
                Exclusive distribution agreements are available for qualified
                partners. Please contact us to discuss regional availability and
                terms.
              </p>
            </li>
            <li className="bentobox-panel">
              <h3 className="bento-title">
                What are the minimum order quantities (MOQ) for OEM orders?
              </h3>
              <p className="bento-text">
                The MOQ depends on the level of customization required. Please
                contact us for specific quantity requirements and pricing.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-us" id="contact-us-section">
        <div className="container">
          <div className="mob-text">
            <p className="info-text">
              We believe our partners’ success is our own. We’re committed to
              supporting your business with flexible solutions, seamless
              integration, and maximum efficiency. Our experts work closely with
              you to adapt the TMOD Technology to your specific business model,
              helping you easily leverage its full market potential.
            </p>
            <p className="info-text">
              Schedule a meeting or demo to explore the commercial opportunities
              TMOD Technology offers and discuss how we can help your business
              grow and boost profitability.
            </p>
          </div>

          <div className="contacts-wrap">
            <div className="conacts-backdrop">
              <form
                id="contact-form"
                className="contact-form-style"
                ref={contactForm}
                onSubmit={handlerSubmit}
              >
                <div className="inputs-wrap">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name*"
                    ref={nameRef}
                    required
                  />
                  <span id="name-error" className="error-message"></span>
                </div>
                <div className="inputs-wrap">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email*"
                    ref={emailRef}
                    required
                  />
                  <span id="email-error" className="error-message"></span>
                </div>
                <div className="inputs-wrap">
                  <textarea
                    id="message"
                    placeholder="Message*"
                    ref={messageRef}
                    required
                  ></textarea>
                  <span id="message-error" className="error-message"></span>
                </div>
                <div className="checkbox-container-wrap">
                  <label className="checkbox-container">
                    <input type="checkbox" id="legal" />
                    <span className="checkbox-custom"></span>
                    <span className="legat-text">
                      By submitting this form, you confirm and consent to the
                      processing, storage and transfer of your personal data in
                      accordance with the laws of the European Union 
                      <a
                        className="link"
                        href="https://gdpr-info.eu/"
                        target="_blank"
                      >
                        https://gdpr-info.eu/
                      </a>
                      . You can contact our Customer Care team regarding any
                      request related to our products and services (service,
                      return, warranty). The personal data is collected and
                      processed solely for the purposes stated above and to
                      assess the quality of the service. If you do not fill in
                      the required data, you will not be able to access all or
                      part of the Customer Care Services.
                    </span>
                  </label>
                  <div className="checkbox-container-icon">
                    <img src="/tmod/img/legal-icon.svg" alt="show more" />
                  </div>
                </div>

                <button type="submit" className="submit-btn" disabled>
                  <span className="button-text" ref={btnText}>
                    Send
                  </span>
                  <span className="spinner" ref={spinner}></span>
                </button>
              </form>
            </div>
            <div className="conacts-backdrop">
              <div className="contact-info">
                <div className="contact-photo-wrap">
                  <img src="/tmod/img/contacts/photo.png" alt="manager photo" />
                </div>
                <div className="contact-info-wrap">
                  <p className="manager-name">Anton Nikitin</p>
                  <p className="manager-position">B2B Sales Director</p>
                  <div className="manager-socials-wrap">
                    <a
                      href="https://wa.me/48781464422?text=Hello%20Anton!%20I’d%20like%20to%20discuss%20a%20B2B%20inquiry%20about%20KidsTV.%20Could%20you%20please%20provide%20more%20information%20on%20partnership%20options%20and%20how%20we%20can%20move%20forward?%20Thank%20you!"
                      target="_blank"
                      className="manager-contact whatsup"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="mailto:a.nikitin@kivismart.com"
                      className="manager-contact mail"
                    >
                      a.nikitin@kivismart.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info-wrap">
            <h2 className="contact-title">
              Feel free to contact us at any time
            </h2>

            <p className="info-text">
              We believe our partners’ success is our own. We’re committed to
              supporting your business with flexible solutions, seamless
              integration, and maximum efficiency. Our experts work closely with
              you to adapt the TMOD Technology to your specific business model,
              helping you easily leverage its full market potential.
            </p>
            <p className="info-text">
              Schedule a meeting or demo to explore the commercial opportunities
              TMOD Technology offers and discuss how we can help your business
              grow and boost profitability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
