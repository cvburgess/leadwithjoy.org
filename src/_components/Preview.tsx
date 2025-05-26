interface Props {
  title: string;
  description: string;
  image: string;
  hostname: string;
  url: string;
}

export default function Preview(
  { title, description, image, hostname, url }: Props,
) {
  return (
    <div
      className="card sm:card-side bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-full"
      data-href={url}
    >
      {image && (
        <figure className="!max-w-10 w-10">
          <img width="48" className="!max-w-10 w-10" src={image} alt={`Image for ${title}`} />
        </figure>
      )}
      <div className="card-body p-4">
        <a href={url} className="card-title text-xs font-bold line-clamp-1 p-0 m-0 link-hover">
          {title}
        </a>
        {description && (
          <p className="line-clamp-1 text-xs text-base-content/80 my-0 p-0">{description}</p>
        )}
        <a href={url} className="text-primary text-center sm:text-left text-xs font-semibold line-clamp-1 p-0 m-0 link-hover">
          <p>{hostname}</p>
        </a>
      </div>
    </div >
  );
}
