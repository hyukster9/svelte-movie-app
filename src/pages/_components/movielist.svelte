<script>
    import { movies, loading, message } from "/src/store/movie";
    import Moviecard from "./moviecard.svelte";
    import Loader from "./loader.svelte";
</script>

<div class="movie-list">
    {#if $loading}
        <Loader />
    {/if}
    {#if $movies.length==0}
    <div class="message">
        {$message}
    </div>
    {:else}
    <div class="movies">
        {#each $movies as movie (movie.imdbID)}<Moviecard {movie} />{/each}
    </div>
    {/if}
</div>

<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 4px;
    text-align: center;
    .message{
      color: $color--primary;
      font-size: 20px;
      text-align: center;
      padding: 70px 0;
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
