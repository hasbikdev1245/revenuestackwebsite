"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="editorial">
          <p className="eyebrow">07 — Questions</p>
          <div className="editorial-body">
            <h2>FAQ</h2>
            <div className="faq-list">
              {faqs.map((item, index) => {
                const isOpen = open === index;
                const panelId = `faq-panel-${index}`;
                return (
                  <div key={item.q} className={isOpen ? "faq-item is-open" : "faq-item"}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : index)}
                      >
                        {item.q}
                        <i aria-hidden="true" />
                      </button>
                    </h3>
                    <div className="faq-panel" id={panelId} role="region" aria-hidden={!isOpen}>
                      <div>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
