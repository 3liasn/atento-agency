"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChatState,
  ChatMessage,
  getInitialBotGreeting,
  replyBot,
} from "@/lib/chatBot";

export function ChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const greeting = getInitialBotGreeting();
    return greeting.messages.map((text, idx) => ({
      id: `bot-init-${idx}`,
      sender: "bot",
      text,
      timestamp: "Ahora",
    }));
  });

  const [state, setState] = useState<ChatState>(() => getInitialBotGreeting().state);
  const [quickReplies, setQuickReplies] = useState<string[]>(() => getInitialBotGreeting().quickReplies);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend !== undefined ? textToSend : inputValue).trim();
    if (!text || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setQuickReplies([]);
    setIsTyping(true);

    // Simula una breve latencia de red/asistente humanoide de 450ms
    setTimeout(() => {
      const response = replyBot(state, text);
      setState(response.state);

      const newBotMessages: ChatMessage[] = response.messages.map((botText, idx) => ({
        id: `bot-${Date.now()}-${idx}`,
        sender: "bot",
        text: botText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }));

      setMessages((prev) => [...prev, ...newBotMessages]);
      setQuickReplies(response.quickReplies || []);
      setIsTyping(false);
    }, 450);
  };

  const handleReset = () => {
    const greeting = getInitialBotGreeting();
    setState(greeting.state);
    setQuickReplies(greeting.quickReplies);
    setMessages(
      greeting.messages.map((text, idx) => ({
        id: `bot-reset-${Date.now()}-${idx}`,
        sender: "bot",
        text,
        timestamp: "Ahora",
      }))
    );
    setInputValue("");
    setIsTyping(false);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="flex flex-col h-[650px] w-full max-w-2xl mx-auto rounded-3xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden">
      {/* Aurora Clinic Header */}
      <div className="bg-slate-900 px-5 py-4 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 text-white font-extrabold text-base shadow-sm">
            <span>CA</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-slate-800" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-tight">Clínica Dental Aurora</h3>
              <span className="rounded-full bg-rose-500/30 px-2 py-0.5 text-[10px] font-semibold text-rose-100 border border-rose-400/20">
                Demo
              </span>
            </div>
            <p className="text-xs text-rose-200 font-medium flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Asistente de recepción IA activo 24/7
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          title="Reiniciar chat de demo"
          className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-all border border-white/15 active:scale-95"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reiniciar</span>
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div
        ref={scrollRef}
        aria-live="polite"
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-gradient-to-b from-slate-50/60 to-white"
      >
        {messages.map((m) => {
          const isUser = m.sender === "user";
          return (
            <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm shadow-xs ${
                  isUser
                    ? "rounded-tr-none bg-accent text-white"
                    : "rounded-tl-none bg-white border border-slate-200/80 text-slate-800"
                }`}
              >
                {!isUser && (
                  <p className="text-[11px] font-bold text-accent mb-1 flex items-center gap-1">
                    <span>Atento IA</span>
                  </p>
                )}
                <div className="whitespace-pre-line leading-relaxed">{m.text}</div>
                <span
                  className={`mt-1.5 block text-[10px] text-right ${
                    isUser ? "text-rose-100" : "text-slate-400"
                  }`}
                >
                  {m.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-none bg-white border border-slate-200/80 px-4 py-3 text-slate-500 shadow-xs flex items-center gap-2">
              <span className="text-xs font-medium text-slate-600">Aurora está respondiendo</span>
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce"></span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies Options */}
      {quickReplies.length > 0 && !isTyping && (
        <div className="p-3 bg-slate-50/90 border-t border-slate-200/70 overflow-x-auto flex gap-2 no-scrollbar">
          {quickReplies.map((qr, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSendMessage(qr)}
              className="shrink-0 rounded-full border border-rose-600/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-rose-800 hover:bg-rose-50 hover:border-rose-500 transition-colors shadow-2xs"
            >
              {qr}
            </button>
          ))}
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe tu mensaje (ej. 'Quiero blanqueamiento' o 'Hablar con humano')..."
          className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          aria-label="Enviar mensaje"
          className="inline-flex items-center justify-center rounded-xl bg-accent p-2.5 text-white transition-all hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
