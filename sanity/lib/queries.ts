import { groq } from "next-sanity";

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->title,
  "author": author->name,
  body
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->title,
  "author": author->{name, image, bio},
  body
}`;

export const projectsQuery = groq`*[_type == "project"] {
  _id,
  title,
  description,
  role,
  link
}`;
