import React from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
          <ErrorImageText>This Page is Buried in the Sand *I'm jealous*</ErrorImageText>
          <ErrorImageText>You have never seen an ostrich head. Whenever you’re around it seems ostriches are avoiding your gaze. You came on this trip specifically to see an ostrich head, but here is this ostrich right in front of you, head invisible. You may never see an ostrich head.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
