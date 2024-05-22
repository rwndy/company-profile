interface PropsModalOverlay {
  className: string;
  onClick: () => void;
}

const ModalOverlay = ({ className, onClick }: PropsModalOverlay) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
    />
  );
};

export default ModalOverlay;
