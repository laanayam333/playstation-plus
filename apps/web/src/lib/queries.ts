import { groq } from 'next-sanity';

const gameFields = groq`
	"id": _id,
	_updatedAt,
	name,
`;

// Queries

export const homePageQuery = groq`
{
"games": *[_type == "game"] {
	${gameFields}
	}
}`;
