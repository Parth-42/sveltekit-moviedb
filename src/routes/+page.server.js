// @ts-ignore
import { API_KEY } from '$env/static/private';

// @ts-ignore
export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
	);
	const data = await res.json();
	if (res.ok) {
		return {
			props: { popular: data.results }
		};
	}
}
