<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(${offset}px)` }">
      <div v-for="(card, index) in duplicatedCards" :key="index" class="card rounded-xl" :style="{ backgroundImage: card.backgroundImage }">
        <div class="card-content p-4 bg-white shadow-md rounded-lg">
          <h2 class="text-2xl font-semibold text-white">{{ card.title }}</h2>
          <p class="mt-2">{{ card.description }}</p>
        </div>
      </div>
    </div>
    <button class="next-button" @click="nextCard"><img src="https://cdn-icons-png.flaticon.com/128/3717/3717686.png" class="w-[30px]"></button>
    <button class="prev-button" @click="prevCard"><img src="https://cdn-icons-png.flaticon.com/128/4421/4421559.png" class="w-[30px]"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "United Kingdom",
          backgroundImage: "url('https://incor.hr/wp-content/uploads/2019/06/kings-college-3889124_1920.jpg')",
        },
        {
          title: "United States of America",
          backgroundImage: "url('https://www.timeshighereducation.com/sites/default/files/styles/teaser_standard/public/stanford-university-best-universities-in-the-united-states-2016.jpg?itok=9wMylbYb')",
        },
        {
          title: "United Arab Emirates",
          backgroundImage: "url('https://imagevars.gulfnews.com/2011/9/4/1_16a080b587a.861513_1976088879_16a080b587a_large.jpg')",
        },
        {
          title: "Canada",
          backgroundImage: "url('https://www.jeduka.com/storage/newsletter/1600422541_List_of_Universities_in_Canada.jpg')",
        }, {
          title: "South Africa",
          backgroundImage: "url('https://media.premiumtimesng.com/wp-content/files/2020/04/research-header.jpg')",
        }, 
      ],
      currentIndex: 0,
      cardWidth: 400, // Adjust as needed
      offset: 0,
      autoplayInterval: null,
    };
  },
  computed: {
    duplicatedCards() {
      return [...this.cards, ...this.cards];
    },
  },
  mounted() {
    this.startAutoplay();
  },
  beforeDestroy() {
    this.stopAutoplay();
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(this.nextCard, 3000); // Auto-play interval
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.updateOffset();
    },
    updateOffset() {
      this.offset = -this.currentIndex * this.cardWidth;
    },

    prevCard() {
      this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
      this.updateOffset();
    },
    
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.updateOffset();
    },
  },
};
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel {
  display: flex;
  transition: transform 0.5s;
  
}

.card {
  width: 400px;
  flex-shrink: 0;
  margin-right: 20px;
  background-size: cover;
  background-position: center;
}

.card-content {

  padding: 1rem;
  background-color: rgba(82, 21, 21, 0.328); /* Use a transparent background for better image visibility */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 300px;

}
.prev-button,
.next-button {
  margin-top: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 14px;
  border: none;
  color: white;
  border-radius: 4px;
}

.prev-button {
  margin-right: 1rem;
}

.next-button:hover,
.prev-button:hover {
  background-color: #0056b3;
}
</style>
