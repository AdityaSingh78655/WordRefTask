import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppImages } from './AppImage/AppImages';
import { SplashScreenStyle } from '../styles/SplashScreenStyle';

const SplashScreen = () => {
  const navigation = useNavigation();

  

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomNavigation');
    }, 2000);
  }, []);

  return (
    <>
      <View style={SplashScreenStyle.mainView}>
        <Image source={AppImages.SPLASH} style={SplashScreenStyle.image} />
      </View>
      <View style={SplashScreenStyle.textView}>
        <Text style={SplashScreenStyle.textStyle}>
          Notes
        </Text>
      </View>
</>
  );
};

export default SplashScreen;