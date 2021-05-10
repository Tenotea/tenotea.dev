<template>
  <div id="skills" class="skills_container">
    <div class="skills_container__content_box">
      <common-section-title> My Skills </common-section-title>

      <div class="skills_container__content_box--grid" ref="cardsGrid">
        <div class="skill_card">
          <div class="skill_card__title">
            <h3 class="skill_card__title--skill_name">UI/UX Design</h3>
            <hr class="skill_card__title--line_element" />
          </div>

          <div class="skill_card__details">
            <p class="skill_card__details--content">
              I use design tools like <span class="highlight">Figma</span> and
              <span class="highlight">AdobeXD</span> to design amazing user
              interfaces for websites and web apps that house wonderful user
              experience.
            </p>
          </div>

          <div class="skill_card__action">
            <router-link to="/">
              <button class="skill_card__action--button">
                View UI Designs
              </button>
            </router-link>
          </div>

          <div class="skill_card__tools">
            <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
            <div class="skill_card__tools--list">
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Figma</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">AdobeXD</p>
              </div>
            </div>
          </div>
          <div class="floating_bubble">
            <hero-bubble
              size="145"
              gradient="linear-gradient(45deg, rgb(234 234 234 / 0%), rgb(226 128 73 / 30%))"
            />
          </div>
        </div>

        <!-- FRONTEND  -->
        <div class="skill_card">
          <div class="skill_card__title">
            <h3 class="skill_card__title--skill_name">
              FRONTEND WEB DEVELOPMENT
            </h3>
            <hr class="skill_card__title--line_element" />
          </div>

          <div class="skill_card__details">
            <p class="skill_card__details--content">
              I use javascript frameworks (<span class="highlight">
                Vue.js
              </span>
              and <span class="highlight"> React.js </span> ) to build modern
              and responsive websites and web apps. I also create custom layouts
              to fit your needs with my vast knowledge of CSS
            </p>
          </div>

          <div class="skill_card__action">
            <router-link to="/">
              <button class="skill_card__action--button">View Projects</button>
            </router-link>
          </div>

          <div class="skill_card__tools">
            <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
            <div class="skill_card__tools--list">
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">HTML, CSS, JavaScript, TypeScript</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Vue.js, React.js</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">
                  SASS/SCSS, TailwindCSS, Vuetify.js and more css libraries
                </p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">SSRs, SSGs, PWAs</p>
              </div>
            </div>
          </div>

          <div class="floating_illustration">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="147.639"
              height="49.068"
              viewBox="0 0 147.639 49.068"
            >
              <g transform="translate(-491.579 -1509.952)">
                <circle
                  class="a"
                  cx="15"
                  cy="15"
                  r="15"
                />
                <path class="b" d="M492,1548.019H629.048" />
                <path
                  class="b"
                  d="M492,1548.019H629.048"
                  transform="translate(0 10)"
                />
                <path
                  class="c"
                  d="M492,1531.523s12.543-19.564,29.431-19.233,16.665,20.228,33.152,20.228,4.639-20.173,22.866-22.037c14-1.432,96.551,55.473,43.909,21.042"
                />
              </g>
            </svg>
          </div>
        </div>

        <!-- BACKEND  -->
        <div class="skill_card backend">
          <div class="skill_card__title">
            <h3 class="skill_card__title--skill_name">
              BACKEND WEB DEVELOPMENT
            </h3>
            <hr class="skill_card__title--line_element" />
          </div>

          <div class="skill_card__details">
            <p class="skill_card__details--content">
              I use <span class="highlight"> Node.js </span> to build secure and
              fast Backend services, Rest APIs included
            </p>
          </div>

          <div class="skill_card__action">
            <router-link to="/">
              <button class="skill_card__action--button">View Projects</button>
            </router-link>
          </div>

          <div class="skill_card__tools">
            <h6 class="skill_card__tools--header">- Tools/Technologies</h6>
            <div class="skill_card__tools--list">
              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Node.js, TypeScript</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Express.js, Graphql</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">Firebase, MongoDB</p>
              </div>

              <div class="item">
                <img src="/src/assets/icons/check.svg" alt="" />
                <p class="item__name">SQL, MySQL, Postgres</p>
              </div>
            </div>
          </div>
          <div class="floating_bubble_two">
            <hero-bubble
              size="145"
              gradient="linear-gradient(45deg, rgb(234 234 234 / 0%), rgb(226 128 73 / 30%))"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import tilt from "vanilla-tilt";
import AppIcon from "../../common/AppIcon.vue";
import CommonSectionTitle from "../../common/CommonSectionTitle.vue";
import CommonSquareGrid from "../../common/CommonSquareGrid.vue";
import HeroBubble from "../hero/HeroBubble.vue";

export default defineComponent({
  components: { CommonSquareGrid, CommonSectionTitle, AppIcon, HeroBubble },
  mounted() {
    const cardsGrid = <HTMLDivElement>this.$refs.cardsGrid;
    const skillsCard: HTMLDivElement[] = [];
    for (let i = 0; i < cardsGrid.children.length; i++)
      skillsCard.push(<HTMLDivElement>cardsGrid.children.item(i));
    tilt.init(skillsCard, {
      speed: 100,
    });
  },
});
</script>


<style scoped lang="scss">
@import "../../../styles/components/home/skills.scss";

.a {
  fill: rgba(246, 158, 91, 0.398);
  transform: translate(507px, 1526px);
}
.b,
.c {
  fill: none;
}
.b {
  stroke: #f8a363;
  stroke-width: 2px;
  stroke-dasharray: 160px;
  stroke-dashoffset: 60px;
  transition: all ease 100ms;
}
.c {
  stroke: #cecdcd;
}
</style>
