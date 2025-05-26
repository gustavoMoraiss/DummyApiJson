import React, {FC} from 'react';
import {Dimensions, Text, TextProps, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props extends TextProps {
  title: string;
  value: string;
}

const TitleWithValue: FC<Props> = ({title, value, style}) => {
  const {styles} = useStyles(stylesheet);
  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={[styles.title, style, {width: width / 1.7}]}>{title}</Text>
      <Text style={[styles.title, style]}>{value}</Text>
    </View>
  );
};

export default React.memo(TitleWithValue);
