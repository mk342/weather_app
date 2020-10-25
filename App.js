import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather";

const API_KEY = "0d8c409721b83131c87f1d1a02886fda";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading: false, condition: weather[0].main, temp});
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
      this.getWeather(latitude, longitude);
    } catch(error) {
      console.log(error);
      Alert.alert("Permission Denied", "Try Again");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
