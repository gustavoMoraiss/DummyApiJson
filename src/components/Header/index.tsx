import React, {FC} from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import styles from './style';

interface Props {
  title: string;
  subTitle: string;
  headingStyle?: StyleProp<TextStyle>;
  subHeadingStyle?: StyleProp<TextStyle>;
}

const Header: FC<Props> = props => {
  const {title, subTitle, headingStyle, subHeadingStyle} = props;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, headingStyle]}>{title}</Text>
      <Text style={[styles.subTitle, subHeadingStyle]}>{subTitle}</Text>
    </View>
  );
};

export default React.memo(Header);
