import type { ReactNode } from "react";

function Check() {
  return (
    <span className="chk">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

/** Lista "como trabalhamos" em duas colunas, com check laranja. */
export default function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <div className="inclui">
      {items.map((item, i) => (
        <div className="it" key={i}>
          <Check />
          {item}
        </div>
      ))}
    </div>
  );
}
