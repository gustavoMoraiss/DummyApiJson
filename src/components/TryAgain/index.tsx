import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props {
  onTryAgainButtonClick(): void;
  tryAgainText: string;
}

const TryAgain: FC<Props> = ({onTryAgainButtonClick, tryAgainText}) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tryAgainText}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onTryAgainButtonClick()}>
        <Text style={styles.title}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(TryAgain);
