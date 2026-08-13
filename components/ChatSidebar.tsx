"use client";

interface Props {
  chats: string[];
  onNewChat: () => void;
}

export default function ChatSidebar({
  chats,
  onNewChat,
}: Props) {

  return (

    <div className="w-[260px] bg-[#111] border-r border-zinc-800 h-screen p-4 hidden md:flex flex-col">

      <button
        onClick={onNewChat}
        className="bg-white text-black rounded-xl py-3 font-semibold mb-6"
      >
        + New Chat
      </button>

      <div className="space-y-2 overflow-y-auto">

        {chats.map((chat, index) => (

          <div
            key={index}
            className="bg-zinc-900 hover:bg-zinc-800 transition p-3 rounded-xl text-sm text-zinc-300 cursor-pointer"
          >
            {chat}
          </div>

        ))}

      </div>

    </div>

  );

}
