/* eslint-disable react/no-array-index-key, react/no-danger */
import React, { useState, useEffect, useRef } from 'react';
// import { Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
// import GlideComponent from 'components/carousel/GlideComponent';
// import { buyUrl, adminRoot } from 'constants/defaultValues';
import { adminRoot } from 'constants/defaultValues';

/* const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    600: { perView: 1 },
    992: { perView: 2 },
    1200: { perView: 3 },
  },
}; */

/* const slideItems = [
  {
    icon: 'iconsminds-mouse-3',
    title: 'Right Click Menu',
    detail:
      'Increases overall usability of the project by providing additional actions menu.',
  },
  {
    icon: 'iconsminds-electric-guitar',
    title: 'Video Player',
    detail:
      'Carefully themed multimedia players powered by Video.js library with Youtube support.',
  },
  {
    icon: 'iconsminds-keyboard',
    title: 'Keyboard Shortcuts',
    detail:
      'Easily configurable keyboard shortcuts plugin that highly improves user experience.',
  },
  {
    icon: 'iconsminds-three-arrow-fork ',
    title: 'Two Panels Menu',
    detail:
      'Three states two panels icon menu that looks good, auto resizes and does the job well.',
  },
  {
    icon: 'iconsminds-deer',
    title: 'Icons Mind',
    detail:
      '1040 icons in 53 different categories, designed pixel perfect and ready for your project.',
  },
  {
    icon: 'iconsminds-palette',
    title: '20 Color Schemes',
    detail:
      'Colors, icons and design harmony that creates excellent themes to cover entire project.',
  },
  {
    icon: 'iconsminds-air-balloon-1',
    title: '3 Applications',
    detail:
      'Applications that mostly made of components are the way to get started to create something similar.',
  },
  {
    icon: 'iconsminds-resize',
    title: 'Extra Responsive',
    detail:
      'Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.',
  },
]; */

/* const features = [
  {
    title: 'Pleasant Design',
    img: '/assets/img/landing-page/features/plesant-design.png',
    detail:
      'As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process.',
  },
  {
    title: 'Extra Responsive',
    img: '/assets/img/landing-page/features/extra-responsive.png',
    detail:
      'Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens.',
  },
  {
    title: 'Superfine Charts',
    img: '/assets/img/landing-page/features/superfine-charts.png',
    detail:
      'Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful.',
  },
  {
    title: 'Layouts for the Job',
    img: '/assets/img/landing-page/features/layouts-for-the-job.png',
    detail:
      'Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components.',
  },
  {
    title: 'Smart Menu',
    img: '/assets/img/landing-page/features/smart-menu.png',
    detail:
      'Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only.',
  },
]; */

/* const layouts = [
  {
    title: 'Menu Default',
    img: '/assets/img/landing-page/layouts/menu-default.jpg',
  },
  {
    title: 'Menu Subhidden',
    img: '/assets/img/landing-page/layouts/menu-subhidden.jpg',
  },
  {
    title: 'Menu Hidden',
    img: '/assets/img/landing-page/layouts/menu-hidden.jpg',
  },
  {
    title: 'Image List',
    img: '/assets/img/landing-page/layouts/image-list.jpg',
  },
  {
    title: 'Thumb List',
    img: '/assets/img/landing-page/layouts/thumb-list.jpg',
  },
  { title: 'Data List', img: '/assets/img/landing-page/layouts/data-list.jpg' },
  { title: 'Details', img: '/assets/img/landing-page/layouts/details.jpg' },
  {
    title: 'Authentication',
    img: '/assets/img/landing-page/layouts/authentication.jpg',
  },
  {
    title: 'Search Results',
    img: '/assets/img/landing-page/layouts/search-result.jpg',
  },
  {
    title: 'Single Page Application',
    img: '/assets/img/landing-page/layouts/spa.jpg',
  },
  {
    title: 'Data List App Menu Hidden',
    img: '/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg',
  },
  { title: 'Tabs', img: '/assets/img/landing-page/layouts/tabs.jpg' },
]; */

/* const applications = [
  {
    title: 'Survey',
    path: `${adminRoot}/applications/survey`,
    img: '/assets/img/landing-page/applications/survey.jpg',
  },
  {
    title: 'Chat',
    path: `${adminRoot}/applications/chat`,
    img: '/assets/img/landing-page/applications/chat.jpg',
  },
  {
    title: 'Todo',
    path: `${adminRoot}/applications/todo`,
    img: '/assets/img/landing-page/applications/todo.jpg',
  },
]; */

/* const themes = [
  { title: 'Navy Blue', class: 'bluenavy' },
  { title: 'Olympic Blue', class: 'blueolympic' },
  { title: 'Yale Blue', class: 'blueyale' },
  { title: 'Moss Green', class: 'greenmoss' },
  { title: 'Lime Green', class: 'greenlime' },
  { title: 'Carrot Orange', class: 'carrotorange' },
  { title: 'Ruby Red', class: 'rubyred' },
  { title: 'Monster Purple', class: 'monsterpurple' },
  { title: 'Steel Grey', class: 'steelgrey' },
  { title: 'Granola Yellow', class: 'granolayellow' },
]; */

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  // const [activeTab, setActiveTab] = useState(0);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = `${homeRect.x - 580}px`;

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  /* const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  }; */

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <a
          className="logo-mobile c-pointer"
          href="#scroll"
          onClick={(event) => scrollTo(event, 'home')}
        >
          <span />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'features')}
            >
              FEATURES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'layouts')}
            >
              LAYOUTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'components')}
            >
              COMPONENTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'apps')}
            >
              APPS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={(event) => scrollTo(event, 'themes')}
            >
              THEMES
            </a>
          </li>
          <li className="nav-item">
            <div className="separator" />
          </li>
          {/* <li className="nav-item text-center">
            <a
              className="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              rel="noopener noreferrer"
              href={buyUrl}
            >
              BUY
            </a>
          </li> */}
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a
                className="navbar-logo pull-left c-pointer"
                href="#scroll"
                onClick={(event) => scrollTo(event, 'home')}
              >
                <span className="white" />
                <span className="dark" />
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'features')}
                  >
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'layouts')}
                  >
                    LAYOUTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'components')}
                  >
                    COMPONENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'apps')}
                  >
                    APPS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'themes')}
                  >
                    THEMES
                  </a>
                </li>
                {/* <li className="nav-item pl-4">
                  <a
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={buyUrl}
                  >
                    BUY WEB
                  </a>
                </li> */}
              </ul>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <span
                className="mobile-menu-button"
                onClick={(event) => {
                  setShowMobileMenu(!showMobileMenu);
                  event.stopPropagation();
                }}
              >
                <i className="simple-icon-menu" />
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img
                      alt="mobile hero"
                      className="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">
                      BANTIC FINTECH <br />
                      SOFTWARE
                    </div>
                    <p className="white mb-5">
                      Gogo is the combination of good design, quality code and
                      attention for details.
                      <br />
                      <br />
                      We used same design language for components, layouts, apps
                      and other parts of the template. <br />
                      <br />
                      Hope you enjoy it!
                    </p>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a
                      className="btn btn-light btn-xl mr-2 mb-2"
                      href={adminRoot}
                      target="_blank"
                    >
                      VIEW NOW <i className="simple-icon-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href={adminRoot} target="_blank">
                    <img
                      alt="hero"
                      src="/assets/img/landing-page/home-hero.png"
                    />
                  </a>
                </div>
              </div>

              

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                  onClick={(event) => scrollTo(event, 'features')}
                >
                  <i className="simple-icon-arrow-down" />
                </a>
              </div>
            </div>
          </div>                

         

          

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">2021 © BANTIC FINTECH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
