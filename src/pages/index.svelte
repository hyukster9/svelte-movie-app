<script>
    import { metatags } from "@roxi/routify";
    import Headline from "./_components/headline.svelte";
    import Search from "./_components/search.svelte";
    import MovieList from "./_components/movielist.svelte";
    import {initMovieList} from '/src/store/movie';

    // metatags.title = "My Routify app";
    // metatags.description = "Description coming soon...";
    initMovieList()
</script>

<div class="container">
    <Headline />
    <Search />
    <MovieList />
</div>

<style lang="scss"></style>
