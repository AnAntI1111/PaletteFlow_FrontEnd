import styles from "./Video.module.css";

export default function Video ({ scrollY, fadeStart }) {
    const fadeInStart = fadeStart; // เริ่ม fade หลังจาก Gallery จบ
    const fadeInEnd = fadeInStart + 300; // Fade เต็มที่หลังจาก 300px
  const opacity = scrollY < fadeInStart 
    ? 0 
    : scrollY > fadeInEnd 
      ? 1 
      : (scrollY - fadeInStart) / (fadeInEnd - fadeInStart);

  return (
    <div className={styles.bg} style={{ opacity }}>
            {/* Background Section */}
            <div className={styles.background}>
                <div className={styles.bar1}></div>
            </div>

                  {/* YouTube Video (ไม่หมุน) */}
            <div className={styles.videoWrapper}>
            <iframe 
                width="1903px" 
                height="750px" 
                src="https://www.youtube.com/embed/8eC2c-3iCL8?list=PLxpCY4RrF1TdMrQgCNkbS9aEqmkTOz11I" 
                title="La Moon - ละมุน (Blooming Heart) l Official MV" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            </div>

            <img className={styles.hVideo} src="/hVideo.png" width={950}/>

            <img className={styles.sSlide} src="/sSlide.png" width={35}/>

            <a href="#" target="_blank" rel="noopener noreferrer">
                <img className={styles.btn} src="/btn.png" width={590} alt="Button" />
            </a>    

            <a href="#" target="_blank" rel="noopener noreferrer">
                <img className={styles.yt_icon} src="/yt_icon.png" width={80} alt="Button" />
                <img className={styles.circle} src="/circle.png" width={230} alt="Button" />

            </a>    

            <img className={styles.easy} src="/easy.png" width={810}/>


</div>
  );
}
