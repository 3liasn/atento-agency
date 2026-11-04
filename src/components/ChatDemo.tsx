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
    <div className="flex flex-col h-[650px] w-full max-w-2xl mx-auto rounded-2xl border border-border bg-surface-raised soft-glow overflow-hidden">
      {/* Aurora Clinic Header */}
      <div className="bg-background px-5 py-4 text-foreground flex items-center justify-between shrink-0 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent-muted border border-accent/40 text-accent font-semibold text-base">
            <span>CA</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-foreground tracking-tight font-serif">Clínica Dental Aurora</h3>
              <span className="rounded-full bg-accent-muted px-2 py-0.5 text-[10px] font-medium text-accent border border-accent/30">
                Demo
              </span>
            </div>
            <p className="text-xs text-muted font-medium flex items-center gap-1.5 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Asistente de recepción IA activo 24/7
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          title="Reiniciar chat de demo"
          className="inline-flex items-center gap-1.5 rounded-full bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors border border-border"
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
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-surface"
      >
        {messages.map((m) => {
          const isUser = m.sender === "user";
          return (
            <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm ${
                  isUser
                    ? "rounded-tr-none bg-accent text-background"
                    : "rounded-tl-none bg-surface-raised border border-border text-foreground"
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
                    isUser ? "text-background/70" : "text-subtle"
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
            <div className="rounded-2xl rounded-tl-none bg-surface-raised border border-border px-4 py-3 text-muted flex items-center gap-2">
              <span className="text-xs font-medium text-muted">Aurora está respondiendo</span>
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
        <div className="p-3 bg-background/60 border-t border-border overflow-x-auto flex gap-2 no-scrollbar">
          {quickReplies.map((qr, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSendMessage(qr)}
              className="shrink-0 rounded-full border border-accent/35 bg-accent-muted px-3.5 py-1.5 text-xs font-medium text-accent hover:border-accent/60 transition-colors"
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
        className="p-3 sm:p-4 bg-background border-t border-border flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe tu mensaje (ej. 'Quiero blanqueamiento' o 'Hablar con humano')..."
          className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          aria-label="Enviar mensaje"
          className="inline-flex items-center justify-center rounded-lg bg-accent p-2.5 text-background transition-colors hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
