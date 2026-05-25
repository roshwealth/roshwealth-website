import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "author": author->name,
    category,
    seo
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(orderRank asc) {
    _id,
    name,
    role,
    company,
    quote
  }
`;
