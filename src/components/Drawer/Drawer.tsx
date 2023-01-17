import { useRef } from 'react';
import classNames from 'classnames';
import './drawer.scss';

interface IDrawerProps {
  isOpen: boolean;
  head: React.ReactNode;
  children: React.ReactNode | string;
  className?: string;
}

export const Drawer = ({ isOpen, head, children, className }: IDrawerProps) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const bodyHeight = bodyRef.current?.clientHeight
    ? bodyRef.current?.clientHeight + 1
    : 0;

  return (
    <div className="drawer">
      {head}
      <div
        className={classNames('drawer-body-container', className)}
        data-testid="drawer-body-container"
        style={{ maxHeight: isOpen ? bodyHeight : 0 }}
      >
        <div className="drawer-body" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
