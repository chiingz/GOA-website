import { useState } from "react";
import Slider from "react-slick";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import Feature from "@/components/features";
import featuresData from "@/data/service";
import HeroSectionStyleTwo from "@/components/hero/styleTwo";
import AboutUsSectionOne from "@/components/aboutUs/aboutUsSectionOne";
import AboutUsSectionTwo from "@/components/aboutUs/aboutUsSectionTwo";
import UpCommingcarousel from "@/components/upCommingCarousel";
import PropertyItem from "@/components/product/properties";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import AminitiesItemTwo from "@/components/aminities/itemTwo";
import aminitiesData from "@/data/aminities/index.json";
import CallToAction from "@/components/callToAction";
import heroData from "@/data/hero/index-two.json";

function HomeVersionTwo(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const countryProducts = getProducts(products, "buying", "country", 5);
  const { data } = props;

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: "80px",
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutOne topbar={false}>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="y9j-BL5ocW8"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-11 section-bg-1">
        <HeroSectionStyleTwo data={heroData} />
      </div>
      {/* <!-- SLIDER AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area pt-115 pb-100 ">
        <AboutUsSectionOne />
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
        <AboutUsSectionTwo />
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- FEATURE AREA START ( Feature - 6) --> */}
      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        headingClasses=""
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      />
      {/* <!-- FEATURE AREA END -->

    <!-- UPCOMING PROJECT AREA START --> */}
      <div
        className="ltn__upcoming-project-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/george/bg.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Upcoming Projects
                </h6>
                <h1 className="section-title  white-color">
                  Dream Living Space <br />
                  Setting New Standards
                </h1>
              </div>
            </Col>
          </Row>
          <UpCommingcarousel />
        </Container>
      </div>
      {/* <!-- UPCOMING PROJECT AREA END -->


    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div className="ltn__search-by-place-area before-bg-top pt-115 pb-70">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Area Properties
                </h6>
                <h1 className="section-title">
                  Find Your Dream House <br />
                  Search By Area
                </h1>
              </div>
            </Col>
          </Row>

          {!!countryProducts?.length ? (
            <Slider
              {...productsettings}
              className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
            >
              {countryProducts.map((product, key) => {
                const slug = productSlug(product.title);

                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/shop"
                  />
                );
              })}
            </Slider>
          ) : null}
        </Container>
      </div>
      {/* <!-- SEARCH BY PLACE AREA END -->

    <!-- NEIGHBOUR AREA START --> */}
      <div className="neighbour-area section-bg-1 pt-118 pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle ltn__secondary-color">
                  Explore Neighbour
                </h6>
                <h1 className="section-title">
                  What’s In Neighbour <br />
                  Explore Below
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__neighbour-tab-wrap">
                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-4 text-center">
                    <Nav>
                      <Nav.Link eventKey="first">
                        {" "}
                        <img src="/img/neighourhood/shoprite.jpg" alt="#" />
                      </Nav.Link>
                      <Nav.Link eventKey="second">
                        {" "}
                        <img
                          src="/img/neighourhood/National-Hospital-Abuja.webp"
                          alt="#"
                        />
                      </Nav.Link>
                      <Nav.Link eventKey="third">
                        <img
                          src="/img/neighourhood/kids-playground.jpg"
                          alt="#"
                        />
                      </Nav.Link>
                    </Nav>
                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img
                                src="/img/neighourhood/shoprite.jpg"
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img
                                    src="/img/neighourhood/shoprite.jpg"
                                    alt="#"
                                  />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Shopping Center</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Indulge in a world of convenience with a
                                    nearby shopping mall. Our neighborhood
                                    brings retail therapy to your doorstep,
                                    offering a diverse array of shops and
                                    services for a seamless shopping experience.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img
                                src="/img/neighourhood/National-Hospital-Abuja.webp"
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img
                                    src="/img/neighourhood/National-Hospital-Abuja.webp"
                                    alt="#"
                                  />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Medical Hospital</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Enjoy peace of mind in our neighborhood,
                                    where a dedicated medical hospital stands as
                                    a vital benefit. Your well-being matters,
                                    and quality healthcare is just steps away.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img
                                src="/img/neighourhood/kids-playground.jpg"
                                alt="#"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img
                                    src="/img/neighourhood/kids-playground.jpg"
                                    alt="#"
                                  />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Children Playland</Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    100m{" "}
                                  </span>
                                  / 10 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Elevate family living with a dedicated
                                    children&apos;s playland in our community.
                                    Create lasting memories as your little ones
                                    explore, learn, and play in a safe and
                                    vibrant environment.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                <Row>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-mortarboard"></i>
                          Schools
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Empower young minds with easy access to quality
                            education—schools within reach in our community,
                            shaping a bright future for the next generation.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-hospital"></i> Medical Hospital
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="ltn__video-img alignleft">
                            <img
                              src="/img/bg/17.jpg"
                              alt="video popup bg image"
                            />
                            <button
                              className="ltn__video-icon-2 ltn__video-icon-2-small"
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </button>
                          </div>
                          <p>
                            Enjoy peace of mind in our neighborhood, where a
                            dedicated medical hospital stands as a vital
                            benefit. Your well-being matters, and quality
                            healthcare is just steps away.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-building"></i> Shopping Mall
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Indulge in a world of convenience with a nearby
                            shopping mall. Our neighborhood brings retail
                            therapy to your doorstep, offering a diverse array
                            of shops and services for a seamless shopping
                            experience.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-slider"></i> Children Playland
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Elevate family living with a dedicated
                            children&apos;s playland in our community. Create
                            lasting memories as your little ones explore, learn,
                            and play in a safe and vibrant environment.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- NEIGHBOUR AREA END -->



    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </LayoutOne>
  );
}

export default HomeVersionTwo;
