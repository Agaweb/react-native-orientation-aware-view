
# React Native Orientation Aware View

## Getting started

`$ npm install react-native-orientation-aware-view --save`

## Usage

The view inherits all the props and adds four others.

**Props :**
- **style**: default, both in portrait and landscape
- **portraitStyle**: will be merged with the default style when the orientation is portrait
- **landscapeStyle**: will be merged with the default style when the orientation is landscape
- **hideOnPortrait**: won't render the view on portrait
- **hideOnLandscape**: won't render the view in landscape

### Example
```javascript
import OrientationAwareView from "react-native-orientation-aware-view";

<OrientationAwareView
    style={{ flex: 1 }}
    portraitStyle={{ backgroundColor: "red" }}
    landscapeStyle={{ backgroundColor: "blue" }}>
    ...
</OrientationAwareView>
```
  