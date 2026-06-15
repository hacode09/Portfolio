import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Rahul Kumar. Thank you for reaching out!" },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, open]);

  const toggleOpen = () => setOpen((v) => !v);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg = { from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    setMessages((m) => [
      ...m,
      { from: "bot", text: "Thinking..." },
    ]);

    setTimeout(() => {
      setMessages((m) => {
        const withoutThinking = m.filter((x) => x.text !== "Thinking...");
        return [
          ...withoutThinking,
          {
            from: "bot",
            text:
              "Thanks for reaching out. Feel free to explore my profile for a detailed overview of my experience, technical expertise, and professional journey.",
          },
        ];
      });
    }, 800);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={`recruiter-chatbot ${open ? "open" : ""}`}>
      <div className="chatbot-toggle" onClick={toggleOpen} aria-label="Recruiter assistant" role="button" tabIndex={0}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>

      <div className="chatbot-window" role="dialog" aria-hidden={!open}>
        <div className="chatbot-header">
          <div>
            <strong>Recruiter Assistant</strong>
            <div className="chatbot-sub">Hiring support and candidate screening</div>
          </div>
          <button className="chatbot-close" onClick={toggleOpen} aria-label="Close chat">×</button>
        </div>

        <div className="chatbot-body" ref={containerRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chatbot-msg ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="chatbot-footer">
          <input
            placeholder="Message a recruiter..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            aria-label="Message input"
          />
          <button className="chatbot-send" onClick={handleSend} aria-label="Send message">Send</button>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;
