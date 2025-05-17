import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './style';

interface Props {
  images: string[];
  onImagePreviewPress(): void;
  diffImages: number;
}

const ImagePreview: FC<Props> = props => {
  const {images, diffImages, onImagePreviewPress} = props;

  return (
    <Pressable onPress={() => onImagePreviewPress()} style={styles.footer}>
      {images?.map((image, index) => (
        <View key={image}>
          {index < 3 ? (
            <Image source={{uri: image}} style={styles.miniImage} />
          ) : null}
          {diffImages > 0 && index === images?.length - 1 ? (
            <View style={styles.moreImagesContainer}>
              <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
            </View>
          ) : null}
        </View>
      ))}
    </Pressable>
  );
};

export default React.memo(ImagePreview);
