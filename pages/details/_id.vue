<template>
  <div>
    <pre v-if="movie">{{ movie }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
    }
  },

  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      console.log('titi')
      try {
        const id = this.$route.params.id // Si vous utilisez Vue Router
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU5OGZiM2NhZDI3MTI3NTdmNGZkMTAyMDVlZDk4MiIsInN1YiI6IjYxZmUzYjhmZDA1MWQ5MDBkOWJjNGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4b4AJGaL_DAH5r7Ullr1NH1vqpRRRh9W5NuHK8u0mY',
          },
        }

        const response = await fetch(
          `https://api.themoviedb.org/3/list/${id}?language=en-US&page=1`,
          options
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        this.movie = await response.json()
        console.log(this.movie, 'movie')
      } catch (error) {
        console.error('Fetch error:', error)
      }
    },
  },
}
</script>

