import Icon from '@react-native-vector-icons/ionicons';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';

interface Props {
  onPress(): void;
}

const BackButton: FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconBackground}>
      <Icon name="chevron-back-outline" size={24} />
    </TouchableOpacity>
  );
};

export default React.memo(BackButton);
