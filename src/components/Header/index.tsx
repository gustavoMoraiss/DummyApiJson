import React, {FC} from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import styles from './style';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props {
  title: string;
  subTitle: string;
  headingStyle?: StyleProp<TextStyle>;
  subHeadingStyle?: StyleProp<TextStyle>;
}

const Header: FC<Props> = ({
  title,
  subTitle,
  headingStyle,
  subHeadingStyle,
}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, headingStyle]}>{title}</Text>
      <Text style={[styles.subTitle, subHeadingStyle]}>{subTitle}</Text>
    </View>
  );
};

export default React.memo(Header);
