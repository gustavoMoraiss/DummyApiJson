import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from '@react-native-vector-icons/ionicons';

interface Props {
  onPressRightIcon?(): void;
  onPressLeftIcon?(): void;
}

const AppBar: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPressLeftIcon}
        style={styles.iconBackground}>
        <Icon name="menu" size={24} />
      </TouchableOpacity>

      {props.onPressRightIcon && (
        <TouchableOpacity
          onPress={props.onPressRightIcon}
          style={styles.iconBackground}>
          <Icon name="search" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(AppBar);
