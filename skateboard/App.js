import 'react-native-gesture-handler';
import React  from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import skates from './assets/data/skates';
import Page  from './components/Page';

export default App = () => {

    console.log("Main App Component Loaded!!!");

    const gestureDisplacementFromCenter = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
        gestureDisplacementFromCenter.value = event.contentOffset.x;
      },
    });


    return (
        <View style={style.container}>

          <Animated.ScrollView
            style={{ flex: 1 }}
            horizontal
            pagingEnabled   //adds snap to scrolling
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16} //Fixed value to make scrolling 60fps(1/60=0.016s=16ms)
            onScroll={scrollHandler}
          >
            {skates.map((item, index) => (
              <Page
                key={index.toString()}
                page={item}
                index={index}
                gestureDisplacementFromCenter={gestureDisplacementFromCenter}
              />
            ))}
          </Animated.ScrollView>
          
        </View>
    );
};


const style = StyleSheet.create({

  container:{
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

});