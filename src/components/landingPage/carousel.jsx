import React from "react";
import Container from '@mui/material/Container';
import { Carousel } from 'react-responsive-carousel';
import ImageHeader from '../../assets/img/header.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const CarouselPage = () => {
    return (
        <>
            <Container maxWidth="100%">
                <Carousel showThumbs={false} showStatus={false}>
                    <div>
                        <img src={ImageHeader} alt="Psytech" />
                    </div>
                </Carousel>
            </Container>

        </>
    );
}

export default CarouselPage;