import React  from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get("window");

export default Page = (props) => {


    const skateAnimationStyle = useAnimatedStyle(() => ({
        transform: [
            {
                rotate: interpolate(props.gestureDisplacementFromCenter.value, [(props.index-1)*PAGE_WIDTH, props.index*PAGE_WIDTH, (props.index+1)*PAGE_WIDTH], [-80, 0, 80]) +'deg'
            },
        ],
        opacity: interpolate(props.gestureDisplacementFromCenter.value, [(props.index-1)*PAGE_WIDTH, props.index*PAGE_WIDTH, (props.index+1)*PAGE_WIDTH], [0.5, 1, 0.5] )
    }));

    const circleAnimationStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(props.gestureDisplacementFromCenter.value, [(props.index-1)*PAGE_WIDTH, props.index*PAGE_WIDTH, (props.index+1)*PAGE_WIDTH], [0.3, 1, 0.3])
            },
        ],
    }));

    return (
        <View style={[style.page]}>
            <View style={style.circleContainer}>
                <Animated.View style={[circleAnimationStyle, style.circle]}></Animated.View>
                <Animated.Image source={props.page.source} style={[skateAnimationStyle, style.imageStyle]} resizeMode="contain"></Animated.Image>
            </View>
            <Text style={style.title}>{props.page.title}</Text>
            <Text style={style.description}>{props.page.description}</Text>
        </View>
    );
};


const style = StyleSheet.create({

    page:{
        width: PAGE_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    circleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    circle: {
        width: PAGE_WIDTH * 0.7,
        height: PAGE_WIDTH * 0.7,
        borderRadius: (PAGE_WIDTH * 0.7)/2,
        backgroundColor: 'white',
        position: 'absolute',
    },

    imageStyle:{
        height: PAGE_HEIGHT * 0.6,
    },
    title: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "700",
        marginBottom: 15,
    },

    description: { 
        textAlign: "center", 
        fontSize: 14, 
        color: "grey" ,
        marginHorizontal: 20,
    },

});