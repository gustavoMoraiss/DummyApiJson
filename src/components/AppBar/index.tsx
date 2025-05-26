import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import Icon from '@react-native-vector-icons/ionicons';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props {
  onPressRightIcon?(): void;
  onPressLeftIcon?(): void;
}

const AppBar: FC<Props> = ({onPressRightIcon, onPressLeftIcon}) => {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressLeftIcon} style={styles.iconBackground}>
        <Icon name="menu" size={24} color={theme.colors.primary} />
      </TouchableOpacity>

      {onPressRightIcon && (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={styles.iconBackground}>
          <Icon name="search" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(AppBar);
