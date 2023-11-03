// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Home layout
import Demo from "./page-demo/Demo";
import MainDemo from "./home/MainDemo";
import Startup from "./home/Startup";
import Paralax from "./home/Paralax";
import HomePortfolio from "./home/HomePortfolio";
import DigitalAgency from "./home/DigitalAgency";
import CreativeAgency from "./home/CreativeAgency";
import PersonalPortfolio from "./home/PersonalPortfolio";
import Business from "./home/Business";
import StudioAgency from "./home/StudioAgency";
import PortfolioLanding from "./home/PortfolioLanding";
import CreativeLanding from "./home/CreativeLanding";
import HomeParticles from "./home/HomeParticles";
import CreativePortfolio from "./home/CreativePortfolio";
import DesignerPortfolio from "./home/DesignerPortfolio";
import InteriorLanding from "./home/Interior";
import CorporateBusiness from "./home/CorporateBusiness";
import InteractiveAgency from "./home/InteractiveAgency";

// Dark Home Layout
import DarkMainDemo from "./dark/MainDemo";
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import GalleryRiver from "./blocks/GalleryRiver";
import BevieSling from "./elements/productComps/BevieSling";
import CoolJug from "./elements/productComps/CoolJug";
import DrawStringBags from "./elements/productComps/DrawStringBags";
import DryBagSolidNylon from "./elements/productComps/DryBagSolidNylon";
import DryBagCamoNylon from "./elements/productComps/DryBagCamoNylon";
import SunglassesFloater from "./elements/productComps/SunglassesFloater";
import FloatPouchSolid from "./elements/productComps/FloatPouchSolid";
import FloatPouchCamo from "./elements/productComps/FloatPouchCamo";
import FloatPouchHolo from "./elements/productComps/FloatPouchHolo";
import USColorWay from "./elements/productComps/USColorWay";
import DryBagSolidNylon15 from "./elements/productComps/DryBagSolid15";
import DryBagTranslucent15 from "./elements/productComps/DryBagTranslucent15";
import DryBagHolographic15 from "./elements/productComps/DryBagHolographic15";
import GogglesAdult from "./elements/productComps/GogglesAdult";
import GogglesKids from "./elements/productComps/GogglesKids";

// Product Pages

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={InteriorLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            />
            {/* Product Pages */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/beviesling`}
              component={BevieSling}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/cooljug`}
              component={CoolJug}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drawstringbags`}
              component={DrawStringBags}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drybagsolidnylon`}
              component={DryBagSolidNylon}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drybagcamonylon`}
              component={DryBagCamoNylon}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/sunglassesfloater`}
              component={SunglassesFloater}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/floatpouchsolid`}
              component={FloatPouchSolid}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/floatpouchcamo`}
              component={FloatPouchCamo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/floatpouchholo`}
              component={FloatPouchHolo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/uscolorway`}
              component={USColorWay}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drybagsolidnylon15`}
              component={DryBagSolidNylon15}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drybagtrasnlucent15`}
              component={DryBagTranslucent15}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/drybagholographic15`}
              component={DryBagHolographic15}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/gogglesAdult`}
              component={GogglesAdult}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/gogglesKids`}
              component={GogglesKids}
            />

            {/* End of Products */}

            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/main-demo`}
              component={MainDemo}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/main-demo`}
              component={MainDemo}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/dark-main-demo`}
              component={DarkMainDemo}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/startup`}
              component={Startup}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/paralax`}
              component={Paralax}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/digital-agency`}
              component={DigitalAgency}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-agency`}
              component={CreativeAgency}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/personal-portfolio`}
              component={PersonalPortfolio}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/studio-agency`}
              component={StudioAgency}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/business`}
              component={Business}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-home`}
              component={HomePortfolio}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-landing`}
              component={PortfolioLanding}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-landing`}
              component={CreativeLanding}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-particles`}
              component={HomeParticles}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`}
              component={DarkPortfolioLanding}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/designer-portfolio`}
              component={DesignerPortfolio}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/creative-portfolio`}
              component={CreativePortfolio}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/interior-landing`}
              component={InteriorLanding}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/corporate-business`}
              component={CorporateBusiness}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/interactive-agency`}
              component={InteractiveAgency}
            /> */}
            {/* Element Layot */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/service`}
              component={Service}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/service-details`}
              component={ServiceDetails}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-details`}
              component={PortfolioDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={Blog}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetails}
            /> */}
            {/* Blocks Elements  */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/team`}
              component={Team}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/counters`}
              component={Counters}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/testimonial`}
              component={Testimonial}
            /> */}

            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/video-popup`}
              component={VideoPopup}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/gallery`}
              component={Gallery}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/galleryriver`}
              component={GalleryRiver}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/clint-logo`}
              component={Brand}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/progressbar`}
              component={ProgressBar}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-form`}
              component={ContactForm}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/google-map`}
              component={GoogleMap}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/columns`}
              component={Columns}
            /> */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/pricing-table`}
              component={PricingTable}
            /> */}
            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
            {/* product pages below */}
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
