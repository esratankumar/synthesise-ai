"use client";
import NewsFeed from "../components/NewsFeed";
import NewsCard from "@/components/NewsCard";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: string;
  content: string;
  sources?: any[];
};
type ChatSession = {
  id: string;
  title: string;
  messages: Message[];
};

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default function AssistantPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeChatId, setActiveChatId] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);


  const recognitionRef = useRef<any>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

const [newsFeed, setNewsFeed] =
  useState<any[]>([]);

// =========================
  // LOAD NEWS
  // =========================

useEffect(() => {
  async function loadNews() {
    try {
      const res = await fetch(
        "/api/news-feed"
      );

      const data =
        await res.json();

      setNewsFeed(
        data.news || []
      );
    } catch {}
  }

  loadNews();
}, []);

  // =========================
  // LOAD CHATS
  // =========================

  useEffect(() => {
    const saved = localStorage.getItem(
      "synthesise_sessions"
    );

    if (saved) {
      const parsed = JSON.parse(saved);

      setSessions(parsed);

      if (parsed.length > 0) {
        setActiveChatId(parsed[0].id);
      }
    } else {
      createNewChat();
    }
  }, []);

  // =========================
  // SAVE CHATS
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "synthesise_sessions",
      JSON.stringify(sessions)
    );
  }, [sessions]);

  const activeSession = sessions.find(
    (s) => s.id === activeChatId
  );

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeSession?.messages]);

  // =========================
  // CREATE CHAT
  // =========================

  function createNewChat() {
    const id = Date.now().toString();

    const chat: ChatSession = {
      id,
      title: "New Chat",
      messages: [],
    };

    setSessions((prev) => [
      chat,
      ...prev,
    ]);

    setActiveChatId(id);

    setSidebarOpen(false);
  }

  // =========================
  // MEMORY
  // =========================

  function getMemory() {
    return (
      localStorage.getItem(
        "synthesise_memory"
      ) || ""
    );
  }

  function saveMemory(
    userText: string,
    aiText: string
  ) {
    const previous =
      localStorage.getItem(
        "synthesise_memory"
      ) || "";

    const updated =
      previous +
      `

USER:
${userText}

AI:
${aiText}
`;

    localStorage.setItem(
      "synthesise_memory",
      updated.slice(-15000)
    );
  }

  // =========================
  // VOICE INPUT
  // =========================

  function startVoiceInput() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () =>
      setIsListening(true);

    recognition.onresult = (
      event: any
    ) => {
      let transcript = "";

      for (
        let i = 0;
        i < event.results.length;
        i++
      ) {
        transcript +=
          event.results[i][0]
            .transcript;
      }

      setInput(transcript);
    };

    recognition.onend = () =>
      setIsListening(false);

    recognition.onerror = () =>
      setIsListening(false);

    recognitionRef.current =
      recognition;

    recognition.start();
  }

  function stopVoiceInput() {
    recognitionRef.current?.stop();
    setIsListening(false);
  }

function speakText(text: string) {
  if (!window.speechSynthesis) return;

  speechSynthesis.cancel();

  const cleanText = text
    .replace(/```[\s\S]*?```/g, "Code block omitted")
    .replace(/`/g, "")
    .replace(/#/g, "")
    .replace(/\*/g, "")
    .replace(/_/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/\n+/g, " ")
    .trim();

  const utterance =
    new SpeechSynthesisUtterance(cleanText);

  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onstart = () =>
    setIsSpeaking(true);

  utterance.onend = () =>
    setIsSpeaking(false);

  speechSynthesis.speak(utterance);
}
// function stopSpeaking() {
  // speechSynthesis.cancel();
 // setIsSpeaking(false);
// }

function cleanMessage(content: string) {
  return content.replace(
    /Sources:[\s\S]*/i,
    ""
  );
}
function extractSources(content: string) {
  const regex = /https?:\/\/[^\s]+/g;
  return content.match(regex) || [];
}
function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace(
      "www.",
      ""
    );
  } catch {
    return url;
  }
}

  // =========================
  // SPEECH OUTPUT
  // =========================

function cleanForSpeech(text: string) {
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\n+/g, ". ")
    .trim();
}
  function stopSpeaking() {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  }

  // =========================
  // SEND MESSAGE
  // =========================

  async function sendMessage() {
    if (!input.trim()) return;

    if (!activeSession) return;

    const currentInput = input;

    const userMessage: Message = {
      role: "user",
      content: currentInput,
    };

    const assistantMessage: Message =
      {
        role: "assistant",
        content: "",
      };

const updatedMessages = [
  ...activeSession.messages.slice(-20),
  userMessage,
  assistantMessage,
];
    setSessions((prev) =>
      prev.map((session) =>
        session.id === activeChatId
          ? {
              ...session,
              title:
                session.messages
                  .length === 0
                  ? currentInput.slice(
                      0,
                      30
                    )
                  : session.title,
              messages:
                updatedMessages,
            }
          : session
      )
    );

    setInput("");
    setLoading(true);
try {
      const res = await fetch(
        "/api/assistant",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
body: JSON.stringify({
  messages: updatedMessages.filter(
    (m) => !(m.role === "assistant" && !m.content)
  ),
  memory: getMemory(),
}),
        }
      );

if (!res.ok) {
  const text = await res.text();

  console.error("API ERROR:", text);

  setLoading(false);

  return;
}

const searchResultsHeader =
  res.headers.get(
    "X-Search-Results"
  );

const searchResults =
  searchResultsHeader
    ? JSON.parse(
        decodeURIComponent(
          searchResultsHeader
        )
      )
    : [];
const reader =
  res.body!.getReader();

      const decoder =
        new TextDecoder();

      let fullText = "";

      while (true) {
        const {
          done,
          value,
        } = await reader.read();

        if (done) break;

        const chunk =
          decoder.decode(value);

        fullText += chunk;

        setSessions((prev) =>
          prev.map((session) =>
            session.id === activeChatId
              ? {
                  ...session,
                  messages:
                    session.messages.map(
                      (
                        msg,
                        index,
                        arr
                      ) =>
                        index ===
                        arr.length - 1
                          ? {
                              ...msg,
                              content:
                                fullText,
                            }
                          : msg
                    ),
                }
              : session
          )
        );
      }

      saveMemory(
        currentInput,
        fullText
      );

      speakText(fullText);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
<div className="h-screen w-full bg-black text-white flex">
      {/* SIDEBAR */}

      <div
        className={`fixed z-50 top-0 left-0 h-full w-72 bg-zinc-950 border-r border-zinc-800 transform transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
<div className="sticky bottom-0 bg-black border-t border-zinc-800 p-4">
          <button
            onClick={
              createNewChat
            }
            className="bg-purple-600 px-4 py-2 rounded-xl"
          >
            + New Chat
          </button>

          <button
            onClick={() =>
              setSidebarOpen(
                false
              )
            }
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto h-full p-3 space-y-2">
          {sessions.map(
            (session) => (
              <div
                key={
                  session.id
                }
                onClick={() => {
                  setActiveChatId(
                    session.id
                  );
                  setSidebarOpen(
                    false
                  );
                }}
                className={`p-3 rounded-xl cursor-pointer ${
                  activeChatId ===
                  session.id
                    ? "bg-white text-black"
                    : "bg-zinc-900"
                }`}
              >
                {session.title}
              </div>
            )
          )}
        </div>
      </div>

      {/* MAIN */}

<div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}

        <div className="border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() =>
              setSidebarOpen(
                true
              )
            }
            className="text-xl"
          >
            ☰
          </button>

          <div className="font-semibold">
            Synthesise AI
          </div>

          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            R
          </div>
        </div>

        {/* CHAT */}

{activeSession?.messages.length === 0 && (
  <div className="px-4 py-4">
    <h2 className="text-xl font-bold mb-4">
      🔥 Trending AI News
    </h2>

    <div className="grid gap-3">
      {newsFeed.map(
        (item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-4 hover:bg-zinc-800 transition"
          >
            <div className="text-xs text-zinc-400">
              {new URL(
                item.url
              ).hostname}
            </div>

            <div className="font-semibold mt-1">
              {item.title}
            </div>

            <div className="text-sm text-zinc-300 mt-2 line-clamp-3">
              {item.content}
            </div>

            <div className="text-blue-400 text-sm mt-3">
              Read Article →
            </div>
          </a>
        )
      )}
    </div>
  </div>
)}

<div
  id="chat-container"
  className="flex-1 overflow-y-auto pb-32 px-4 space-y-4"
>
{activeSession?.messages.length === 0 && (
  <div className="p-4">
<div className="p-6 border-b border-zinc-800">
  <h1 className="text-4xl font-bold">
    SYNTHESISE AI
  </h1>

  <p className="text-zinc-400 mt-2">
    Discover AI trends before everyone else.
  </p>

  <input
    placeholder="Search AI News..."
    className="mt-6 w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
  />
</div>

<NewsFeed />
  </div>
)}
          {activeSession?.messages.map(
            (
              msg,
              index
            ) => (
<div
  key={index}
  className={`flex w-full ${
    msg.role === "user"
      ? "justify-end"
      : "justify-start"
  }`}
>
  <div
    className={`w-full max-w-full min-w-0 rounded-3xl px-5 py-4 ${
      msg.role === "user"
        ? "bg-white text-black"
        : "bg-zinc-900 border border-zinc-800"
    }`}
  >
    <div className="text-xs opacity-60 mb-2">
      {msg.role === "user"
        ? "YOU"
        : "SYNTHESISE AI"}
    </div>

    <div className="max-w-full overflow-x-auto break-words whitespace-pre-wrap">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}

 components={{
          code(props) {
            return (
              <pre className="overflow-x-auto max-w-full rounded-lg bg-black p-3">
                <code>{props.children}</code>
              </pre>
            );
}
		        }}
      >
        {msg.content}
      </ReactMarkdown>

{msg.role === "assistant" &&
 msg.sources &&
 msg.sources.length > 0 && (
<div
  className="mt-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
>
  <div className="text-xs text-zinc-400 mt-1">
    Trusted Source
  </div>

</div>
)}

{msg.role === "assistant" &&
  extractSources(msg.content).length > 0 && (
    <div className="mt-4 grid gap-3">
      {extractSources(msg.content).map(
        (source, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4"
          >
            <div className="text-xs text-zinc-400">
              {getDomain(source)}
            </div>

            <div className="font-medium mt-1">
              Article Source
            </div>

            <div className="text-xs text-zinc-500 mt-1 break-all">
              {source}
            </div>

            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
            >
              Open Article →
            </a>
          </div>
        )
      )}
    </div>
)}

{msg.role === "assistant" && (
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => speakText(msg.content)}
            className="text-xs bg-zinc-800 px-3 py-1 rounded-lg"
          >
            🔊 Speak
          </button>

          <button
            onClick={stopSpeaking}
            className="text-xs bg-red-500/20 px-3 py-1 rounded-lg"
          >
            ⏹ Stop
          </button>
        </div>
      )}
    </div>
  </div>
</div>
      ))}
      
      <div ref={bottomRef} />
    </div>
{/* INPUT */}

        <div className="border-t border-zinc-800 p-3 bg-black">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-2xl px-3 py-2">
            <button
              className="text-zinc-400 text-xl"
            >
              +
            </button>

            <textarea
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
              placeholder="Ask Synthesise AI..."
              rows={1}
              className="flex-1 bg-transparent outline-none resize-none text-white"
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />

            <button
              onClick={
                isListening
                  ? stopVoiceInput
                  : startVoiceInput
              }
              className={`text-xl ${
                isListening
                  ? "text-red-400"
                  : "text-zinc-300"
              }`}
            >
              {isListening
                ? "🎙️"
                : "🎤"}
            </button>

            <button
              onClick={
                sendMessage
              }
              disabled={
                loading
              }
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold"
            >
              {loading
                ? "..."
                : "Send"}
            </button>
          </div>

          {isSpeaking && (
            <div className="text-xs text-zinc-500 mt-2">
              Synthesise AI is speaking...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
