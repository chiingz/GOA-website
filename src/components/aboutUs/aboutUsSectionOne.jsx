import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionOne() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img
                src="/img/george/pexels-enric-cruz-lópez-6272216.jpg"
                alt="About Us Image"
              />
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Dream Living Spaces Setting New Build
                </h1>
                <p>
                  Setting a new standard in modern construction. Elevate your
                  lifestyle with meticulously designed and expertly crafted new
                  builds.
                </p>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-4"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="#">The Perfect Residency</Link>
                  </h4>
                  <p>
                    &ldquo;The Perfect Residency&rdquo; invites you to an
                    epitome of elegance. Revel in timeless design, bask in
                    serene surroundings, and experience luxury redefined. With
                    breathtaking views as your backdrop, this residence offers a
                    perfect blend of sophistication and tranquility. Welcome
                    home to perfection.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-call-center-agent"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="#">Global Architect Experts</Link>
                  </h4>
                  <p>
                    Global Architect Experts: Shaping skylines with visionary
                    designs worldwide. Elevate your projects with our unmatched
                    expertise in architectural innovation.
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-maps-and-location"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                    <Link href="#">Built-in Storage Cupboards</Link>
                  </h4>
                  <p>
                    Maximize space and minimize clutter with our built-in
                    storage cupboards. Tailored solutions for seamless
                    organization, adding functionality to your living spaces.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionOne;
