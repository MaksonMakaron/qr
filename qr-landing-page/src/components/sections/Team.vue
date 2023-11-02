<template>
  <v-card
    :elevation="0"
    id="team"
    class="d-flex flex-column align-center team"
    color="transparent"
  >
    <v-card-title class="team__heading font-weight-medium mb-5"
      >Our Team
    </v-card-title>
    <p class="team__desc mb-15">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    <div class="team__block d-flex">
      <v-card
        class="ma-4"
        color="transparent"
        v-for="member in team"
        :key="member.full_name"
        :elevation="0"
        ><v-img width="300" class="rounded-xl" :src="member.photo" />
        <div class="d-flex justify-space-evenly my-2">
          <a
            href="http://"
            target="_blank"
            class="text-white"
            rel="noopener noreferrer"
          >
            <v-icon size="15" icon="mdi-twitter" />
          </a>
          <a
            href="http://"
            target="_blank"
            class="text-white"
            rel="noopener noreferrer"
          >
            <v-icon size="15" icon="mdi-facebook" />
          </a>
          <a
            href="http://"
            target="_blank"
            class="text-white"
            rel="noopener noreferrer"
          >
            <v-icon size="15" icon="mdi-linkedin" />
          </a>
          <a
            href="http://"
            target="_blank"
            class="text-white"
            rel="noopener noreferrer"
          >
            <v-icon size="15" icon="mdi-instagram" />
          </a>
        </div>
        <v-card-title class="member__heading"
          >{{ member.full_name }}
        </v-card-title>
        <v-card-subtitle class="member__position">{{
          member.position
        }}</v-card-subtitle>
      </v-card>
    </div>
  </v-card>
</template>

<script setup>
const team = [
  {
    full_name: "Jhone Bi",
    position: "Application Manager",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/team/team-1.jpg",
  },
  {
    full_name: "Sani Awesome",
    position: "Social Media",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/team/team-2.jpg",
  },
  {
    full_name: "Andrio Willi",
    position: "Content Writer",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/team/team-3.jpg",
  },
  {
    full_name: "Afa Jonson",
    position: "Business Manager",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/team/team-4.jpg",
  },
];
</script>

<style scoped>
.team {
  background: linear-gradient(rgb(76 56 177 / 90%), rgb(76 56 177 / 90%)),
    url("../../assets/cta-bg.jpg") center center;
  background-size: cover;
  padding: 150px 60px;
  border-radius: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.team__heading {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

.team__desc {
  color: white;
}

.member__heading {
  color: #fff;
  font-weight: 700;
  font-size: 20px;
}

.member__position {
  color: #fff;
  font-style: italic;
  font-size: 14px;
}
</style>
