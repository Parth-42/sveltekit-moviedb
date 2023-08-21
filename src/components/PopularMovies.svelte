<script>
	import MovieCard from './MovieCard.svelte';

	/**
	 * @type {any}
	 */
	export let movies;
</script>

<h3>Popular Movies</h3>

<div class="popular-movies">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 2rem 0rem;
	}

	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 2rem;
		grid-row-gap: 3rem;
	}
</style>
