interface Props {
  tags?: string[];
}

export default function TagList({ tags }: Props) {
  if (!tags) return null;

  const skippedTags = ["post"]; // "crash course", "deep dive", "guide", "playbook"
  const displayTags = tags.filter((tag) => !skippedTags.includes(tag));

  return (
    <div className="flex flex-wrap my-4 md:my-8 justify-center gap-2 md:gap-4">
      {displayTags.map((tag) => (
        <a href="/tags/{{tag | slugify}}" className="hover:no-underline">
          <span className="badge badge-outline badge-lg badge-primary px-4 md:px-8 py-3 md:py-4 uppercase hover:bg-primary hover:text-base-100 transition-colors">{tag.toUpperCase()}</span>
        </a>
      ))}
    </div>
  );
}
