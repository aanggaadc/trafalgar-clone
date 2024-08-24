"use client";

import { useState, useCallback } from "react";
import { Simplify } from "@/prismicio-types";
import { Content, GroupField } from "@prismicio/client";
import QACard from "@/components/qa-card";
import { ChevronDown } from "lucide-react";

interface CardsProps {
  items: GroupField<
    Simplify<Content.QuestionAnswerSliceDefaultPrimaryItemsItem>
  >;
}

const Cards: React.FC<CardsProps> = ({ items }) => {
  const [openAll, setOpenAll] = useState<boolean | undefined>(undefined);

  const onToggle = useCallback(() => {
    setOpenAll((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col items-end">
      <button
        className="flex items-center gap-2 font-noto-sans text-base font-bold text-gray"
        onClick={onToggle}
      >
        {openAll ? "Collapse All" : "Expand All"}
        <ChevronDown
          className={`h-6 w-6 shrink-0 transition-transform duration-200 ${openAll ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div className="w-full flex flex-col gap-1 pt-4 lg:pt-8">
        {items.map((item, index) => (
          <QACard
            key={index}
            index={index}
            question={item.question}
            open={openAll}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
