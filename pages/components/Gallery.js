import { motion, useScroll, useTransform , useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from "./Gallery.module.css";



export default function Gallery({ fadeEnd }) {
  const { scrollY } = useScroll(); // Get scrollY as a MotionValue
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setCurrentScroll(v);
      console.log("ScrollY:", v); 
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Control opacity
  const opacity = currentScroll > fadeEnd ? 1 : 0;

  const Light = useTransform(scrollY,
    [fadeEnd + 300, fadeEnd + 900, fadeEnd + 1500],
    ["350px", "1165px", "270px"]
  );

  const LightMove = useSpring(Light, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  //60

  const Pic60 = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1500vh", "180vh", "1500vh"] // เริ่มจากล่าง -> อยู่ตรงกลาง -> กลับไปล่าง
  );

  const Pic60Move = useSpring(Pic60, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  const P60 = useTransform(scrollY, 
    [fadeEnd, fadeEnd + 300, fadeEnd + 600], // 3 ระยะ
    ["1000vh", "-650vh", "1000vh"] // วิ่งเข้ามา -> อยู่ตรงกลาง -> วิ่งออกไป
  );

  const P60Move = useSpring(P60, {
    stiffness: 100, // เพิ่มให้หน่วงขึ้น
    damping: 20,
    mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
  });

  //30

    // pic30 เลื่อนขึ้นมาจากล่างแล้วกลับไปล่าง
    const Pic30 = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["1500vh", "250vh", "1500vh"]
    );
  
    const Pic30Move = useSpring(Pic30, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    // p30 เลื่อนมาจากซ้ายแล้วกลับไปซ้าย
    const P30 = useTransform(scrollY, 
      [fadeEnd + 600, fadeEnd + 900, fadeEnd + 1200], // เพิ่ม range ให้ scroll ได้มากขึ้น
      ["-1500vh", "400vh", "-1500vh"]
    );
  
    const P30Move = useSpring(P30, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });

    
    //10

    const Pic10 = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "170vh", "1500vh"]
    );
  
    const Pic10Move = useSpring(Pic10, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });
  
    const P10 = useTransform(scrollY, 
      [fadeEnd + 1200, fadeEnd + 1500, fadeEnd + 1800], // ลดช่วงให้มาเร็วขึ้น
      ["1500vh", "-600vh", "1500vh"]
    );
  
    const P10Move = useSpring(P10, {
      stiffness: 100, // เพิ่มให้หน่วงขึ้น
      damping: 20,
      mass: 1.5 // เพิ่มมวลให้เคลื่อนที่ต่อเนื่อง
    });



  return (
    <section id="gallery" style={{ height: '100vh' }}>
    <div className={styles.body}>
    <motion.div 
      className={styles.bg}
      style={{
        position: "fixed", // ให้พื้นหลังอยู่กับที่
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
        opacity: opacity,
        transition: "opacity 0.5s ease",
        overflow: "hidden", // ป้องกันพื้นหลังขยายตามเนื้อหา
      }}
    >

      <motion.div
        style={{
          position: "absolute",
          zIndex: "100",
          x : LightMove,
        }}
      >
        <img src="/light.png" width={815} />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          left: "500px",
          top: "0",
          y : Pic60Move, // ควบคุมตำแหน่งตาม scroll
        }}
      >
        <img src="/pic60.png" width={530} />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          right: 0,
          top: "270px",
          x : P60Move, // ควบคุมตำแหน่งตาม scroll
        }}
      >
        <img src="/p60.png" width={510} />
      </motion.div>
      

      <motion.div
                style={{
                position: "absolute",
                left: 0, // เริ่มจากซ้าย
                top: "270px",
                x: P30Move, // ควบคุมให้เลื่อนซ้าย-ขวา
                }}
            >
                <img src="/p30.png" width={530} />
            </motion.div>

            <motion.div
                style={{
                position: "absolute",
                right: "550px",
                top: 0,
                y: Pic30Move, // ควบคุมให้เลื่อนขึ้น-ลง
                }}
            >
                <img src="/pic30.png" width={560} />
            </motion.div>


            <motion.div
                style={{
                position: "absolute",
                left: "350px",
                top: "0",
                y : Pic10Move,
                }}
            >
                <img  src="/pic10.png" width={670} />
            </motion.div>

            <motion.div
                style={{
                position: "absolute",
                right: 0,
                top: "270px",
                x : P10Move,
                }}
            >
                <img src="/p10.png" width={600} />
            </motion.div>

    </motion.div>
    </div>
    </section>
  );
}
