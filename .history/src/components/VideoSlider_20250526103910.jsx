function VideoSlider({ videos }) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 6000 }}
      loop={true}
      className="w-full h-64 rounded overflow-hidden"
    >
      {videos.map((video, idx) => (
        <SwiperSlide key={idx}>
          <video src={video} autoPlay muted controls className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export 