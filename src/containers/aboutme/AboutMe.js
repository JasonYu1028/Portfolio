import React from "react";
import { Fade } from "react-reveal";
import "./AboutMe.css";

export default function AboutMe(props) {
  const theme = props.theme;
  return (
    <div className="aboutme-main" id="aboutme">
      <Fade bottom duration={2000} distance="40px">
        <div className="aboutme-div">
          <img
            className="aboutme-myPhoto"
            alt=""
            src={require(`../../assests/images/AboutMe.png`)}
          />
          <div className="heading-text-div">
            <h1 className="aboutme-heading" style={{ color: theme.text }}>
              Nice to meet you!
            </h1>
            <div
              className="aboutme-subTitle"
              style={{ color: theme.secondaryText }}
            >
              <p>
                You must want to know more about me, yeah! I am a student at the
                University of Waterloo (Class 2026). I met a group of lovely
                peers whom I spent most of my time studying and hanging out
                with. So, a little about my story...
              </p>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom duration={2000} distance="40px">
        <h2 className="SubHeading">
          Take a look at my journey and the gallery
        </h2>
      </Fade>

      <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div class="timeline__event__icon ">
            <i class="fas fa-birthday-cake"></i>
          </div>
          <div class="timeline__event__date">2002</div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title">Birthday</div>
            <div class="timeline__event__description">
              <p>
                Twenty years ago, I was born into a family of four (I have an
                elder brother) and raised in Anshan, a small city located in the
                North-East of China, where I spent most of my frist 18 years.{" "}
              </p>
              <p>
                I'm a people person and enjoy spending time outside doors with
                friends. People around me always comment me that I am
                detail-oriented, self-motivated, and self-disciplined, which I
                totally agree (Hope this does not sound like “narcissism”. Oh,
                definitely NOT!🤠)
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <i class="fas fa-school"></i>
          </div>
          <div class="timeline__event__date">2009 - 2020</div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Previous Schools</div>
            <div class="timeline__event__description">
              <p>
                I attended Huayu Primary & Junior School for nine years, during
                which time I developed strong friendships and a passion for
                Mathematics. I started to show signs of leadership, and during
                the nine years, I was a class president and student leader. The
                principal often assigned me jobs with great trust, offering me
                the right to deliver detailed divisions and announcements.
              </p>
              <p>
                At No.8 Senior High School, I came up with a strong desire to
                study abroad, and I took it upon myself to make English a top
                priority, improving my English proficiency during my
                extracurricular time. In 2020, my story in Canada has been
                unfolding ever since I left home from my familiar surroundings
                and travelled to Canada alone to start my overseas journey.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div class="timeline__event__icon">
            <i class="fab fa-canadian-maple-leaf"></i>
          </div>
          <div class="timeline__event__date">2021 - Present</div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">life at Cannda</div>
            <div class="timeline__event__description">
              <p>
                In 2021, I started pursuing my CFM degree at my dream school,
                the University of Waterloo, where I interacted and progressed
                with great people in the top mathematics faculty in North
                America. Most importantly, I met my CFM buddies who encouraged
                me when I was lost, supported me when I was suffering, and
                shared my joy when I was successful.
              </p>
              <p>
                The professional skills I acquired at UWaterloo, the priceless
                experience I obtained through the Co-op opportunities, and the
                life I lived with my buddies are my fondest memories in Canada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="box">
          <img alt="" src={require(`../../assests/images/Anshan1.jpeg`)} />
          <span>Anshan</span>
        </div>
        <div class="box">
          <img alt="" src={require(`../../assests/images/Anshan2.jpeg`)} />
          <span>Anshan</span>
        </div>
        <div class="box">
          <img alt="" src={require(`../../assests/images/Home1.jpeg`)} />
          <span>My Home</span>
        </div>
        <div class="box">
          <img alt="" src={require(`../../assests/images/Home2.jpeg`)} />
          <span>My Home</span>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
        rel="stylesheet"
      />
      <div class="gallery">
        <div class="gallery__column">
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/11.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                UWaterloo @ DP 📚
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/12.jpg`)}
                width="300"
                height="500"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                CFM Folks @ Party! 🥳
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/13.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                CFM Folks @ Networking 🌐
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="gallery__column">
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/21.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Google @ Waterloo 🤖
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/22.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                CFM Folks @ Meeting 🍽
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/23.jpg`)}
                width="300"
                height="500"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Chef Jason @ Cooking! 🥟
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="gallery__column">
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/31.jpg`)}
                width="300"
                height="500"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Jason @ Toronto 🏖️
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/32.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Amazing Night @ China 🌃
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/33.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                UWaterloo @ MC 🖥️
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="gallery__column">
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/41.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                CFM @ Program Party 🎉
              </figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/42.jpg`)}
                width="300"
                height="300"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">UWaterloo @ E7 🫡</figcaption>
            </figure>
          </div>
          <div class="gallery__link">
            <figure class="gallery__thumb">
              <img
                alt=""
                src={require(`../../assests/images/43.jpg`)}
                width="300"
                height="500"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Vacation @ Niagara 🌊
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <h3 className="FinalWord">
        My story is moving on, and my values are waiting to be explored.
      </h3>
      <h3 className="FinalWord">
        I am always on the way to meeting a better version of myself!
      </h3>
    </div>
  );
}
