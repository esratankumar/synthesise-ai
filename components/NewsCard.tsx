type NewsCardProps = {
  title: string;
  url: string;
};

export default function NewsCard({
  title,
  url,
}: NewsCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        border
        rounded-xl
        p-4
        my-2
        hover:bg-gray-100
        dark:hover:bg-gray-800
        transition
      "
    >
      <div className="font-semibold">
        📰 {title}
      </div>

      <div className="text-sm text-blue-500 break-all">
        {url}
      </div>
    </a>
  );
}
