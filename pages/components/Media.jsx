import React from 'react'
import { createMedia } from "@artsy/fresnel"
import { Container } from 'semantic-ui-react'

const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
});

export const mediaStyles = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;

export default () => <Container></Container>
