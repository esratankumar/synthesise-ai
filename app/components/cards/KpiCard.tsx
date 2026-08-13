"use client";

interface Props {
  title: string;
  value: string;
}

export default function KpiCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6 shadow-lg hover:scale-105 transition-transform duration-300">

      <h3 className="text-zinc-400 text-sm">
        {title}
      </h3>

      <p className="mt-4 text-4xl font-bold text-white">
        {value}
      </p>

    </div>
  );
}
