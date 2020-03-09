import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import './App.css';
import Home from './Homepage/home';
import About from './About_Us/about';
import Services from './Services/services';
import News from './News/news';
import Contact from './Contact/contact';
import Footer from './footer';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      home: true,
      about: false,
      services: false,
      news: false,
      contact: false
    }
  }
  componentDidMount(){
    function closeMenu (){
      let close = document.querySelector('.close');
      close.addEventListener('click', (e) => {
        e.preventDefault();
        let mobileMenu = document.querySelector('.mobile-menu');
        let children = document.querySelector('.mobile-menu *');
        let input = document.querySelector('.mobile-menu input');
        let menus = document.querySelectorAll('.mobile-menu a:not(.close)');
        mobileMenu.style.width = "0px";
        input.style.opacity = "0";
        menus.forEach((menu) => {menu.style.visibility = "hidden"});
      });
    };
    closeMenu();
    function openMenu (){
      let hamburger = document.querySelector('.hamburger');
      hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        let mobileMenu = document.querySelector('.mobile-menu');
        let children = document.querySelector('.mobile-menu *');
        let input = document.querySelector('.mobile-menu input');
        let menus = document.querySelectorAll('.mobile-menu a:not(.close)');
        mobileMenu.style.width = "100vw";
        mobileMenu.style.position = "fixed";
        input.style.opacity = "2";
        menus.forEach((menu) => {menu.style.visibility = "visible"});
      });
    };
    openMenu();
  }
  
  handleHome = e => {
    e.preventDefault();
    this.setState({ home: true, about: false, services: false, news: false, contact: false, })
  }

  handleAbout = e => {
    e.preventDefault();
    this.setState({ home: false, about: true, services: false, news: false, contact: false, })
  }

  handleServices = e => {
    e.preventDefault();
    this.setState({ home: false, about: false, services: true, news: false, contact: false, })
  }

  handleNews = e => {
    e.preventDefault();
    this.setState({ home: false, about: false, services: false, news: true, contact: false, })
  }

  handleContact = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ home: false, about: false, services: false, news: false, contact: true, })
  }

  render(){
    return (
      <Router>
      <div className="whole-app">
        <div className="topbar">
          <p className="logo">Health<span className="plus">+</span></p>
          <div className="others">
            <a href="fb.com" className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </a>
            <ul>
              <li>Help Desk</li>
              <li>|</li>
              <li>Emergency Services</li>
              <li>|</li>
              <li>Appointment</li>
            </ul>
            <span className="font-weight-bold number">+34 586 778 8892</span>
          </div>
        </div>
        <div className="navigation">
          <Link className="d-inline-block mx-4" to="/">Home</Link>
          <Link className="d-inline-block mx-4" to="/about">About</Link>
          <Link className="d-inline-block mx-4" to="/services">Services</Link>
          <Link className="d-inline-block mx-4" to="/news">News</Link>
          <Link className="d-inline-block mx-4" to="/contact">Contact</Link>
          <input type="text" name="search" placeholder="Search" className="d-inline-block ml-auto" />
        </div>
        <div className="mobile-menu">
          <a href="facebook.com" className="close">x</a>
          <input type="text" name="search" placeholder="Search"/> 
          <Link href="facebook.com" to="/">Home</Link>
          <Link href="facebook.com" to="/about">About</Link>
          <Link href="facebook.com" to="/services">Services</Link>
          <Link href="facebook.com" to="/news">News</Link>
          <Link href="facebook.com" to="/contact">Contact</Link>
        </div>
        <Route path="/" exact strict component={Home} />
        <Route path="/about" exact strict component={About} />
        <Route path="/services" exact strict component={Services} />
        <Route path="/news" exact strict component={News}/>
        <Route path="/contact" exact strict component={Contact} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
