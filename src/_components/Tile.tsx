interface Props {
  title: string;
  icon: string;
  url?: string;
}

export default function Tile({ title, icon = "", url = "" }: Props) {
  const isExternal = url.startsWith("http");
  return (
    <div
      className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer rounded-box p-4"
      data-href={url}
    >
      <div className="flex flex-col size-32 justify-center items-center">
        <div className="flex justify-center items-center w-full mb-4">
          <a
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <img
              src={`/img/icons/${icon}.svg`}
              alt={icon}
              className="size-12"
            />
          </a>
        </div>
        <div className="text-center">
          <a
            href={url}
            className="text-primary text-xl font-black line-clamp-2"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}
