// src/components/ExperienceItem.tsx
import type { Experience } from "@/data/experiences";

export default function ExperienceItem({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="border-border grid grid-cols-1 gap-8 border-b py-10 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-10">
      {/* Left: Metadata */}
      <div>
        <p className="text-text-h text-base font-medium">{experience.role}</p>
        <p className="text-text mt-1 text-sm">{experience.company}</p>
        <p className="text-text/70 mt-3 text-xs font-mono">
          {experience.startDate} — {experience.endDate ?? "Present"}
        </p>
        <p className="text-text/70 text-xs">{experience.location}</p>
      </div>

      {/* Right: Summary, Bullets, and Tags */}
      <div>
        <p className="text-text-h text-sm leading-relaxed">
          {experience.summary}
        </p>

        {/* Bullets List */}
        <ul className="mt-4 flex flex-col gap-2.5">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-text text-sm leading-relaxed list-disc list-outside ml-4"
            >
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tech Stack Chips */}
        {experience.techStack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className="border-border text-text/80 rounded-full border px-2.5 py-0.5 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}