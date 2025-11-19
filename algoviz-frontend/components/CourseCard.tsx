import React from 'react';

export default function CourseCard({ title, description, icon, href }) {
  return (
    <a href={href} className="bg-cyber border-2 border-electric/80 rounded-xl p-6 hover:border-accent transition flex flex-col items-center shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </a>
  );
}
