import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import styles from './style';
import Icon from '@react-native-vector-icons/ionicons';

interface Props {
  onPressRightIcon?(): void;
  onPressLeftIcon?(): void;
}

const AppBar: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPressLeftIcon} style={styles.iconBackground}>
        <Icon name="menu" size={24} />
      </Pressable>
      <Pressable onPress={props.onPressRightIcon} style={styles.iconBackground}>
        <Icon name="search" size={24} />
      </Pressable>
    </View>
  );
};

export default React.memo(AppBar);
