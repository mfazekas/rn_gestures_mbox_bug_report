import React from 'react';
import { TouchableOpacity, Image, View, Text, Animated } from 'react-native';
import Mapbox, { MarkerView, MapView, Camera } from '@rnmapbox/maps';

import { GestureHandlerRootView, PanGestureHandler, GestureDetector } from 'react-native-gesture-handler';

Mapbox.setAccessToken('pk.eyJ1IjoiZmF6ZWthc2h1emFyIiwiYSI6ImNsanFzdzAyMDA5eXgzanA3Y3l0OHliNWIifQ.PzM4XJBsAykpUqe1NUSqtQ');

const MapComponent = () => {
  return (
    <View style={{flex: 1}}>
      <MapView style={{ flex: 1 }}>
        <Camera centerCoordinate={[-12.393354, 48.130477]} />
        <MarkerView
          coordinate={[-12.393354, 48.130477]}
          anchor={{ x: 0.5, y: 1 }}
        >
          <TouchableOpacity
            onPress={() => console.log('button in map pressed')}
            style={{
              backgroundColor: 'transparent',
              width: 60,
              height: 60,
            }}
          >
            <View style={{backgroundColor:'red', width: 60, height: 60, borderRadius: 10, padding: 10}}>
              <Text>Press me!</Text>
            </View>
          </TouchableOpacity>
        </MarkerView>
      </MapView>
      <TouchableOpacity
            onPress={() => console.log('button outside map pressed')}
            style={{
              backgroundColor: 'transparent',
              width: 60,
              height: 60,
              margin: 20,
            }}
          >
        <View style={{backgroundColor:'red', width: 60, height: 60, borderRadius: 10, padding: 10}}>
          <Text>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const MapWoPanGestureHandler = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{flex: 1}}>
        <MapComponent /> 
      </Animated.View>
    </GestureHandlerRootView>
  )
}

const MapWPanGestureHandler = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler
        style={{flex: 1}}
        onGestureEvent={() => console.log("=> onGestureEvent")}
        onHandlerStateChange={() => console.log("=> onHandlerStateChange")}
      >
        <Animated.View style={{flex: 1}}>
          <MapComponent />
        </Animated.View>
      </PanGestureHandler> 
    </GestureHandlerRootView>
  )
}

//export default MapWoPanGestureHandler;
export default MapWPanGestureHandler;
