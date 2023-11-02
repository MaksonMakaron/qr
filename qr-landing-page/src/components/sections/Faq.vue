<template>
  <v-card
    width="1350"
    :elevation="0"
    id="faq"
    class="d-flex flex-column align-center faq mx-auto"
    color="transparent"
  >
    <h3 class="faq__heading mb-2">
      Frequently Asked <strong>Questions</strong>
    </h3>
    <p class="faq__desc mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel :elevation="0">
        <v-expansion-panel-title
          class="faq__title"
          color="transparent"
          v-ripple="{ color: 'primary' }"
        >
          <v-icon
            icon="mdi-arrow-right-circle"
            class="mr-2"
            color="primary"
            size="30"
          />
          What is web domain and hosting?</v-expansion-panel-title
        >
        <v-expansion-panel-text>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel :elevation="0">
        <v-expansion-panel-title
          class="faq__title"
          color="transparent"
          v-ripple="{ color: 'primary' }"
        >
          <v-icon
            icon="mdi-arrow-right-circle"
            class="mr-2"
            color="primary"
            size="30"
          />
          Which server is best for websites linux or
          windows?</v-expansion-panel-title
        >
        <v-expansion-panel-text>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel :elevation="0">
        <v-expansion-panel-title
          class="faq__title"
          color="transparent"
          v-ripple="{ color: 'primary' }"
        >
          <v-icon
            icon="mdi-arrow-right-circle"
            class="mr-2"
            color="primary"
            size="30"
          />
          Google cloud or Amazon server which one is best and
          fast?</v-expansion-panel-title
        >
        <v-expansion-panel-text>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel :elevation="0">
        <v-expansion-panel-title
          class="faq__title"
          color="transparent"
          v-ripple="{ color: 'primary' }"
        >
          <v-icon
            icon="mdi-arrow-right-circle"
            class="mr-2"
            color="primary"
            size="30"
          />
          Why Organic SEO is important for all
          businesses?</v-expansion-panel-title
        >
        <v-expansion-panel-text>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
          velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
          fugiat quo voluptas nulla pariatur?
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import { ref } from "vue";
</script>

<style scoped>
.faq {
  padding: 90px 0px !important;
}

.faq__heading {
  font-weight: 400;
  font-size: 34px;
}

.faq__desc {
  font-size: 15px;
  color: #6c757d;
}

.faq__title {
  font-weight: 600;
  font-size: 18px;
}

.faq__title__active {
  color: blueviolet !important;
}
</style>
