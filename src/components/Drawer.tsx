import type { ReactNode } from "react";
import ReactFocusLock from "react-focus-lock";
import { useEscapeKey } from "../hooks/useEscapeKey";

type Props = {
  children: ReactNode;
  handleDismiss: VoidFunction;
};

export const Drawer = ({ children, handleDismiss }: Props) => {
  useEscapeKey(handleDismiss);

  return (
    <ReactFocusLock returnFocus={true}>
      <div className="fixed inset-0 p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="absolute top-0 right-0 bottom-0 w-1/2 max-w-[280px] min-w-[200px] flex flex-col justify-between bg-white p-8 animate-slideIn">
            <div>{children}</div>
            <button
              className="flex text-lg items-center justify-center gap-2 p-2 cursor-pointer border-none bg-[hsl(350deg_100%_90%)] rounded-[4px]"
              onClick={handleDismiss}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </ReactFocusLock>
  );
};
