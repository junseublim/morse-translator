import { on } from "events";
import React from "react";

interface TranslateTextareaProps {
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TranslateTextarea = ({
  value,
  handleInput,
}: TranslateTextareaProps) => {
  return (
    <textarea
      className="resize-none mt-4 border-2 border-gray-300 rounded-lg p-2 text-2xl w-full"
      rows={10}
      cols={20}
      value={value}
      onInput={handleInput}
    ></textarea>
  );
};
