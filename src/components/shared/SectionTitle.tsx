interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div>
      <h2
        className={`text-[40px] md:text-[74px] max-w-[600px] fon-semibold uppercase text-white leading-none tracking-normal leading-[0.95] ${className}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl mb-5 text-[#E7E7E3] max-w-[400px]`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
