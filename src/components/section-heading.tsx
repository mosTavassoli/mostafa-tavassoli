type SectionHeadingProps = {
  index: string;
  title: string;
  copy: string;
};

export function SectionHeading({ index, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span>/{index}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}
