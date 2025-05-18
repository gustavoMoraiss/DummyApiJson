import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from '@react-native-vector-icons/ionicons';

interface Props {
  leftIconName: string;
  rightIconName?: string;
  onPressRightIcon(): void;
  onPressLeftIcon?(): void;
}

const AppBar: FC<Props> = ({onPressRightIcon, onPressLeftIcon}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeftIcon} style={styles.iconBackground}>
        <Icon name="menu" size={24} />
      </TouchableOpacity>

      {onPressRightIcon && (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={styles.iconBackground}>
          <Icon name="search" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(AppBar);
