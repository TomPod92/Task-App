interface Props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return <>{children}</>;
};

export default AppProviders;
