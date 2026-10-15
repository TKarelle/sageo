type FaqItemProps = {
  question: string;
  answer: string;
  id?: string;
};

export function FaqItem({ question, answer, id }: FaqItemProps) {
  return (
    <details id={id}>
      <summary>
        <h3>{question}</h3>
        <span aria-hidden>+</span>
      </summary>
      <p>{answer}</p>
    </details>
  );
}
