import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import AboutMe from "../../containers/aboutme/AboutMe";
import "./AboutMe.css";

class About extends Component {
  render() {
    return (
      <div className="about-main">
        <Header theme={this.props.theme} />
        <AboutMe theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default About;
