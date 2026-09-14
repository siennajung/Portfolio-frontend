// src/components/PageHeader.tsx
export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8">
      <h1 className="text-text-h font-serif text-3xl font-medium">{title}</h1>
      {description && <p className="text-text mt-2 text-sm leading-relaxed">{description}</p>}
    </header>
  );
}