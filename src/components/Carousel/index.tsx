import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { HeroImageOne } from '../common/Headerwebsite/HeroImageOne';
import { HeroImageTwo } from '../common/Headerwebsite/HeroImageTwo';

export default function CarouselForApp() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      sx={{ maxWidth: '100%' }}
      mx="auto"
      withIndicators
      height={545}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <HeroImageOne />
      </Carousel.Slide>
      <Carousel.Slide>
        <HeroImageTwo />
      </Carousel.Slide>
    </Carousel>
  );
}
