import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "먼지 때문에 흐릿함"
    },
    
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "폭풍우 내릴 예정"
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "가벼운 비"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "비 올 예정"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "눈 내림"
    },
    Atmosphere: {
        iconName: "weather-sunset-down",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "살짝 흐릿함"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FEF253", "#FF7300"],
        title: "Clear",
        subtitle: "화창함"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "구름 많음"
    },
    Mist: {
        iconName: "blur",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "안개 낌"
    },
    Dust: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "미세 먼지 많음"
    }
}

export default function Weather({ temp, condition}) {
    return (
    <LinearGradient
        // Button Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
            <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "100",
        marginBottom: 10
        
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})