import { useLocation } from 'react-router-dom';
import React from 'react';

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

export const withRouter = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();

    return <Component {...(props as Props)} location={location} />;
  };
};
