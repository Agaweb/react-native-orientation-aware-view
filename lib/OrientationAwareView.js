import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions } from "react-native";

const OrientationAwareView = (props) => {
  const dimensionsHandler = useRef((dimensions) => {
    setIsPortrait(dimensions.window.width < dimensions.window.height);
  });
  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get("window").width < Dimensions.get("window").height
  );

  useEffect(() => {
    Dimensions.addEventListener("change", dimensionsHandler.current);

    return () => {
      Dimensions.removeEventListener("change", dimensionsHandler.current);
    };
  }, []);

  if (props.hideOnPortrait && isPortrait) return null;
  if (props.hideOnLandscape && !isPortrait) return null;

  return (
    <View
      {...props}
      style={Object.assign(
        {},
        props.style,
        isPortrait ? props.portraitStyle : props.landscapeStyle
      )}
    ></View>
  );
};

export default OrientationAwareView;
