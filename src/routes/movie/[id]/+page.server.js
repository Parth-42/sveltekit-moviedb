import { API_KEY } from '$env/static/private';

// @ts-ignore
export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US&page=1`
	);
	const details = await res.json();
	if (res.ok) {
		return {
			props: { details }
		};
	}
}
