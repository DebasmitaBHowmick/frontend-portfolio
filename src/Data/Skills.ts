export interface Skill {
  name: string;
  category: string;
  icon?: string; // For future icon support
}

export const skills: Skill[] = [
  // Frontend Technologies
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  {name: "typescript", category: "Backend"},
  {name: "React Native", category: "Frontend"},
  {name: "React-Query", category: "Frontend"},
  
  // State Management & Tools
  { name: "Redux", category: "State Management" },

  
  // Backend & APIs
  { name: "Firebase", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  {name: "Node js", category: "Backend"},
  {name: "express js", category: "Backend"},
  
  {name: "SQLite", category: "Backend"},
  {name: "JSON Server", category: "Backend"},
  {name: "JWT Token", category: "Backend"},
 
 
  
  // Build Tools & Version Control
 
  { name: "GitHub", category: "Tools" },

  
  // UI/UX
  { name: "Responsive Design", category: "UI/UX" },
  { name: "Framer Motion", category: "Animation" },
];

