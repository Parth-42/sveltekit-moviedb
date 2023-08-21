<script>
	export let data;
	import PopularMovies from '../components/PopularMovies.svelte';
</script>

<section>
	<PopularMovies movies={data?.props?.popular} />
</section>
