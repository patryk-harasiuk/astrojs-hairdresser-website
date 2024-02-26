import type { ReactNode } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { Portal } from './Portal';
import { CloseSVG } from './CloseSVG';
import VisuallyHidden from '../../components/VisuallyHidden';

type Props = {
  children: ReactNode;
  handleDismiss: VoidFunction;
};

export const Drawer = ({ children, handleDismiss }: Props) => {
  useEscapeKey(handleDismiss);

  return (
    <Portal>
      <ReactFocusLock returnFocus={true}>
        <div className="fixed inset-0 p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn">
            <div className="absolute top-0 right-0 bottom-0 w-3/4 sm:w-1/2 max-w-[280px] min-w-[200px] flex flex-col bg-white p-8 animate-slideIn">
              <button
                className="absolute top-2 right-4 flex text-lg items-center justify-center p-2 cursor-pointer border-none"
                onClick={handleDismiss}
              >
                <CloseSVG />
                <VisuallyHidden>Close menu</VisuallyHidden>
              </button>

              <div className="pt-7">{children}</div>
            </div>
          </div>
        </div>
      </ReactFocusLock>
    </Portal>
  );
};
