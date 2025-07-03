export const dummyMembers = [
  // 운영진 9명
  {
    id: 1,
    profile: "/images/profile.png",
    name: "김운영",
    generation: 13,
    position: "운영진",
    part: "대표",
    github: "https://github.com/example1",
    instagram: "https://instagram.com/example1",
    stacks: ["React", "Node.js","React"]
  },
  {
    id: 2,
    profile: "/images/profile.png",
    name: "이운영",
    generation: 13,
    position: "운영진",
    part: "부대표",
    github: "https://github.com/example2",
    instagram: "https://instagram.com/example2",
    stacks: ["Spring", "Java"]
  },
  {
    id: 3,
    profile: "/images/profile.png",
    name: "박운영",
    generation: 13,
    position: "운영진",
    part: "디자인",
    github: "https://github.com/example3",
    instagram: "https://instagram.com/example3",
    stacks: ["Figma", "Photoshop"]
  },
  {
    id: 4,
    profile: "/images/profile.png",
    name: "최운영",
    generation: 13,
    position: "운영진",
    part: "백엔드",
    github: "https://github.com/example4",
    instagram: "https://instagram.com/example4",
    stacks: ["Spring Boot", "MySQL"]
  },
  {
    id: 5,
    profile: "/images/profile.png",
    name: "정운영",
    generation: 13,
    position: "운영진",
    part: "프론트엔드",
    github: "https://github.com/example5",
    instagram: "https://instagram.com/example5",
    stacks: ["React", "Tailwind"]
  },
  {
    id: 6,
    profile: "/images/profile.png",
    name: "홍운영",
    generation: 13,
    position: "운영진",
    part: "홍보",
    github: "https://github.com/example6",
    instagram: "https://instagram.com/example6",
    stacks: ["Illustrator", "SNS"]
  },
  {
    id: 7,
    profile: "/images/profile.png",
    name: "배운영",
    generation: 13,
    position: "운영진",
    part: "기획",
    github: "https://github.com/example7",
    instagram: "https://instagram.com/example7",
    stacks: ["Notion", "Miro"]
  },
  {
    id: 8,
    profile: "/images/profile.png",
    name: "류운영",
    generation: 13,
    position: "운영진",
    part: "총무",
    github: "https://github.com/example8",
    instagram: "https://instagram.com/example8",
    stacks: ["Excel", "PowerPoint"]
  },
  {
    id: 9,
    profile: "/images/profile.png",
    name: "조운영",
    generation: 13,
    position: "운영진",
    part: "서기",
    github: "https://github.com/example9",
    instagram: "https://instagram.com/example9",
    stacks: ["Docs", "Slack"]
  },

  // 아기사자 13명
  ...Array.from({ length: 13 }, (_, i) => ({
    id: 10 + i,
    profile: "/images/profile.png",
    name: `김아기사자${i + 1}`,
    generation: 13,
    position: "아기사자",
    part: i % 2 === 0 ? "프론트엔드" : "백엔드",
    github: `https://github.com/babylion${i + 1}`,
    instagram: `https://instagram.com/babylion${i + 1}`,
    stacks: i % 2 === 0
      ? ["React", "Tailwind"]
      : ["Node.js", "MySQL"]
  }))
];
