import React from "react";

interface ILoadingProps {
  loading: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = ({ loading, children }) => {
  return loading ? <div>Loading...</div> : <>{children}</>;
};

export default Loading;
