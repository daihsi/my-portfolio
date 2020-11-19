<template>
  <v-app>
    <v-container>
      <h2
        id="page-title"
        class="text-center mt-5 mb-10 animate__animated animate__slideInUp"
      >
        {{ title }}
      </h2>
      <!-- larnguagesのゾーン開始 -->
      <h3 
        class="skils-sub-title animate__animated animate__fadeIn"
      >
        {{ skilsTitle[0] }}
      </h3>
      <v-row
        class="mt-5"
      >
        <v-col
          clos="4"
          v-for="(language, index) in languages"
          :key="index"
          class="d-flex justify-center"
        >
          <div 
            class="d-flex flex-column"
          >
            <v-fa
              class="skils-page-icon animate__animated animate__slideInLeft"
              :class="language.class"
              :icon="[language.prefix, language.iconName]" 
            />
            <span
              class="skils-name mt-2 mb-5 animate__animated animate__fadeIn"
            >
              {{ language.name }}
            </span>
          </div>
        </v-col>
      </v-row>
      <!-- larnguagesのゾーン終了 -->
      <!-- frameworksのゾーン開始 -->
      <h3 
        class="skils-sub-title animate__animated animate__fadeIn"
      >
        {{ skilsTitle[1] }}
      </h3>
      <v-row
        class="mt-5"
      >
        <v-col
          clos="4"
          v-for="(framework, index) in frameworks"
          :key="index"
          class="d-flex justify-center"
        >
          <div 
            class="d-flex flex-column"
          >
            <v-fa
              class="skils-page-icon animate__animated animate__slideInRight"
              :class="framework.class"
              :icon="[framework.prefix, framework.iconName]" 
            />
            <span
              class="skils-name mt-2 mb-5 animate__animated animate__fadeIn"
            >
              {{ framework.name }}
            </span>
          </div>
        </v-col>
      </v-row>
      <!-- frameworksのゾーン終了 -->
      <!-- othersのゾーン開始 -->
      <h3 
        class="skils-sub-title animate__animated animate__fadeIn"
      >
        {{ skilsTitle[2] }}
      </h3>
      <v-row
        class="mt-5"
      >
        <v-col
          clos="4"
          v-for="(other, index) in others"
          :key="index"
          class="d-flex justify-center"
        >
          <div 
            class="d-flex flex-column"
          >
            <v-fa
              class="skils-page-icon animate__animated animate__slideInLeft"
              :class="other.class"
              :icon="[other.prefix, other.iconName]" 
            />
            <span
              class="skils-name mt-2 mb-10 animate__animated animate__fadeIn"
            >
              {{ other.name }}
            </span>
          </div>
        </v-col>
      </v-row>
      <!-- othersのゾーン終了 -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: "skils",
    skilsTitle: ["languages", "frameworks", "others"],
    languages: [
      { 
        prefix: "fas",
        iconName: "file-code",
        name: "HTML / CSS",
        class: "tag-color"
      },
      {
        prefix: "fab",
        iconName: "js-square",
        name: "JavaScript",
        class: "javascript-color"
      },
      {
        prefix: "fab",
        iconName: "php",
        name: "PHP",
        class: "php-color"
      }
    ],
    frameworks: [
      {
        prefix: "fab",
        iconName: "laravel",
        name: "Laravel",
        class: "laravel-color"
      },
      {
        prefix: "fab",
        iconName: "vuejs",
        name: "Vue.js",
        class: "vuejs-color"
      },
      {
        prefix: "fab",
        iconName: "bootstrap",
        name: "Bootstrap",
        class: "bootstrap-color"
      }
    ],
    others: [
      {
        prefix: "fab",
        iconName: "aws",
        name: "AWS",
        class: "aws-color"
      },
      {
        prefix: "far",
        iconName: "circle",
        name: "CircleCI",
        class: "circleci-color"
      },
      {
        prefix: "fab",
        iconName: "git-alt",
        name: "git",
        class: "git-color"
      }
   ]
  })
}
</script>

<style scoped>
  .skils-sub-title {
    font-weight: 300;
    font-size: 20px;
    text-align: center;
  }
  .skils-page-icon {
    font-size: 6rem;
  }
  .skils-name {
    text-align: center;
    color: grey;
    font-weight: 300;
  }
  .tag-color {
    color: #e44d26;
  }
  .javascript-color {
    color: #f0db48;
  }
  .php-color {
    color: #787cb4;
  }
  .laravel-color {
    color: #f4645f;
  }
  .vuejs-color {
    color: #4fc08d;
  }
  .bootstrap-color {
    color: #7952b3;
  }
  .aws-color {
    color: #242F3E;
  }
  .circleci-color {
    /* */
  }
  .git-color {
    color: #f14e32;
  }
</style>