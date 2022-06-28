import { groq } from 'next-sanity';

const gameFields = groq`
	"id": _id,
	_updatedAt,
	name,
	"image": image.asset->url,
	console
`;

// Queries

export const homePageQuery = groq`
{
"games": *[_type == "game"] {
	${gameFields}
	}
}`;
