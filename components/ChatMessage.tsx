"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {

  const isUser = role === "user";

  return (

    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      <div
        className={`max-w-[90%] md:max-w-[75%] rounded-3xl px-5 py-4 ${
          isUser
            ? "bg-white text-black"
            : "bg-zinc-900 text-zinc-200"
        }`}
      >

        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>

      </div>

    </div>

  );

}
