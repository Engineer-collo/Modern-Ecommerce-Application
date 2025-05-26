
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


function VideoSlider({ videos }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000 }}
      loop={true}
      className="w-full h-64 rounded overflow-hidden"
    >
      {videos.map((video, idx) => (
        <SwiperSlide key={idx}>
          <video src={video} autoPlay muted  className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default VideoSlider