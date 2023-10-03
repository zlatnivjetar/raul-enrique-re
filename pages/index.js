import styles from "./index.module.css";

const REBUILD = () => {
  return (
    <div className={styles.reBuild}>
      <section className={styles.hero}>
        <img className={styles.heroImgIcon} alt="" src="/hero-img@2x.png" />
        <img className={styles.yellow50Icon} alt="" src="/yellow-50@2x.png" />
        <img
          className={styles.yellowMainIcon}
          alt=""
          src="/yellow-main@2x.png"
        />
        <div className={styles.heroChild} />
        <div className={styles.container}>
          <header className={styles.nav}>
            <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
            <nav className={styles.navLinks}>
              <div className={styles.buyers}>BUYERS</div>
              <div className={styles.buyers}>SELLERS</div>
              <div className={styles.buyers}>COMMUNITY</div>
              <div className={styles.buyers}>BLOG</div>
              <div className={styles.buyers}>CONTACT ME</div>
              <button className={styles.button}>
                <b className={styles.speakWithMe}>SPEAK WITH ME</b>
              </button>
            </nav>
            <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
          </header>
          <div className={styles.heroText}>
            <h1 className={styles.topRatedRealtorContainer}> <span className={styles.h1Span}>TOP RATED</span> Realtor in New York
            </h1>
            <p className={styles.letMeBe}>
              Let me be your trusted guide in finding the best properties New
              York has to offer.
            </p>
            <button className={styles.button1}>
              <b className={styles.letsTalk}>LET’S TALK</b>
              <div className={styles.arrow}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </button>
          </div>
          <div className={styles.heroQuote}>
            <div className={styles.realEstateIs}>
              Real estate is an imperishable asset, ever increasing in value. It
              is the most solid security that human ingenuity has devised.
            </div>
            <div className={styles.heroQuoteChild} />
            <i className={styles.russellSage}>Russell Sage</i>
          </div>
        </div>
      </section>
      <section className={styles.help}>
        <div className={styles.container1}>
          <div className={styles.helpText}>
            <h2 className={styles.howCanI}>How can I help you</h2>
            <p className={styles.whetherYouAre}>
              Whether you are looking for a dream house, or want to get a deal
              for selling existing one, you can get started here
            </p>
          </div>
          <div className={styles.helpContent}>
            <div className={styles.helpCard}>
              <img
                className={styles.buyerImgIcon}
                alt=""
                src="/image-15@2x.webp"
              />
              <h3 className={styles.iAmAContainer}>
                <span>I am a</span>
                <span className={styles.buyer}> Buyer...</span>
              </h3>
              <p className={styles.buyingANew}>
                Buying a new home is an exciting and important decision, and I
                am here to guide you every step of the way, ensuring that you
                find the ideal property for your unique preferences and needs.
              </p>
              <button className={styles.button2}>
                <b className={styles.processGuide}>{`PROCESS GUIDE `}</b>
                <img className={styles.arrowsIcon} alt="" src="/arrows.svg" />
              </button>
            </div>
            <div className={styles.helpCard1}>
              <img
                className={styles.buyerImgIcon}
                alt=""
                src="/sellerimg@2x.webp"
              />
              <h3 className={styles.iAmAContainer}>
                <span>{`I am a `}</span>
                <span className={styles.buyer}>Seller...</span>
              </h3>
              <p className={styles.buyingANew}>
                Selling your home is a significant step. That’s why I provide
                expert guidance throughout the process, helping you present your
                property in the best light to attract the right buyers.
              </p>
              <button className={styles.button3}>
                <b className={styles.processGuide1}>PROCESS GUIDE</b>
                <img className={styles.arrowsIcon} alt="" src="/arrows.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.featured}>
        <div className={styles.container2}>
          <div className={styles.featuredTop}>
            <h2 className={styles.howCanI}>Find your new home</h2>
            <div className={styles.categories}>
              <div className={styles.house}>HOUSE</div>
              <div className={styles.convo}>CONVO</div>
              <div className={styles.convo}>VILLA</div>
              <div className={styles.convo}>GARDEN</div>
              <div className={styles.convo}>POOL</div>
              <button className={styles.button4}>
                <b className={styles.viewAll}>VIEW ALL</b>
              </button>
            </div>
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.featureCard}>
              <img
                className={styles.image8Icon}
                loading="lazy"
                alt=""
                src="/image 8.webp"
              />
              <h3 className={styles.modernHouse}>Modern House</h3>
              <div className={styles.buyingANew1}>
                Buying a new home is an exciting and important decision, and I
                am here to guide you every step of the way.
              </div>
              <div className={styles.data}>
                <div className={styles.locationParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/location.svg"
                  />
                  <div className={styles.siliconValleyCalifornia}>
                    Silicon Valley, California
                  </div>
                </div>
                <div className={styles.infoParent}>
                  <img className={styles.locationIcon} alt="" src="/info.svg" />
                  <div className={styles.bedrooms2Bathrooms}>
                    4 bedrooms, 2 bathrooms
                  </div>
                </div>
                <div className={styles.infoParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/clone.svg"
                  />
                  <div className={styles.bedrooms2Bathrooms}>1,121 sqm.</div>
                </div>
              </div>
              <button className={styles.button5}>
                <b className={styles.speakWithMe1}>VIEW DETAILS</b>
              </button>
            </div>
            <div className={styles.featureCard}>
              <img className={styles.image8Icon} alt="" src="/image-9@2x.webp" />
              <h3 className={styles.modernHouse}>I am a Buyer...</h3>
              <div className={styles.buyingANew1}>
                Buying a new home is an exciting and important decision, and I
                am here to guide you every step of the way.
              </div>
              <div className={styles.data}>
                <div className={styles.locationParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/location.svg"
                  />
                  <div className={styles.siliconValleyCalifornia1}>
                    Silicon Valley, California
                  </div>
                </div>
                <div className={styles.infoParent}>
                  <img className={styles.locationIcon} alt="" src="/info.svg" />
                  <div className={styles.bedrooms2Bathrooms}>
                    4 bedrooms, 2 bathrooms
                  </div>
                </div>
                <div className={styles.infoParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/clone.svg"
                  />
                  <div className={styles.bedrooms2Bathrooms}>1,121 sqm.</div>
                </div>
              </div>
              <button className={styles.button5}>
                <b className={styles.speakWithMe2}>VIEW DETAILS</b>
              </button>
            </div>
            <div className={styles.featureCard}>
              <img
                className={styles.image14Icon}
                alt=""
                src="/image-14@2x.webp"
              />
              <h3 className={styles.modernHouse}>I am a Buyer...</h3>
              <div className={styles.buyingANew1}>
                Buying a new home is an exciting and important decision, and I
                am here to guide you every step of the way.
              </div>
              <div className={styles.data}>
                <div className={styles.locationParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/location.svg"
                  />
                  <div className={styles.siliconValleyCalifornia1}>
                    Silicon Valley, California
                  </div>
                </div>
                <div className={styles.infoParent}>
                  <img className={styles.locationIcon} alt="" src="/info.svg" />
                  <div className={styles.bedrooms2Bathrooms2}>
                    4 bedrooms, 2 bathrooms
                  </div>
                </div>
                <div className={styles.infoParent}>
                  <img
                    className={styles.locationIcon}
                    alt=""
                    src="/clone.svg"
                  />
                  <div className={styles.bedrooms2Bathrooms2}>1,121 sqm.</div>
                </div>
              </div>
              <button className={styles.button5}>
                <b className={styles.speakWithMe1}>VIEW DETAILS</b>
              </button>
            </div>
          </div>
          <div className={styles.featuredArrowsWrap}>
            <div className={styles.button8}>
              <div className={styles.arrows}>
                <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
              </div>
            </div>
            <div className={styles.button9}>
              <div className={styles.arrows1}>
                <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
                <img className={styles.vectorIcon5} alt="" src="/vector2.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.banner}>
        <div className={styles.container3}>
          <div className={styles.bannerContent}>
            <h2 className={styles.howCanI}>
              “Real Estate the way it should be, not the way it could be.”
            </h2>
            <div className={styles.modernagentParent}>
              <h2 className={styles.modernagent}> #ModernAgent</h2>
              <img
                className={styles.facebookSvgrepoCom1Icon}
                alt=""
                src="/facebooksvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.proof}>
        <div className={styles.container4}>
          <div className={styles.proofContent}>
            <h3 className={styles.asSeenOn}>As seen on:</h3>
            <div className={styles.proofLogos}>
              <img
                className={styles.pngwingIcon}
                loading="lazy"
                alt=""
                src="/pngwing@2x.png"
              />
              <img
                className={styles.pngwingIcon1}
                loading="lazy"
                alt=""
                src="/pngwing1@2x.png"
              />
              <img
                className={styles.pngwingIcon2}
                loading="lazy"
                alt=""
                src="/pngwing2@2x.png"
              />
              <img
                className={styles.pngwingIcon3}
                loading="lazy"
                alt=""
                src="/pngwing3@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.reviews}>
        <div className={styles.container5}>
          <h2 className={styles.whatDoMy}>What do my clients say?</h2>
          <div className={styles.reviewsWrap}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialTitle}>
                <img
                  className={styles.quotesSvgrepoCom1Icon}
                  alt=""
                  src="/quotessvgrepocom-1.svg"
                />
                <h3 className={styles.pleasureToWork}>
                  Pleasure to work with...
                </h3>
              </div>
              <div className={styles.mrRaulWas}>
                “Mr. Raul was very understanding to our needs and was helping us
                when we were moving to a new home. It was a pleasure to work
                with him.”
              </div>
              <div className={styles.cBrownParent}>
                <div className={styles.cBrown}>C. Brown</div>
                <img className={styles.starsIcon} alt="" src="/stars.svg" />
                <img
                  className={styles.pngwing1Icon}
                  alt=""
                  src="/pngwing-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialTitle1}>
                <img
                  className={styles.quotesSvgrepoCom1Icon}
                  alt=""
                  src="/quotessvgrepocom-1.svg"
                />
                <h3 className={styles.incredibleService}>Incredible service</h3>
              </div>
              <div className={styles.mrRaulWas}>
                “Me and my husband wanted to buy a bigger house. After we
                decided to move, we found Mr. Raul, who provided us with
                incredible service ”
              </div>
              <div className={styles.aWhiteParent}>
                <div className={styles.cBrown}>A. White</div>
                <img className={styles.starsIcon} alt="" src="/stars.svg" />
                <img
                  className={styles.pngwing1Icon}
                  alt=""
                  src="/pngwing-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.proof}>
        <div className={styles.container5}>
          <h2 className={styles.whatDoMy}>Contact info</h2>
          <div className={styles.contactWrap}>
            <form className={styles.form}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <h3 className={styles.getInTouch}>Get in Touch</h3>
              </div>
              <div className={styles.fillYourContact}>
                Fill your contact information in the form below and I will get
                back to you within 2 business days.
              </div>
              <div className={styles.formCategory}>
                <div className={styles.iAmLooking}>I am looking to:</div>
                <div className={styles.radioWrap}>
                  <div className={styles.radioBuy}>
                    <input
                      className={styles.radioBuyChild}
                      id="radio-buy"
                      type="radio"
                      name="form-radio"
                    />
                    <label className={styles.buy} htmlFor="radio-buy">
                      Buy
                    </label>
                  </div>
                  <div className={styles.radioBuy}>
                    <input
                      className={styles.radioBuyChild}
                      id="radio-sell"
                      type="radio"
                      name="form-radio"
                    />
                    <label className={styles.buy} htmlFor="radio-sell">
                      Sell
                    </label>
                  </div>
                </div>
              </div>
              <input
                className={styles.name}
                placeholder="Your Name"
                type="text"
              />
              <input
                className={styles.email}
                placeholder="Your Email"
                type="email"
              />
              <textarea
                className={styles.message}
                placeholder="Your Message"
                required={true}
              />
              <div className={styles.infoParent}>
                <input
                  className={styles.tcAgreeChild}
                  required={true}
                  id="tc-checkbox"
                  type="checkbox"
                />
                <label
                  className={styles.iAgreeWithContainer}
                  htmlFor="tc-checkbox"
                >
                  <span className={styles.iAgreeWith}>I agree with the</span>
                  <span
                    className={styles.termsConditions}
                  >{` Terms & Conditions.`}</span>
                </label>
              </div>
              <div className={styles.submitWrap}>
                <button className={styles.submit} type="submit">
                  <div className={styles.submit1}>Submit</div>
                </button>
                <img
                  className={styles.mcafeeIcon}
                  loading="lazy"
                  alt=""
                  src="/mcafee@2x.png"
                />
              </div>
            </form>
            <div className={styles.locationsWrap}>
              <h3 className={styles.lookingForA}>
                Looking for a home outside NY?
              </h3>
              <div className={styles.youCanContact}>
                You can contact my partners that work in different cities, or
                arrange a meeting in their office.
              </div>
              <div className={styles.partnerDataWrap}>
                <img
                  className={styles.partnerBostonIcon}
                  loading="lazy"
                  alt=""
                  src="/partnerboston@2x.png"
                />
                <div className={styles.bostonData}>
                  <div className={styles.partnerName}>
                    <h3 className={styles.boston}>Boston</h3>
                    <div className={styles.partnerNameChild} />
                  </div>
                  <div className={styles.partnerLocation}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/location.svg"
                    />
                    <div className={styles.tenmileRoad02199}>
                      3055 Tenmile Road, 02199 Boston, MA
                    </div>
                  </div>
                  <div className={styles.partnerLocation1}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/phone.svg"
                    />
                    <div className={styles.div}>
                      +1 617 304 7568 | +1 781 716 5849
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.partnerDataWrap1}>
                <img
                  className={styles.partnerBostonIcon}
                  loading="lazy"
                  alt=""
                  src="/partnerboston1@2x.png"
                />
                <div className={styles.bostonData1}>
                  <div className={styles.partnerName}>
                    <h3 className={styles.boston}>Baltimore</h3>
                    <div className={styles.partnerNameChild} />
                  </div>
                  <div className={styles.partnerLocation2}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/location.svg"
                    />
                    <div className={styles.div}>
                      1473 Hickory Heights Drive, 21202 Baltimore, MD
                    </div>
                  </div>
                  <div className={styles.partnerLocation3}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/phone.svg"
                    />
                    <div className={styles.div}>
                      +1 443 226 4329 | +1 443 925 4766
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.partnerDataWrap1}>
                <img
                  className={styles.partnerBostonIcon}
                  alt=""
                  src="/partnerboston2@2x.png"
                />
                <div className={styles.bostonData1}>
                  <div className={styles.partnerName2}>
                    <h3 className={styles.philadelphia}>Philadelphia</h3>
                    <div className={styles.partnerNameChild} />
                  </div>
                  <div className={styles.partnerLocation2}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/location.svg"
                    />
                    <div className={styles.div}>
                      1814 Hiddenview Drive, 19123 Philadelphia, PA
                    </div>
                  </div>
                  <div className={styles.partnerLocation1}>
                    <img
                      className={styles.locationIcon}
                      alt=""
                      src="/phone.svg"
                    />
                    <div className={styles.div}>
                      +1 617 304 7568 | +1 781 716 5849
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <img className={styles.ctaChild} alt="" src="/rectangle-155.svg" />
        <img className={styles.ctaItem} alt="" src="/rectangle-154@2x.svg" />
        <div className={styles.container7}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaTitle}>
              <h2 className={styles.howCanI}>
                Looking for a Top Rated Realtor?
              </h2>
              <img
                className={styles.ctaTitleChild}
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <button className={styles.button10}>
              <b className={styles.speakWithMe4}>SPEAK WITH ME NOW</b>
            </button>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container4}>
          <div className={styles.footerWrap}>
            <div className={styles.footerLeft}>
              <img className={styles.logo1Icon1} alt="" src="/logo-1@2x.png" />
              <div className={styles.letMeHelp}>
                Let me help you find your dream home, today.
              </div>
              <div className={styles.smLinks}>
                <a className={styles.ellipseParent} href="/">
                  <div className={styles.groupChild} />
                  <img
                    className={styles.instagramIcon}
                    alt=""
                    src="/instagramicon.svg"
                  />
                </a>
                <img
                  className={styles.smLinksChild}
                  alt=""
                  src="/group-5.svg"
                />
                <img
                  className={styles.smLinksChild}
                  alt=""
                  src="/group-4.svg"
                />
                <img
                  className={styles.smLinksChild}
                  alt=""
                  src="/group-6.svg"
                />
              </div>
            </div>
            <div className={styles.footerLinksWrap}>
              <div className={styles.linksWrapper}>
                <div className={styles.pageLinks}>PAGE LINKS</div>
                <div className={styles.footerLinks}>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Buyers</div>
                  </div>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Sellers</div>
                  </div>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Community</div>
                  </div>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Blog</div>
                  </div>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Contact Me</div>
                  </div>
                </div>
              </div>
              <div className={styles.linksWrapper}>
                <div className={styles.support}>SUPPORT</div>
                <div className={styles.footerLinks}>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Privacy Policy</div>
                  </div>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div
                      className={styles.privacyPolicy}
                    >{`Terms & Conditions`}</div>
                  </div>
                  <div className={styles.infoParent}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>Call me</div>
                  </div>
                  <div className={styles.link}>
                    <img
                      className={styles.arrowsIcon}
                      alt=""
                      src="/arrows1.svg"
                    />
                    <div className={styles.privacyPolicy}>FAQs</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.newsletterWrapper}>
              <div className={styles.support}>STAY CONNECTED</div>
              <div className={styles.stayUpdatedAbout}>
                Stay updated about new listings, special offers,
                announcements...
              </div>
              <div className={styles.email1}>
                <div className={styles.yourEmailAddress}>
                  Your Email Address
                </div>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon6}
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.subfooter}>
        <div className={styles.container9}>
          <p className={styles.raulEnriqueEstatesContainer}>
            <span className={styles.madeByShaped}>
              <span>
                <span
                  className={styles.iAgreeWith}
                >{`Raul Enrique Estates LLC. `}</span>
                <b className={styles.iAgreeWith}>{`© `}</b>
                <span>2023. All Rights Reserved.</span>
              </span>
            </span>
            <span className={styles.madeByShaped}>
              <span>
                <span>{`Made by `}</span>
              </span>
              <span>
                <span className={styles.shaped}>Shaped</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default REBUILD;
