<template>
  <div>
    <div :id="id" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          v-for="image in images"
          :key="image.id"
          :data-bs-target="'#' + id"
          :data-bs-slide-to="image.id"
          :class="{ active: image.id == 0 }"
          aria-current="true"
          :aria-label="'Slide' + (image.id + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(image, index) in images"
          :key="image.id"
          class="carousel-item"
          :class="{ active: image.id == 0 }"
        >
          <img :src="image.src" :alt="index" class="block w-full w-100 h-80" />
        </div>
      </div>
      <button
        v-if="images.length > 1"
        class="carousel-control-prev"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" v-if="buttonsVisible">Anterior</span>
      </button>
      <button
       v-if="images.length > 1"
        class="carousel-control-next"
        type="button"
        :data-bs-target="'#' + id"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden" v-if="buttonsVisible">Próximo</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    myid: String,
    images: Array,
  },
  data() {
    return {
      id: null,
      buttonsVisible: true,
    };
  },
  mounted() {
    const self = this;
    this.id = this.myid;
    setTimeout(() => {
        self.buttonsVisible = false;
    }, 1000);
  },
  methods: {},
};
</script>
<style>
</style>
