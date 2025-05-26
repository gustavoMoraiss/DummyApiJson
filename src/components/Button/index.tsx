import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styles from './style';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress(): void;
}

const Button: FC<Props> = ({title, onPress, style}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onPress()}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
