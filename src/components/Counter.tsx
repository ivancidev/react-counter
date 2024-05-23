interface CounterProps {
  count: number;
}
export const Counter: React.FC<CounterProps> = ({ count }) => {
  return <h1>{count}</h1>;
};
