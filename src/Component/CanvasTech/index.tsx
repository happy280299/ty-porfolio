import React, { useEffect, useRef } from "react";

const CanvasCurvedLinesWithFix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({}); // Lưu ảnh đã tải trước

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const startX = width / 2;
    const startY = height - 100;

    const allIcons = [
      { name: "figma", img: "/assets/images/experience/figma.png" },
      { name: "react", img: "/assets/images/experience/figma.png" },
      { name: "c", img: "/assets/images/experience/figma.png" },
      { name: "node", img: "/assets/images/experience/figma.png" },
      { name: "redux", img: "/assets/images/experience/figma.png" },
      { name: "js", img: "/assets/images/experience/figma.png" },
      { name: "css", img: "/assets/images/experience/figma.png" },
      { name: "html", img: "/assets/images/experience/figma.png" },
      { name: "xd", img: "/assets/images/experience/figma.png" },
      { name: "nextjs", img: "/assets/images/experience/figma.png" },
      { name: "gatsby", img: "/assets/images/experience/figma.png" },
      { name: "ai", img: "/assets/images/experience/figma.png" },
    ];

    // **Tạo danh sách ảnh trước**
    allIcons.forEach((icon) => {
      const img = new Image();
      img.src = icon.img;
      imagesRef.current[icon.name] = img;
    });

    const spacing = 90;
    const offset = spacing / 2;

    const bottomIcons = allIcons.slice(0, 6);
    const topIcons = allIcons.slice(6);

    const icons = [
      ...bottomIcons.map((icon, index) => ({
        ...icon,
        x: startX + spacing * (index - (bottomIcons.length - 1) / 2),
        y: height / 2 - 80,
        progress: 0,
        scale: 0,
        isBottom: true,
      })),
      ...topIcons.map((icon, index) => ({
        ...icon,
        x: startX + spacing * (index - (topIcons.length - 1) / 2) + offset,
        y: height / 3 + 20,
        progress: 0,
        scale: 0,
        isBottom: false,
      })),
    ];

    let animationProgress = 0;
    let step = 1;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      let allLinesBottomDone = true;
      let allIconsBottomDone = true;
      let allLinesTopDone = true;
      let allIconsTopDone = true;

      // **Bước 1: Vẽ đường cong của hàng dưới**
      if (step >= 1) {
        icons
          .filter((icon) => icon.isBottom)
          .forEach((icon, index) => {
            const cp1X = (startX + icon.x) / 2;
            const cp1Y = height / 1.8;

            if (icon.progress < 1) {
              icon.progress = Math.min(icon.progress + 0.02, animationProgress);
              allLinesBottomDone = false;
            }

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            const currentX = startX + (icon.x - startX) * icon.progress;
            const currentY = startY + (icon.y - startY) * icon.progress;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 2;
            ctx.quadraticCurveTo(cp1X, cp1Y, currentX, currentY);
            ctx.stroke();
          });

        if (allLinesBottomDone && step === 1) step = 2;
      }

      // **Bước 2: Hiển thị icon của hàng dưới**
      if (step >= 2) {
        icons
          .filter((icon) => icon.isBottom)
          .forEach((icon) => {
            if (icon.scale < 1) {
              icon.scale = Math.min(1, icon.scale + 0.05);
              allIconsBottomDone = false;
            }

            const image = imagesRef.current[icon.name];
            if (image?.complete) {
              ctx.drawImage(
                image,
                icon.x - 25 * icon.scale,
                icon.y - 25 * icon.scale,
                50 * icon.scale,
                50 * icon.scale
              );
            }
          });

        if (allIconsBottomDone && step === 2) step = 3;
      }

      // **Bước 3: Vẽ đường cong của hàng trên**
      if (step >= 3) {
        icons
          .filter((icon) => !icon.isBottom)
          .forEach((icon, index) => {
            const bottomIcon = icons[index];

            const cp1X = (icon.x + bottomIcon.x) / 2;
            const cp1Y = bottomIcon.y - 50;

            if (icon.progress < 1) {
              icon.progress = Math.min(icon.progress + 0.02, animationProgress);
              allLinesTopDone = false;
            }

            ctx.beginPath();
            ctx.moveTo(bottomIcon.x, bottomIcon.y);
            const currentX =
              bottomIcon.x + (icon.x - bottomIcon.x) * icon.progress;
            const currentY =
              bottomIcon.y + (icon.y - bottomIcon.y) * icon.progress;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 2;
            ctx.quadraticCurveTo(cp1X, cp1Y, currentX, currentY);
            ctx.stroke();
          });

        if (allLinesTopDone && step === 3) step = 4;
      }

      // **Bước 4: Hiển thị icon của hàng trên**
      if (step >= 4) {
        icons
          .filter((icon) => !icon.isBottom)
          .forEach((icon) => {
            if (icon.scale < 1) {
              icon.scale = Math.min(1, icon.scale + 0.05);
              allIconsTopDone = false;
            }

            const image = imagesRef.current[icon.name];
            if (image?.complete) {
              ctx.drawImage(
                image,
                icon.x - 25 * icon.scale,
                icon.y - 25 * icon.scale,
                50 * icon.scale,
                50 * icon.scale
              );
            }
          });
      }

      if (
        !allLinesBottomDone ||
        !allIconsBottomDone ||
        !allLinesTopDone ||
        !allIconsTopDone
      ) {
        animationProgress += 0.01;
        requestAnimationFrame(draw);
      }
    };

    draw();

    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default CanvasCurvedLinesWithFix;
