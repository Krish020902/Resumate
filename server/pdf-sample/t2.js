module.exports = ({
  id,
  fname,
  lname,
  email,
  phone,
  linkedin,
  github,
  skills,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  extra_1,
  extra_2,
}) => {
  return `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        font-size: 100%;
        font-family: "PT Sans", sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 3rem 1rem;
        min-height: 100vh;
        background-color: var(#dedede);
      }

      .wrapper {
        margin: 0 auto;
        max-width: 70rem;
        background-color: var(#e9e9e9);
        display: flex;
        box-shadow: 0px 0px 15px 4px #b3b3b3;
      }

      .intro {
        flex: 0 0 250px;
        background-color: var(#f8f8f8);
        box-shadow: 5px 0px 15px 0px #b3b3b3;
        z-index: 5;
      }
      .profile {
        position: relative;
        background-color: var(#4682bf);
        padding: 2r;
        margin-bottom: 50px;
        text-align: center;
        user-select: none;
      }
      .profile::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: -15px;
        width: 100%;
        height: 30px;
        background-color: var(#4682bf);
        transform: skewY;
      }
      .photo img {
        width: 80%;
        border-radius: 50%;
      }
      .bio .name {
        font-size: 1.5rem;
        text-align: center;
        color: var(#f8f8f8);
        margin: 0;
        margin-top: 1rem;
      }
      .bio .profession {
        font-size: 1rem;
        text-align: center;
        color: var(#f8f8f8);
        margin: 0;
      }

      .intro-section {
        padding: 0 1rem;
        color: var(#545454);
      }
      .intro-section .title {
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .about .paragraph {
        text-align: justify;
      }
      .info-section {
        margin: 1rem 0;
      }
      .info-section span {
        position: relative;
        transition: all 0.3s;
      }
      .info-section i {
        color: var(#4682bf);
        width: 20px;
        height: 20px;
      }

      .link a {
        text-decoration: none;
        color: inherit;
      }

      /* Detail section overall setting*/
      .detail {
        flex: 1 0 0;
        background-color: white;
        padding: 2rem;
      }
      .detail-title {
        display: flex;
        align-items: center;
      }
      .detail-section > .detail-content {
        padding: 1.5rem;
        padding-left: 2rem;
        user-select: none;
      }
      .detail-section.edu > .detail-content {
        padding-left: calc(1.5rem + 10px);
      }
      .title-icon + span {
        font-size: 1.5rem;
        transition: all 0.3s;
      }
      .title-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin-right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(#4682bf);
        border-radius: 50%;
        transition: all 0.3s;
      }
      .title-icon i {
        color: white;
        line-height: 1rem;
        font-size: 1rem;
        text-align: center;
      }
      .timeline-block {
        position: relative;
        padding-left: 30px;
      }
      .timeline-block h1 {
        font-size: 1rem;
        margin: 5px 0;
        transition: all 0.3s;
      }
      .timeline-block p {
        font-size: 0.8rem;
        margin: 5px 0;
      }
      .timeline-block time {
        font-size: 0.8rem;
        color: var(#737373);
      }
      .timeline-block::before {
        position: absolute;
        content: "";
        width: 15px;
        height: 15px;
        background-color: white;
        border: 3px solid var(#14253e);
        border-radius: 50%;
        left: -10px;
        top: -5px;
      }
      .timeline-block::after {
        position: absolute;
        content: "";
        width: 3px;
        height: 100%;
        background-color: var(#14253e);
        left: -1px;
        top: 13px;
      }

      /* Programming skills section */
      .pg-list,
      .tool-list,
      .favor-list {
        padding: 0;
        list-style: none;
      }
      .pg-list > li {
        margin: 1rem 0;
        display: flex;
        align-items: center;
      }
      .sb-skeleton {
        position: relative;
        flex: 1 0 auto;
        height: 2px;
        background-color: var(#9a9a9a);
      }
      .pg-list > li > span {
        flex: 0 0 100px;
      }
      .sb-skeleton > .skillbar {
        position: absolute;
        left: 0;
        top: -1px;
        width: var(100%);
        height: 4px;
        background-color: var(#4682bf);
      }
      .tool-list {
        list-style: none;
        display: flex;
        justify-content: space-between;
      }
      .tool-list > li {
        position: relative;
        text-align: center;
        flex: 0 0 25%;
      }
      .tool-list > li > svg {
        position: relative;
        fill: transparent;
        width: 95%;
        transform: rotate(-90deg);
      }
      /* Interests Section */
      .outer-frame {
        border: 1px solid var(#9a9a9a);
        border-radius: 5px;
      }
      .favor-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
      }
      .favor-list > li {
        display: flex;
        flex: 1 0 0;
        align-items: center;
        justify-content: baseline;
        flex-direction: column;
        color: var(#4682bf);
        padding: 1rem 0;
        transition: all 0.3s;
      }
      .favor-list > li > i {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        width: 50px;
        height: 50px;
      }
      .favor-list > li > span {
        letter-spacing: 1px;
      }
      @keyframes circle {
        0% {
          box-shadow: 0 0 0 0px rgba(51, 52, 57, 1);
        }
        100% {
          box-shadow: 0 0 0 6px rgba(51, 52, 57, 0);
        }
      }
      @media (max-width: 1024px) {
        html {
          font-size: 90%;
        }
        .wrapper {
          flex-direction: column;
        }
        .intro,
        .detail {
          flex: 0 0 100%;
          box-shadow: none;
        }
        .intro-section {
          padding: 0 2rem;
        }
        .profile {
          margin-bottom: 1rem;
        }
        .profile::after {
          display: none;
        }
        .photo img {
          width: 100px;
          height: 100px;
        }
      }

      @media (max-width: 768px) {
        html {
          font-size: 80%;
        }
        .tool-list {
          flex-wrap: wrap;
        }
        .tool-list > li {
          flex: 0 0 33.33%;
        }
        .favor-list > li {
          flex: 0 0 33.3333%;
        }
      }
      @media (max-width: 500px) {
        html {
          font-size: 70%;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="intro">
        <div class="profile">
          <div class="bio">
            <h1 class="name">${fname} ${lname}</h1>
            <p class="profession">Front-end Developer</p>
          </div>
        </div>

        <div class="intro-section contact">
          <h1 class="title">Contact</h1>
          <div class="info-section">
            <i class="fas fa-phone"></i>
            <span>${phone}</span>
          </div>
          <div class="info-section">
            <i class="fas fa-paper-plane"></i>
            <span>${email}</span>
          </div>
          <div class="info-section link">
            <i class="fab fa-facebook"></i>
            <a target="_blank" rel="author" href="#">
              <span>${linkedin}</span>
            </a>
          </div>
        </div>
        <div class="intro-section follow">
          <!-- <h1 class="title">Follow</h1> -->
          <div class="info-section link">
            <i class="fab fa-github"></i>
            <a target="_blank" rel="author" href="#">
              <span>${github}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="detail-section edu">
          <div class="detail-title">
            <div class="title-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <span>Eduation</span>
          </div>
          <div class="detail-content">
            <div class="timeline-block">
              <h3>${edu1_school}</h3>
              <h1>${edu1_qualification}</h1>
              <p>${edu1_desc}</p>
              <time>${edu1_year}</time>
            </div>
          </div>
        </div>
        <div class="detail-section edu">
          <div class="detail-title">
            <div class="title-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <span>Work experience</span>
          </div>
          <div class="detail-content">
            <div class="timeline-block">
              <h3>${exp1_org}</h3>
              <h1>${exp1_pos}</h1>
              <p>${exp1_desc}</p>
              <time>${exp1_dur}</time>
            </div>
          </div>
        </div>
        <div class="detail-section edu">
          <div class="detail-title">
            <div class="title-icon">
              <i class="fas fa-user-graduate"></i>
            </div>
            <span>projects</span>
          </div>
          <div class="detail-content">
            <div class="timeline-block">
              <h1>${proj1_title}</h1>
              <p>${proj1_link}</p>
              <time>${proj1_desc}</time>
            </div>
            <div class="timeline-block">
              <h1>${proj2_title}</h1>
              <p>${proj2_link}</p>
              <time>${proj2_desc}</time>
            </div>
          </div>
        </div>
        <div class="detail-section pg-skill">
          <div class="detail-title">
            <div class="title-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <span>Programming skills</span>
          </div>
          <div class="detail-content">
            <ul class="pg-list">
              <li>
                <span>${skills}</span>
                <div class="sb-skeleton">
                  <div class="skillbar" style="--pgbar-length: 90%"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="detail-section interests">
          <div class="detail-title">
            <div class="title-icon">
              <i class="fas fa-heart"></i>
            </div>
            <span>Interests</span>
          </div>
          <div class="detail-content">
            <div class="outer-frame">
              <ul class="favor-list">
                <li>
                  <i class="fas fa-gamepad"></i>
                  <span>${extra_1}</span>
                </li>
                <li>
                  <i class="fas fa-paw"></i>
                  <span>${extra_2}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

    `;
};
