export default function CounterComponent({ props }: any) {
  const { count, handleIncrementCount } = props;
  
  return (
    <div>
      <button
        onClick={handleIncrementCount}
      >+</button>
      <span>{count ?? "0"}</span>
      <button>-</button>
    </div>
  );
}
