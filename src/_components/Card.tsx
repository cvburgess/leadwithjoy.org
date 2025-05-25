interface Props {
  title: string;
  description?: string;
  icon?: string;
  imgUrl?: string;
  url?: string;
}

export default function Card(
  { title, description = "", icon = "", imgUrl = "", url = "" }: Props,
) {
  const isExternal = url.startsWith("http");
  return (
    <div
      className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer rounded-box p-12 md:p-16"
      data-href={url}
    >
      <div className="flex flex-col sm:flex-row w-full h-full">
        <div className="flex justify-center items-center sm:w-auto w-full mb-4 sm:mb-0">
          <a
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {imgUrl && <img src={imgUrl} alt={`Image for ${title}`} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" />}
            {icon && (
              <img
                src={`/img/icons/${icon}.svg`}
                alt={icon}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] dark:invert-[0.85]"
              />
            )}
          </a>
        </div>
        <div className="flex-1 sm:ml-8 md:ml-16 text-center sm:text-left">
          <a
            href={url}
            className="text-primary text-2xl font-black line-clamp-2"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {title}
          </a>
          {description && (
            <p className="mt-4 line-clamp-3">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
