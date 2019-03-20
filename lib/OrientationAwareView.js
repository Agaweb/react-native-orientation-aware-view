import React, { Component } from "react";
import {
    View,
    Dimensions
} from "react-native";

class OrientationAwareView extends Component {
    state = {
        portraitStyle: {},
        landscapeStyle: {},
        isPortrait: true
    }

    dimensionsHandler = dimensions => this.calculateDeviceOrientation(dimensions);

    constructor(props) {
        super(props);

        let defaultStyle = {};
        if (this.props.style) {
            defaultStyle = this.props.style;
        }

        if (this.props.portraitStyle) {
            this.state.portraitStyle = Object.assign({}, defaultStyle, this.props.portraitStyle);
        }

        if (this.props.landscapeStyle) {
            this.state.landscapeStyle = Object.assign({}, defaultStyle, this.props.landscapeStyle);
        }

        Dimensions.addEventListener("change", this.dimensionsHandler);
        this.calculateDeviceOrientation();
    }

    calculateDeviceOrientation(dimensions) {
        if (dimensions) {
            this.setState({ isPortrait: (dimensions.window.width < dimensions.window.height) });
        } else {
            this.state.isPortrait = (Dimensions.get("window").width < Dimensions.get("window").height);
        }
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.dimensionsHandler);
    }

    render() {
        if ((this.state.isPortrait && !this.props.hideOnPortrait) || (!this.state.isPortrait && !this.props.hideOnLandscape)) {
            return (
                <View {...this.props} style={(this.state.isPortrait ? this.state.portraitStyle : this.state.landscapeStyle)}>
                </View>
            );
        }else{
            return null;
        }
    }
}

export default OrientationAwareView;