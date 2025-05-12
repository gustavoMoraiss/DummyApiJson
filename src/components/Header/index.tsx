import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './style';

interface Props {
  title: string;
  subTitle: string;
}

const Header: FC<Props> = props => {
  const {title, subTitle} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default React.memo(Header);
