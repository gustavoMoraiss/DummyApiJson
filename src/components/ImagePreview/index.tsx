import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './style';

interface Props {
  images: string[];
  onImagePreviewPress(): void;
  maxOfCards?: number;
}

const ImagePreview: FC<Props> = ({
  images,
  maxOfCards = 3,
  onImagePreviewPress,
}) => {
  const slicedImages = images?.length
    ? images?.slice(0, images?.length - 1)
    : [];
  const diffImages = slicedImages?.length - maxOfCards;

  return (
    <Pressable onPress={() => onImagePreviewPress()} style={styles.footer}>
      {images?.map((image, index) => (
        <View key={image}>
          {index < maxOfCards ? (
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
