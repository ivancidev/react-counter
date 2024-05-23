interface ButtonComponentProps {
  onClick: () => void;
  label: string;
}
export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  label,
}) => {
  return <button onClick={onClick}>{label}</button>;
};
