export default function CounterComponent({ props }: any) {
  const { count, handleIncrementCount, handleDecrementCount } = props;
  
  return (
    <div>
      <button
        onClick={handleIncrementCount}
      >+</button>
      <span>{count ?? "0"}</span>
      <button
        onClick={handleDecrementCount}
      >-</button>
    </div>
  );
}
