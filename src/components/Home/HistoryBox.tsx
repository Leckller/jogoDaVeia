function HistoryBox({ content }: { content: null | string }) {
  return (
    <article
      className="size-20 border flex justify-center items-center"
    >
      <p className="text-2xl font-extrabold">{content}</p>
    </article>
  );
}

export default HistoryBox;
