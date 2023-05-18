<template>
  <div>
    <div :id="id" class="relative" data-te-carousel-init data-te-carousel-slide>
      <!--Carousel indicators-->
      <div
        class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          v-for="image in images"
          :key="image.id"
          :data-te-target="'#' + id"
          :data-te-slide-to="image.id"
          :data-te-carousel-active="image.id == 0"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      </div>

      <!--Carousel items-->
      <div
        class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
      >
        <!--First item-->
        <div
          class="relative float-left -mr-[100%] h-72 w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style="backface-visibility: hidden"
          v-for="image in images"
          :key="image.id"
          :data-te-carousel-active="image.id == 0"
        >
          <img :src="image.src" class="block w-full h-72" alt="..." />
        </div>
      </div>

      <!--Carousel controls - prev item-->
      <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide="prev"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span
        >
      </button>
      <!--Carousel controls - next item-->
      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        :data-te-target="'#' + id"
        data-te-slide="next"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span
        >
      </button>
    </div>
    <div class="text-center">

    <span v-if="images.length > 1" class="text-xs block text-center text-gray-500"
      >Arraste para o lado ou clique no botões para passar</span
    >
    </div>
  </div>
</template>

<script>
import { Carousel, initTE } from "tw-elements";

export default {
  props: {
    id: String,
    images: Array,
  },
  data() {
    return {
      currentIndex: 0,
      carouselItems: null,
    };
  },
  mounted() {
    initTE({ Carousel });
  },
  methods: {},
};
</script>
<style>
.carousel {
  overflow: hidden;
  width: 100%;
}

.carousel-inner {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.carousel-control.prev {
  left: 0;
}

.carousel-control.next {
  right: 0;
}
</style>
