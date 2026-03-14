export const features = [
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.113 0-2.2-.08-3.258-.232-1.146-.163-1.992-1.13-1.992-2.196v-.054l.004-.155c.071-1.107.903-2.013 2.014-2.108.317-.024.638-.04.963-.04h2.25c.55 0 1.02-.28 1.264-.71M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`, title: "Real-Time Chat", desc: "Instant messages with delivery receipts and persistent history across all devices.", color: "#22d3ee" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />`, title: "HD Video Calls", desc: "Crystal-clear one-on-one and group calls with adaptive quality powered by Stream.", color: "#a78bfa" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />`, title: "Screen Sharing", desc: "Share any window or your entire display — perfect for demos and collaboration.", color: "#34d399" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />`, title: "Smart Notifications", desc: "Get notified when someone sends you a friend request or accepts your request.", color: "#fbbf24" },
  { icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />`, title: "JWT Security", desc: "Every route protected with signed tokens. Secure authentication built in.", color: "#f87171" },
  { icon: `  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16V3m0 0l-4 4m4-4l4 4M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4"/>`, title: "Share Files", desc: "You can easily share images, videos, audio, and other media files.", color: "#22d3ee" },
];

export const stack = [
  { abbr: "Re", name: "React", sub: "Frontend", color: "#38bdf8" },
  { abbr: "Ex", name: "Express", sub: "Server", color: "#94a3b8" },
  { abbr: "M", name: "MongoDB", sub: "Database", color: "#4ade80" },
  { abbr: "No", name: "Node.js", sub: "Runtime", color: "#86efac" },
  { abbr: "Ta", name: "Tailwind", sub: "Styling", color: "#BA68C8" },
  { abbr: "Js", name: "Javascript", sub: "Logic", color: "#FFF176" },
  { abbr: "St", name: "Stream", sub: "Chat API", color: "#818cf8" },
  { abbr: "Zu", name: "Zustand", sub: "State", color: "#fb923c" },
];


export const msgs = [
    { text: "Hey! Standup in 5?", self: false, time: "9:01" },
    { text: "Yep, finishing a PR now", self: true, time: "9:02" },
    { text: "Cool, starting the call 🎉", self: false, time: "9:02" },
    { text: "On my way!", self: true, time: "9:03" },
];


export const participants = [
    { init: "A", bg: "rgba(139,92,246,0.13)" },
    { init: "B", bg: "rgba(34,211,238,0.1)" },
    { init: "C", bg: "rgba(52,211,153,0.1)" },
    { init: "D", bg: "rgba(251,191,36,0.1)" },
]


export const startSteps = [
    { n: "01", t: "Create Account", d: "Sign up in under 30 seconds. No credit card, no friction — instant access to all features." },
    { n: "02", t: "Connect People", d: "Browse available users and send them a friend request to build your network instantly." },
    { n: "03", t: "Communicate", d: "Message, hop on a call, share your screen. Everything works the moment you connect." },
  ]