"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TranslateTextarea } from "./translateTextarea";
import {
  isAllowedMorseCode,
  decodeMorseCode,
  encodeMorseCode,
} from "@/lib/morse";
import { Button } from "@/components/ui/button";
import { Copy, CopyCheck } from "lucide-react";

export const MorseInput = () => {
  const [encoded, setEncoded] = React.useState("");
  const [decoded, setDecoded] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleEncodedInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isAllowedMorseCode(e.target.value)) {
      return;
    }
    setEncoded(e.target.value);
    setDecoded(decodeMorseCode(e.target.value));
  };

  const handleDecodedInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const capitalized = e.target.value.toUpperCase();
    setDecoded(capitalized);
    setEncoded(encodeMorseCode(capitalized));
  };

  const copyMorseCode = () => {
    navigator.clipboard.writeText(encoded);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex justify-center">
        <div className="w-8/12 flex flex-col">
          <div className="text-xl font-bold text-center grid grid-cols-3 h-10">
            <div></div>
            <span>Morse Code</span>
            <Button className="justify-self-end" onClick={copyMorseCode}>
              {copied ? (
                <>
                  <CopyCheck className="mr-2" /> Copied{" "}
                </>
              ) : (
                <>
                  <Copy className="mr-2" /> Copy{" "}
                </>
              )}
            </Button>
          </div>
          <TranslateTextarea value={encoded} handleInput={handleEncodedInput} />
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-8/12 flex flex-col">
          <div className="text-xl font-bold text-center h-10">Decoded</div>
          <TranslateTextarea value={decoded} handleInput={handleDecodedInput} />
        </div>
      </div>
    </div>
  );
};
