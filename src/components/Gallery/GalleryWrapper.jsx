import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Global } from '@emotion/react';


const GalleryWrapper = ({ children, galleryId }) => {

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryId]);

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

export default GalleryWrapper
