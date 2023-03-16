import clsx from "clsx";
import { FC } from "react";

export type GlassPaneProps = {
  className?: string;
  children: React.ReactNode;
};

const GlassPane: FC<GlassPaneProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
