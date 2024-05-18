import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import { COLORS } from "../../Constants/Colors";
import { SIZES } from "../../Constants/Sizes";
import L1 from "../../Assets/Images/L1.jpeg";
import Login2 from "../../Assets/Images/Login2.jpeg";
import Login3 from "../../Assets/Images/Login3.jpeg";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
const Login = () => {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {

            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    const duration = 1000;
    const delay = duration + 400;
    const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
    const fadeTextAnimation = useRef(new Animated.Value(0)).current;
    const moveButtonAnimation = useRef(new Animated.Value(1)).current;
    const moveImagesAnimation = useRef(
        new Animated.ValueXY({ x: 100, y: 100 })
    ).current;
    const imagesAnimationHandler = () => {
        Animated.sequence([
            Animated.timing(fadeImagesAnimation, {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }),
            Animated.spring(moveImagesAnimation, {
                toValue: { x: 0, y: 0 },
                duration,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const textAnimationHandler = () => {
        Animated.timing(fadeTextAnimation, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
        }).start();
    };
    const buttonAnimationHandler = () => {
        Animated.spring(moveButtonAnimation, {
            toValue: 0,
            friction: 4,
            delay,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        imagesAnimationHandler();
        textAnimationHandler();
        buttonAnimationHandler();

    }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler]);

    return (
        <View style={styles.container}>

            <Animated.View
                style={[
                    styles.ImageContainer,
                    {
                        opacity: fadeImagesAnimation,
                        transform: moveImagesAnimation.getTranslateTransform(),
                    },
                ]}
            >
                <View style={styles.imageCard}>
                    <Image style={styles.image} source={L1} />
                </View>
                <View style={[styles.imageCard, { top: SIZES.medium + 17 }]}>
                    <Image style={styles.image} source={Login2} />
                </View>
                <View style={styles.imageCard}>
                    <Image style={styles.image} source={Login3} />
                </View>

            </Animated.View >


            <Animated.View
                style={[
                    styles.textContainer,
                    {
                        opacity: fadeTextAnimation,
                    },
                ]}
            >
                <Text style={styles.mainText}>
                    Mental Health TeleMed App Tracker
                </Text>
                <Text style={styles.subText}>
                    Empowering Mental Health Through Telemedicine and Real-Time Tracking
                </Text>
            </Animated.View>


            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Animated.View
                    style={[

                        {
                            transform: [
                                {
                                    translateY: moveButtonAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 200],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.textButton}>Let's Get Started</Text>
                </Animated.View>
            </TouchableOpacity>






        </View >
    )

}
export default Login;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.small,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: COLORS.bg,

    },
    ImageContainer: {
        top: -SIZES.medium,
        flexDirection: "row",
        gap: SIZES.small,

    },
    imageCard: {
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        backgroundColor: COLORS.Primary,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: SIZES.medium,
    },
    textContainer: {
        margin: SIZES.small,
        padding: SIZES.small,
        marginVertical: SIZES.xLarge + 6,
    },
    mainText: {
        fontWeight: "bold",
        fontSize: SIZES.xLarge + 8,
        textAlign: "center",
        color: COLORS.Brown,
    },
    subText: {

        textAlign: "center",
        marginTop: SIZES.large,
        color: COLORS.gray,
    },
    buttonContainer: {
        position: "absolute",
        bottom: SIZES.xLarge + 65,
        marginVertical: SIZES.xLarge,
        backgroundColor: COLORS.Primary,
        padding: SIZES.small + 13,
        width: 300,
        alignItems: "center",
        borderRadius: SIZES.medium + 20,
    },
    textButton: {
        color: COLORS.Brown,
        fontWeight: "600",
        fontSize: SIZES.large,
    },


});