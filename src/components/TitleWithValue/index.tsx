import React, {FC} from 'react';
import {Text, TextProps, View} from 'react-native';
import styles from './style';

interface Props extends TextProps {
  title: string;
  value: string;
}

const TitleWithValue: FC<Props> = props => {
  const {title, value, style} = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{title}</Text>
      <Text style={[styles.title, style]}>{value}</Text>
    </View>
  );
};

export default React.memo(TitleWithValue);
