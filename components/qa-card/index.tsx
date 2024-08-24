import { useState, useCallback, useEffect } from "react";
import { MinusIcon, PlusIcon } from "../icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

interface QACardProps {
  question: RichTextField | undefined;
  answer: RichTextField | undefined;
  open?: boolean;
  index: number;
}

const QACard: React.FC<QACardProps> = ({ question, answer, open, index }) => {
  // Inisialisasi isOpen dengan true untuk index 0
  const [isOpen, setIsOpen] = useState(index === 0);

  const onToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  return (
    <Accordion
      type="single"
      collapsible
      value={isOpen ? "item-1" : ""}
      onValueChange={onToggle}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-0" hideIcon>
          <div
            className={`w-full flex items-center justify-between p-3 transition-all duration-500 gap-2 border lg:px-[1.25em] lg:py-[1em] ${
              isOpen
                ? "bg-[#2d5a7b] border-[#2d5a7b]"
                : "bg-white border-[#e6e6e6]"
            }`}
          >
            <PrismicRichText
              field={question}
              components={{
                heading2: ({ children }) => (
                  <h2
                    className={`font-noto-sans font-bold transition-all duration-500 text-gray text-lg ${
                      isOpen ? "text-white" : "text-gray"
                    }`}
                  >
                    {children}
                  </h2>
                ),
              }}
            />

            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e6e6e6]">
              {isOpen ? (
                <MinusIcon className="fill-[#414141]" />
              ) : (
                <PlusIcon className="fill-[#414141]" />
              )}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent
          className={`w-full border p-[0.625em] lg:px-[1.25em] lg:py-[0.625em] ${
            isOpen ? "border-[#2d5a7b]" : "border-[#e6e6e6]"
          }`}
        >
          <PrismicRichText
            field={answer}
            components={{
              paragraph: ({ children }) => (
                <p
                  className={`transition-all duration-500 text-base leading-6 font-noto-sans text-gray lg:leading-8 ${
                    isOpen ? "opacity-1" : "opacity-0"
                  }`}
                >
                  {children}
                </p>
              ),
            }}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default QACard;
