export function SliceContent(content) {
  if (content.split(" ").length < 5) return content;
  const sliced = content.split(" ").slice(0, 5).join(" ") + "...";
  return sliced;
}
