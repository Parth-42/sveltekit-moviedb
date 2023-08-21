<script>
	/**
	 * @type {any}
	 */
	export let movie;
</script>

<a href={`/movie/${movie.id}`}>
	<div class="movie-card">
		<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
		<div class="description">
			<h2>{movie.title}</h2>
			<p>{movie.release_date}</p>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		color: black;
	}

	.movie-card {
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		border-radius: 1rem;
	}

	.movie-card:hover {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		transition: 0.2s ease-in-out;
	}

	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
		border-radius: 1rem 1rem 0 0;
	}

	.description {
		padding: 1rem;
	}

	h2 {
		font-size: 1rem;
	}

	p {
		font-size: 0.8rem;
	}
</style>
