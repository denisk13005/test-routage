<template>
  <div>
    id page
    <!-- <div v-for="post in posts" :key="post">
      {{ post }}
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: [],
    }
  },

  async fetch({ params }) {
    const id = params.id
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU5OGZiM2NhZDI3MTI3NTdmNGZkMTAyMDVlZDk4MiIsInN1YiI6IjYxZmUzYjhmZDA1MWQ5MDBkOWJjNGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4b4AJGaL_DAH5r7Ullr1NH1vqpRRRh9W5NuHK8u0mY',
      },
    }

    this.movie = await fetch(
      `https://api.themoviedb.org/3/list/${id}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  },
}
</script>


<style lang="scss" scoped>
</style>
