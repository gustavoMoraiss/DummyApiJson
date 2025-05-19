import Icon from '@react-native-vector-icons/ionicons';
import React, {FC, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import colors from '../../constants/colors';
import {View} from 'react-native';
import styles from './style';

interface Props {
  color?: string;
}

const Loader: FC<Props> = ({color = colors.textDark}) => {
  const initialRotation = useSharedValue(0);

  const transform = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${initialRotation.value}deg`}],
    };
  });

  useEffect(() => {
    initialRotation.value = withRepeat(withTiming(360), -1);
  });

  return (
    <Animated.View style={transform}>
      <View style={styles.container}>
        <Icon name="unlink-outline" size={48} color={color} />
      </View>
    </Animated.View>
  );
};

export default React.memo(Loader);
