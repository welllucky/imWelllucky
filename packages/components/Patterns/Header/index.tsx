import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Header = ({ children }: Props) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
};
