import React from "react";

interface Props {
  children: React.ReactElement;
}

export default class ErrorBoundary extends React.PureComponent {
  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    return (this.props as Props).children;
  }
}
