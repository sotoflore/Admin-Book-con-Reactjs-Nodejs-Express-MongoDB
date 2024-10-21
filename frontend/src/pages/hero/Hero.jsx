import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../../components/carousel/Carousel'
import imageHeroOne from '../../assets/img/image-slider-one-hero.jpg';
import imageHeroTwo from '../../assets/img/image-slider-two-hero.jpg';
import imageHeroThree from '../../assets/img/image-slider-thre-hero.jpg';

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        waitForAnimate: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        prevArrow: null,
        nextArrow: null 
    };

    const slides = [
        { id: 1, image: imageHeroOne },
        { id: 2, image: imageHeroTwo },
        { id: 3, image: imageHeroThree },
    ];

    return (
        <section className="relative max-w-screen">
            <Slider {...settings}>
                {slides.map(slide => (
                    <Carousel key={slide.id} image={slide.image} />
                ))}
            </Slider>
        </section>
    )
}
export default Hero;