// ╔══════════════════════════════════════════════╗
// ║    ARIYAN BOT — Main Configuration File        ║
// ║    Owner: MOHAMMAD ARIYAN                     ║
// ║    Number: 8801814289472                     ║
// ║    Email : emonhawladar311@gmail.com         ║
// ╚══════════════════════════════════════════════╝
module.exports = {
  BOT_NAME: "ARIYAN BOT",
  PREFIX: ".",
  ALLOW_NO_PREFIX: true,        // commands work without prefix too
  REPLY_TO_INBOX: true,         // reply in private chat
  REPLY_TO_SELF: true,          // bot reacts to its own messages
  AUTO_DOWNLOAD_LINKS: true,    // auto downloader on any video link
  AUTO_RESTART: false,
  AUTO_READ: false,
  AUTO_TYPING: false,
  AUTO_UPDATE: true,
  TIMEZONE: "Asia/Dhaka",
  LANGUAGE: "en",
  // ── OWNERS (multi-owner) ──
  OWNERS: [
    "8801309991724",
    "",
    ""
  ],
  OWNER_NAME: "EMON HAWLADAR",
  OWNER_EMAIL: "emonhawladar311@gmail.com",

  // ── LOGIN ──
  loginMode: "qr",              // "qr" | "pair"
  pairingNumber: "6011xxxx",

  // ── AI ──
  AI: {
    enabled: true,
    provider: "lovable",        // lovable | openai | gemini
    model: "google/gemini-2.5-flash",
    personality: "You are ARIYAN BOT, a helpful WhatsApp assistant created by MOHAMMAD ARIYAN."
  },

  // ── BRANDING ──
  CREDITS: "All credit — MOHAMMAD ARIYAN",
  FOOTER: "— ARIYAN BOT —"
};
