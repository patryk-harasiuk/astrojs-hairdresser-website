type Props = {
  children: JSX.Element | string;
};

const VisuallyHidden = ({ children }: Props) => {
  return (
    <span className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden border-0 p-0 [clip:rect(0,0,0,0)]">
      {children}
    </span>
  );
};

export default VisuallyHidden;
