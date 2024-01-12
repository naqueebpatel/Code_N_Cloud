import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Alumini.css'

const AlumniCard = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  return (
    <div className=''>
        <div>
            <h1 className='alumni-heading'>Alumni</h1>
        </div>
    <Slider {...settings} className="alumni-container">
      {data?.map((item) => (
        <div className='trying'>
        <div key={item.id} className="alumni-card">
          <div>
            <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" alt=""  />
          </div>
          <div className="alumni-card-content">
            <h2>{item.sname}</h2>
            <p className='alumni-course-name'>{item.cname}</p>
            <p>{item.mssg}</p>
          </div>
        </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default AlumniCard;