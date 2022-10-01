import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Global } from '@emotion/react';

const PhotoSwipeAdapter = ({ children, galleryId, childElement, lightboxOptions }) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: childElement,
      pswpModule: () => import('photoswipe'),
      ...lightboxOptions
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryId, childElement, lightboxOptions]);

  return (
    <div className="pswp-gallery" id={galleryId}>
      {children}
      <Global styles={() => ({
        '.pswp__img': {
          objectFit: 'contain',
        },
      })}/>
    </div>
  )
}

export default PhotoSwipeAdapter
