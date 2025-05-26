import Icon from '@react-native-vector-icons/ionicons';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './style';

interface Props {
  onPress(): void;
}

const BackButton: FC<Props> = ({onPress}) => {
  const {styles, theme} = useStyles(stylesheet);
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconBackground}>
      <Icon
        name="chevron-back-outline"
        size={24}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
};

export default React.memo(BackButton);
