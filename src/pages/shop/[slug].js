import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";

import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import FollowUs from "@/components/followUs";
import CallToAction from "@/components/callToAction";

import { Viewer } from "@photo-sphere-viewer/core";

const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";

function ProductDetails({ product }) {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const relatedProducts = getProducts(
    products,
    product.category[0],
    "popular",
    2
  );

  const topRatedProducts = getProducts(
    products,
    product.category[0],
    "topRated",
    2
  );
  const popularProducts = getProducts(
    products,
    product.category[0],
    "popular",
    4
  );

  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

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
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const viewer = new Viewer({
      container: "viewer",
      panorama: `${product.paranoma}`,
      caption: `${product.title}`,
    });

    viewer.addEventListener("dblclick", ({ data }) => {
      viewer.animate({
        yaw: data.yaw,
        pitch: data.pitch,
        zoom: 100,
        speed: 1000,
      });
    });

    return () => {
      viewer.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LayoutOne topbar={true}>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="zumJJUL_ruM"
          onClose={() => setOpen(false)}
        />
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb
          title="Product Details"
          sectionPace="mb-0"
          currentSlug={product.title}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
        <div className="ltn__img-slider-area mb-90">
          <Container fluid className="px-0">
            <Slider
              {...productDetailsCarouselSettings}
              className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner"
            >
              {product.carousel.map((single, key) => {
                return (
                  <div className="ltn__img-slide-item-4" key={key}>
                    <Link href="#">
                      <img src={`${single.img}`} alt={`${single.title}`} />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div className="ltn__blog-meta">
                    <ul>
                      {
                        (product.featured ? (
                          <li className="ltn__blog-category">
                            <Link href="#">Featured</Link>
                          </li>
                        ) : (
                          ""
                        ),
                        product.rent ? (
                          <li className="ltn__blog-category">
                            <Link className="bg-orange" href="#">
                              For Rent
                            </Link>
                          </li>
                        ) : (
                          ""
                        ))
                      }

                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i>
                        {product.date}
                      </li>
                    </ul>
                  </div>
                  <h1> {product.title}</h1>
                  <label>
                    <span className="ltn__secondary-color">
                      <i className="flaticon-pin"></i>
                    </span>{" "}
                    {product.locantion}
                  </label>
                  <h4 className="title-2"> {product.description.title}</h4>
                  <p>{product.description.fullDescription}</p>
                  <p>{product.description.shortDescription}</p>

                  <h4 className="title-2">Property Detail</h4>
                  <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                      <li>
                        <label>Property ID:</label>{" "}
                        <span>{product.propertyDetails.propertyId}</span>
                      </li>
                      <li>
                        <label>Home Area: </label>{" "}
                        <span>{product.propertyDetails.area} sqft</span>
                      </li>
                      <li>
                        <label>Rooms:</label>{" "}
                        <span>{product.propertyDetails.rooms}</span>
                      </li>
                      <li>
                        <label>Baths:</label>{" "}
                        <span>{product.propertyDetails.baths}</span>
                      </li>
                      <li>
                        <label>Year built:</label>{" "}
                        <span>{product.propertyDetails.createdYear}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <label>Lot Area:</label>{" "}
                        <span>{product.propertyDetails.propertyId}</span>
                      </li>
                      <li>
                        <label>Lot dimensions:</label>{" "}
                        <span>{product.propertyDetails.area} sqft</span>
                      </li>
                      <li>
                        <label>Beds:</label>{" "}
                        <span>{product.propertyDetails.bedrooms}</span>
                      </li>
                      <li>
                        <label>Price:</label> <span>{product.price}</span>
                      </li>
                      <li>
                        <label>Property Status:</label>{" "}
                        <span>{product.propertyDetails.propertyStatus}</span>
                      </li>
                    </ul>
                  </div>

                  <h4 className="title-2">Facts and Features</h4>
                  <div className="property-detail-feature-list clearfix mb-45">
                    <ul>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Living Room</h6>
                            <small>{product.factsAndFeatures.livingRoom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garage</h6>
                            <small>{product.factsAndFeatures.garage}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Dining Area</h6>
                            <small>{product.factsAndFeatures.diningArea}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bedroom</h6>
                            <small>{product.factsAndFeatures.bedroom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Bathroom</h6>
                            <small>{product.factsAndFeatures.bathroom}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Gym Area</h6>
                            <small>{product.factsAndFeatures.gymArea}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Garden</h6>
                            <small>{product.factsAndFeatures.garden}</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="property-detail-feature-list-item">
                          <i className="flaticon-double-bed"></i>
                          <div>
                            <h6>Parking</h6>
                            <small>{product.factsAndFeatures.parking}</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <h4 className="title-2">From Our Gallery</h4>
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.gallery.img1}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`${product.gallery.img1}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                        <Link
                          href={`${product.gallery.img2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`${product.gallery.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                          href={`${product.gallery.img3}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`${product.gallery.img3}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2 mb-10">Amenities</h4>

                  <div className="property-details-amenities mb-60">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities1.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities2.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {product.amenities3.map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="title-2">Location</h4>
                  <div className="property-details-google-map mb-60">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.991347734011!2d7.495080414276147!3d9.057847793711943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104f43e95b1f45cf%3A0x1e376eecc268c4d6!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen=""
                    ></iframe>
                  </div>

                  <h4 className="title-2">Floor Plans</h4>
                  {/* <!-- APARTMENTS PLAN AREA START --> */}

                  <div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
                    <Tab.Container defaultActiveKey="first">
                      <div className="ltn__tab-menu ltn__tab-menu-3">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">First Floor</Nav.Link>
                        </Nav>
                      </div>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="ltn__apartments-tab-content-inner">
                            <div className="row">
                              <div className="col-lg-7">
                                <div className="apartments-plan-img">
                                  <img src={product.floorPlan.img} alt="#" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="apartments-plan-info">
                                  <h2>First Floor</h2>
                                  <ul>
                                    {product.floorPlan.features.first.map(
                                      (single, key) => {
                                        return (
                                          <li key={key}>
                                            <span>{single}</span>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>

                  {/* <!-- APARTMENTS PLAN AREA END --> */}

                  <h4 className="title-2">Property Video</h4>
                  <div
                    className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                    style={{ backgroundImage: `url("${product.productImg}")` }}
                  >
                    <button
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </button>
                  </div>

                  <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                    <h4 className="title-2">
                      360<sup>o</sup> View
                    </h4>

                    <div id="viewer"></div>
                  </div>

                  <h4 className="title-2">Related Properties</h4>
                  <Row>
                    {relatedProducts.map((data, key) => {
                      const slug = productSlug(data.title);
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);
                      const productPrice = product.price.toFixed(2);
                      const cartItem = cartItems.find(
                        (cartItem) => cartItem.id === product.id
                      );
                      const wishlistItem = wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      );
                      const compareItem = compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      );
                      return (
                        <Col xs={12} sm={6} key={key}>
                          <RelatedProduct
                            productData={data}
                            slug={slug}
                            baseUrl="shop"
                            discountedPrice={discountedPrice}
                            productPrice={productPrice}
                            cartItem={cartItem}
                            wishlistItem={wishlistItem}
                            compareItem={compareItem}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                  {/* <!-- Top Rated Product Widget --> */}
                  <div className="widget ltn__top-rated-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Top Rated Product
                    </h4>
                    <ul>
                      {topRatedProducts.map((product, keys) => {
                        const slug = productSlug(product.title);
                        let key = keys + 1;
                        return (
                          <li key={product.id}>
                            <div className="top-rated-product-item clearfix">
                              <div className="top-rated-product-img">
                                <a href={`/shop/${slug}`}>
                                  <img
                                    src={`${product.productImg}`}
                                    alt={product.title}
                                  />
                                </a>
                              </div>
                              <div className="top-rated-product-info">
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <h6>
                                  <a href={`/shop/${slug}`}>{product.title}</a>
                                </h6>
                                <div className="product-price">
                                  <span>NGN{product.price}m</span>
                                  <del>NGN{discountedPrice}m</del>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* <!-- Menu Widget (Category) --> */}
                  <div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Top Categories
                    </h4>
                    <ul>
                      <li>
                        <Link href="#">
                          Apartments <span>(26)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Picture Stodio <span>(30)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Office <span>(71)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Luxary Vilas <span>(56)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Duplex House <span>(60)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Popular Product Widget --> */}
                  <div className="widget ltn__popular-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Popular Properties
                    </h4>

                    <Slider
                      {...popular_product}
                      className="row ltn__popular-product-widget-active slick-arrow-1"
                    >
                      {/* <!-- ltn__product-item --> */}

                      {popularProducts.map((product, key) => {
                        const slug = productSlug(product.title);
                        return (
                          <div
                            key={key}
                            className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---"
                          >
                            <div className="product-img">
                              <Link href={`/shop/${slug}`}>
                                <img src={`${product.productImg}`} alt={slug} />
                              </Link>
                            </div>
                            <div className="product-info">
                              <div className="product-price">
                                <span>
                                  NGN{product.price}m<label>/Month</label>
                                </span>
                              </div>
                              <h2 className="product-title">
                                <Link href={`/shop/${slug}`}>
                                  {product.title}
                                </Link>
                              </h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <Link href="product-details">
                                      <i className="flaticon-pin"></i>
                                      {product.locantion}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li>
                                  <span>
                                    {product.propertyDetails.bedrooms}
                                  </span>
                                  <span className="ms-1">Bedrooms</span>
                                </li>
                                <li>
                                  <span>{product.propertyDetails.baths}</span>
                                  <span className="ms-1">Bathrooms</span>
                                </li>
                                <li>
                                  <span>{product.propertyDetails.area}</span>
                                  <span className="ms-1">square Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>

                  <FollowUs title="Follow Us" />
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- SHOP DETAILS AREA END -->

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
    </>
  );
}

export default ProductDetails;

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = products.filter(
    (single) => productSlug(single.title) === params.slug
  )[0];

  return { props: { product } };
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = products.map((product) => ({
    params: { slug: productSlug(product.title) },
  }));

  return { paths, fallback: false };
}
