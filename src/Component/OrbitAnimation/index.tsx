import { useEffect, useRef } from "react";

interface OrbitImage {
  src: string;
  radiusX: number;
  radiusY: number;
  angle: number;
  speed: number;
  img?: HTMLImageElement; // Lưu trữ hình ảnh sau khi load
}

const OrbitCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height * 0.2;
    const maxRadiusX = width * 0.4;
    const maxRadiusY = height * 0.12;

    const imageSources = [
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
      "/assets/images/experience/logo.png",
    ];

    const numOrbits = 3;
    const iconsPerOrbit = 3;

    // **Giảm khoảng cách giữa các vòng**
    const spacingFactor = 1; // Càng nhỏ, vòng càng gần nhau
    const radiusXStep = (maxRadiusX / numOrbits) * spacingFactor;
    const radiusYStep = (maxRadiusY / numOrbits) * spacingFactor;
    const commonSpeed = 0.005;

    const orbitImages: OrbitImage[] = imageSources.map((src, index) => {
      const orbitIndex = Math.floor(index / iconsPerOrbit);
      const angleOffset =
        ((index % iconsPerOrbit) * (Math.PI * 2)) / iconsPerOrbit;
      return {
        src,
        radiusX: radiusXStep * (orbitIndex + 1),
        radiusY: radiusYStep * (orbitIndex + 1),
        angle: angleOffset,
        speed: commonSpeed,
      };
    });

    orbitImages.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      img.onload = () => {
        item.img = img;
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      // ctx.fillStyle = "#0D0519";
      // ctx.fillRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(
        0,
        centerY - maxRadiusY,
        0,
        centerY + maxRadiusY
      );
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(0.48, "#763CAC");
      gradient.addColorStop(1, "#763CAC");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;

      for (let i = 1; i <= numOrbits; i++) {
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radiusXStep * i,
          radiusYStep * i,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      orbitImages.forEach((item) => {
        if (!item.img) return;

        const x = centerX + Math.cos(item.angle) * item.radiusX;
        const y = centerY + Math.sin(item.angle) * item.radiusY;
        const size = 40;

        const dx = -Math.sin(item.angle) * item.radiusX;
        const dy = Math.cos(item.angle) * item.radiusY;
        const rotateAngle = Math.atan2(dy, dx);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotateAngle);
        ctx.drawImage(item.img, -size / 2, -size / 2, size, size);
        ctx.restore();

        item.angle += item.speed;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate as any);
  }, []);

  return <canvas ref={canvasRef} className="w-full" />;
};

export default OrbitCanvas;
