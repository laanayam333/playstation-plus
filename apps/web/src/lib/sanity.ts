import createImageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@lib/sanity.server';

type ImageSizes = {
  aspectRatio: number;
  source: {
    download: string;
    fullscreen: string;
    regular: string;
    thumbnail: string;
  };
};

const urlFor = (source: Sanity.ImageObject) =>
  createImageUrlBuilder(sanityClient).image(source);

export function getImageSizes(image: Sanity.ImageObject): ImageSizes {
  return {
    aspectRatio: image.asset.metadata.dimensions.aspectRatio,
    source: {
      download: urlFor(image).url() || '',
      fullscreen: urlFor(image).width(1024).url() || '',
      regular: urlFor(image).width(900).url() || '',
      thumbnail: urlFor(image).height(400).url() || '',
    },
  };
}
