import { PropTypes } from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import {
  StyledBannerContainer,
  StyledBannerList,
  StyledBanner,
  StyledBannerText,
  StyledNavButton,
} from './banner.styled';

const Banner = ({ data }) => {
  const bannerContainerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    initSlides();
  }, []);
  useEffect(() => {
    move(activeSlide);
  }, [activeSlide]);

  const renderBanner = () => {
    return data.map((item, index) => {
      const { image, content } = item;
      const { title, body, alignment } = content;
      return (
        <StyledBanner
          style={{ backgroundImage: `url(${image})` }}
          className="slide"
          key={index}
        >
          <StyledBannerText className={alignment}>
            <h3>{title}</h3>
            <p>{body}</p>
          </StyledBannerText>
        </StyledBanner>
      );
    });
  };

  const initSlides = () => {
    const rootElem = bannerContainerRef.current;
    const slides = rootElem.querySelectorAll('.slide');
    const width = screen.width * slides.length;
    const slideListElem = rootElem.querySelector('.slideList');
    slideListElem.style.width = `${width}px`;
    slides.forEach((slide) => {
      slide.style.width = `${screen.width}px`;
    });
  };

  const slide = (direction) => {
    if (direction === 'prev') {
      const activeIndex = activeSlide - 1;
      setActiveSlide(Math.max(activeIndex, 0));
    } else {
      const rootElem = bannerContainerRef.current;
      const activeIndex = activeSlide + 1;
      const slidesCount = rootElem.querySelectorAll('.slide').length - 1;
      setActiveSlide(Math.min(activeIndex, slidesCount));
    }
  };

  const move = (activeIndex) => {
    const rootElem = bannerContainerRef.current;
    const slideListElem = rootElem.querySelector('.slideList');
    slideListElem.style.right = `${activeIndex * screen.width}px`;
  };

  return (
    <div>
      <StyledBannerContainer ref={bannerContainerRef}>
        <StyledBannerList className="slideList">
          {renderBanner()}
        </StyledBannerList>
        <StyledNavButton className="prev" onClick={(e) => slide('prev')} />
        <StyledNavButton className="next" onClick={(e) => slide('next')} />
      </StyledBannerContainer>
    </div>
  );
};

Banner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      content: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
      }),
    }),
  ),
};

export default Banner;
