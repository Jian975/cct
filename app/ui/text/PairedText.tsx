interface PairedTextProps {
  text1: string;
  text2: string;
  text1className?: string;
  text2className?: string;
  className?: string;
}

export default function PairedText({ text1, text2, text1className = '', text2className = '', className = '' }: PairedTextProps) {
  return (
    <div className={`flex flex-row gap-1 items-center ${className}`}>
      <span className={`text-base font-medium  ${text1className}`}>
        {text1}
      </span>
      <div className="w-[1] h-[15] border-1"/>
      <span className={`text-sm ${text2className}`}>
        {text2}
      </span>
    </div>
  );
}