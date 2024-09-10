interface IProps {
  children: React.ReactNode;
}

export function Container({ children }: IProps) {
  return <div className="container flex-column">{children}</div>;
}
