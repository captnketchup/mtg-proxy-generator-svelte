import { MoxfieldClient } from '$lib/api/moxfield-client';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const { username } = params;

	try {
		const user = await MoxfieldClient.GetUser(username);
		if (!user) {
			return new Response(null, { status: 404 });
		}
		return json(user);
	} catch (err) {
		console.error(err);
		return new Response(null, { status: 500 });
	}
};
