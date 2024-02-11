interface SectionHeaderProps {
  header: string;
  description: string;
}

export const SectionHeader = ({ header, description }: SectionHeaderProps) => {
  return (
    <div>
      <p className="font-light">{description}</p>

      <h2 className="text-primary text-2xl font-semibold">{header}</h2>
    </div>
  );
};
