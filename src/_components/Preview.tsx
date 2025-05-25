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
      className="card bg-base-200 dark:bg-base-300 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer rounded-box my-8 md:my-16 text-sm"
      data-href={url}
    >
      <div className="flex flex-col sm:flex-row w-full p-4 md:p-8">
        <div className="flex justify-center items-center mb-4 sm:mb-0">
          <a href={url}>
            {image && <img src={image} alt={`Image for ${title}`} className="w-full sm:w-[200px] h-[120px] sm:h-[150px] object-cover rounded-box" />}
          </a>
        </div>
        <div className="flex-1 sm:ml-8 md:ml-16 text-center sm:text-left">
          <a href={url} className="card-title text-lg md:text-xl font-bold line-clamp-2">
            {title}
          </a>
          {description && (
            <p className="line-clamp-2 md:line-clamp-3 my-2">{description}</p>
          )}
          <p className="mt-2 text-primary font-semibold">{hostname}</p>
        </div>
      </div>
    </div>
  );
}
