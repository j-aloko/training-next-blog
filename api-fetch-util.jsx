export function getSinglePost(posts, Id) {
  const post = posts.find((p) => p.id === +Id);
  return post;
}
