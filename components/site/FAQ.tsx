"use client";

import { useState } from "react";

export function FAQ({ entries }: { entries: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {entries.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-answer-${index}`;
        return (
          <section className="faq-item" key={item.question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                {item.question}<span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            {isOpen && <div className="faq-answer" id={panelId} role="region"><p>{item.answer}</p></div>}
          </section>
        );
      })}
    </div>
  );
}
