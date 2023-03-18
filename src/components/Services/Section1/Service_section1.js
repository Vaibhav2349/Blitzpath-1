import React from "react";
import About_Section1 from "../../../images/ServicesPage.png";
import "./Service_section1.css";
import ConsultingServices from "../../../images/Consulting.png";
import AnalyticsServices from "../../../images/Analytics.png";
import TechnologyServices from "../../../images/Technology.png";
import SourcingServices from "../../../images/Sourcing.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Section1() {
  return (
    <div>
      <div className="Service_Container">
        <div className="Service_Image">
          <img src={About_Section1} alt="" />
        </div>
        <div className="content">
          <h1>
          Our specialized IT services are tailored for our clients
We prioritize the unique needs of each individual client
Our expertise spans across various domains
Including Information technology, Consulting, and Analytics
Our user-centric approach ensures optimal solutions.
          </h1>
        </div>
      </div>
      <div className="service_provide">
        <div className="service_box">
          <div className="service_box_image">
            <img src={ConsultingServices} alt="" />
          </div>
          <div className="service_box_content">
            <div className="title">
              <div className="service_title">
                <AnimationOnScroll
                  animateOnce={false}
                  offset={500}
                  animateIn="animate__fadeInUp"
                >
                  <h1>Consulting</h1>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="service_content">
              <p>
                World is changing everyday and the technology is changing faster
                than that. With every change, the challenge to keep pace with
                customer expectation keeps increasing. Customers expect help on
                channel of their choice to get variety of support. Blitzpath has
                expertise to develop right strategy for any business to select
                right channel for customer support. As per recent study,
                countries like India, China, Brazil, Japan, Australia and almost
                entire Europe has huge adoption for digital asynchronous
                channels such as WhatsApp, WeChat, Line. Blitzpath can help you
                to select right sales and support strategy to engage with
                customers
              </p>
              <p>
                Sometimes decision to arrive at right sourcing strategy for
                services can be complicated. Balancing customer experience with
                cost of support is not only challenging but can be a game
                changer. Many small and medium size brands have made it big with
                very unique sourcing strategy. Blitzpath has expertise in
                analytics, market study and vendor identification process to
                help their customers in deciding the right approach just perfect
                and customized for their requirement. Engaging Blitzpath early
                and partnering in strategy session can multiply the ROI.
                Outsourcing, Crowdsourcing, Offshoring and Process leasing
                decisions have never been so easy – engage Blitzpath.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service_provide">
        <div className="service_box">
          <div className="service_box_content">
            <div className="title">
              <div className="service_title">
                <AnimationOnScroll
                  animateOnce={false}
                  offset={150}
                  animateIn="animate__fadeInUp"
                >
                  <h1>Technology</h1>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="service_content">
              <p>
                Technology and Software development skills are commodity in the
                21st century. India has been biggest pool of software
                development resources and as per market study entire country is
                a competency in itself for development and maintenance
                activities. Freelancers in software development, product
                maintenance and support can bring the cost down significantly
                which can help in powering the bottom-line, Blitzpath has helped
                several Small and Medium businesses to develop right strategy
                which takes the entire project from conceptualization to
                delivery of results.
              </p>
              <p>
                Blitzpath has delighted clients in execution of Technology
                Programs which are targeted towards
              </p>
              <ul>
                <li>Development of applications</li>
                <li>QA and related activities</li>
                <li>Database Management</li>
                <li>Maintenance of large application – ERP, CRM</li>
                <li>Customization of products</li>
                <li>Post release support</li>
              </ul>
              <p>
                Various customizable models of business engagements are
                available which are just right for their clients requirements.
              </p>
            </div>
          </div>
          <div className="service_box_image">
            <img src={TechnologyServices} alt="" />
          </div>
        </div>
      </div>
      <div className="service_provide">
        <div className="service_box">
          <div className="service_box_image">
            <img src={AnalyticsServices} alt="" />
          </div>
          <div className="service_box_content">
            <div className="title">
              <div className="service_title">
                <AnimationOnScroll
                  animateOnce={false}
                  offset={150}
                  animateIn="animate__fadeInUp"
                >
                  <h1>Analytics</h1>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="service_content">
              <p>
                Leading industry giants in Technology space have forecasted that
                50% of processes will be taken over by Artificial Intelligence
                (AI) and Machine Learning (ML) based algorithms by 2030. With
                such a promising future, it is always recommended that
                businesses remain ahead of the curve. One of the leading app
                based ride-share brand partnered with Blitzpath to develop their
                AI powered chatbot solution which helps in quick response to
                their riders/ drivers to address their queries. Partnering with
                development agencies and helping them with annotation services
                using crowdsourcing solution was a great learning experience.
                Blitzpath took the practice forward and makes these services
                available for all of their Small and Medium business customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service_provide">
        <div className="service_box">
          <div className="service_box_content">
            <div className="title">
              <div className="service_title">
                <AnimationOnScroll
                  animateOnce={false}
                  offset={150}
                  animateIn="animate__fadeInUp"
                >
                  <h1>Sourcing</h1>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="service_content">
              <p>
                Evolving business models in the industry are fueled further by
                Information Technology Enabled Services. While late 20th century
                experienced surge in Offshore and outsourcing models, it laid
                foundations for much advanced partnership arrangement in early
                21st century. Business Process Outsourcing relied a lot on cost
                arbitrage, liability reductions however it still has significant
                dependency on training, infrastructure and country regulations.
              </p>
              <p>
                Blitzpath extended all prevailing sourcing frameworks and
                started experimenting on gig model – good 3-4 years ahead of its
                popularity. Crowdsourcing has not only cost advantage, but edge
                over other sourcing models in terms of quality. Clients get all
                advantage of outsourcing whereas Blitzpath work on their behalf
                to rally around all resources who can work within a framework.
                Being ahead in this strategy means – better platform, secured
                environment, sustaining pipeline in several domains such as
                support, services, linguists, software developers, data quality,
                data entry specialists.
              </p>
            </div>
          </div>
          <div className="service_box_image">
            <img src={SourcingServices} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
