import React from 'react'
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery"
import "lightgallery.js/dist/css/lightgallery.css";
import { Grid, Container } from 'semantic-ui-react'
// import '../css/carpage-pic.css'
import { Media, MediaContextProvider } from './Media'

import img1 from '../assets/gallery/1.jpg'
import img2 from '../assets/gallery/2.jpg'
import img3 from '../assets/gallery/3.jpg'
import img4 from '../assets/gallery/4.jpg'
import img5 from '../assets/gallery/5.jpg'
import img6 from '../assets/gallery/6.jpg'
import img7 from '../assets/gallery/7.jpg'

const imageArray = [ img1, img2, img3, img4, img5, img6 ]


const smallImagesStyle = {
    maxWidth: 300,
    maxHeight: 300,
    objectFit: 'cover',
    overflow: 'hidden'
}

function ItemOne({image}) {
    return (
        <Grid.Column key={image}>
            <Container style={{overflow: 'hidden'}}>
            <LightgalleryItem group="any" src={image}>
                <img 
                src={image} 
                className="carpage--gallery-image" 
                alt="" 
                style={smallImagesStyle}
                />
            </LightgalleryItem>
            </Container>
        </Grid.Column>
    )
}


function LightGallery({
    image,
    images
}) {
    return (
        <Container style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
        <MediaContextProvider>
            <Media greaterThanOrEqual="computer">
                <LightgalleryProvider
                    galleryClassName="carpage--gallery"
                >
                    <Grid columns={3}>
                        {imageArray.map ( item => <ItemOne image={item}/>)}
                    </Grid>
                </LightgalleryProvider>
            </Media>
            
            <Media at="tablet">
                <LightgalleryProvider>
                    <Grid columns={2}>
                        {imageArray.map ( item => <ItemOne image={item}/>)}
                    </Grid>
                </LightgalleryProvider>
            </Media>

            <Media at="mobile">
                <LightgalleryProvider>
                    <Container style={{display: 'flex', flexDirection: 'column'}}>
                        {imageArray.map ( item => <ItemOne image={item}/>)}
                    </Container>
                </LightgalleryProvider>
            </Media>
        </MediaContextProvider>
        </Container>
    )
}

export default LightGallery