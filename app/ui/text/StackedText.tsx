interface StackedTextProps {
  text1: string;
  text2: string;
  text1className?: string;
  text2className?: string;
  className?: string;
}

export default function StackedText({ text1, text2, text1className = '', text2className = '', className = '' }: StackedTextProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className={`text-base font-medium  ${text1className}`}>
        {text1}
      </span>
      <span className={`text-sm ${text2className}`}>
        {text2}
      </span>
    </div>
  );
}