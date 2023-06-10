import React from "react";
import Offercard from "../components/Offercard";
import { Recommendedcards } from "../components/Recommendedcards";
import { BlogCard } from "../components/BlogCard";

export const Home = () => {
  const cardData = [
    {
      name: "Singapore",
      dis: "Singapore,offically the Republic of Singapore, is a",
    },
    {
      name: "Thailand",
      dis: "Thailand is a Southeast Asian country. it's known for",
    },
    {
      name: "Paris",
      dis: "Paris, France's capital, is a major Europea city abd a ",
    },
    {
      name: "New Zealand",
      dis: "New Zealand is an island country in the",
    },
    {
      name: "Bora Bora",
      dis: "Bora Bora is a smal South Pacific island northwest of",
    },
    {
      name: "London",
      dis: "London,the capital of England and the United",
    },
  ];
  return (
    <section className="home-section">
      <div className="banner-section">
        <img
          className="home-banner"
          src={require("../images/Home.png")}
          alt="Home"
        />
        <div className="banner-content">
          <h2>Travel to Explore</h2>
          <p className="intor-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            accusamus! Laboriosam numquam corporis necessitatibus, molestias
            dolorum at soluta minus accusamus.
          </p>
          <div className="search-con">
            <div className="laps">
              <p className="laps-topic">Where you Want to go</p>
              <input
                className="laps-value"
                type="text"
                placeholder=" Search your location"
              />
            </div>
            <div className="laps check-in">
              <p className="laps-topic">Check-in</p>
              <p className="laps-value">Add Date</p>
            </div>
            <div className="laps">
              <p className="laps-topic">Check-out</p>
              <p className="laps-value">Add Date</p>
            </div>

            <div className="lap-btn">
              <button typ="button">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
      <Offercard />
      <div className="recommend">
        <h4>Recommended Destination</h4>
        <div className="recommand-btn">
          <button type="button">The Weekend Break</button>
          <button type="button">The Package Holiday</button>
          <button type="button">The Group Tour</button>
          <button type="button">Long Term Slow Travel</button>
        </div>
        <div className="card-container">
          {cardData.map((item, index) => (
            <Recommendedcards key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="blog">
        <h4 className="topic">Blog</h4>
        <div className="blog-content">
          <BlogCard
            img={1}
            content={
              <div className="content">
                The Ulimate Guide <br />
                to Climbing <br />
                Mount Kilimajaro
              </div>
            }
          />
          <BlogCard
            img={2}
            content={
              <div className="content">
                12 Thing I'd Tell Any <br />
                New Traveler
              </div>
            }
          />
          <BlogCard
            img={3}
            content={
              <div className="content">
                Ulimate Packing List for <br />
                Female Travelers
              </div>
            }
          />
        </div>
      </div>
      <div className="customer-container">
        <h4 className="topic">Happy Customers</h4>
        <div className="sub-content">
          {[...Array(2)].map((_,idx) => (
            <article key={idx}>
              <div className="quote">"</div>
              <div>
                <p className="review">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate quia ut quae assumenda qui eaque eum repudiandae
                  impedit aperiam velit?
                  Cupiditate quia ut quae assumenda qui eaque eum repudiandae
                  impedit aperiam velit?
                </p>
                <div className="customer-sec">
                  <div className="customer-logo">
                    <img src={require("../images/Blogs_03.png")} alt="" />
                  </div>
                  <div>
                    <p className="user-name">Shalini Singh</p>
                    <p className="user-dis">Project Manger flyhigh</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
