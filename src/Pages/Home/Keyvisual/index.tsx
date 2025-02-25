import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { KeyvisualContainer, KeyvisualWrapper } from "./styled";
import { ContextProviderWrapper } from "../../../Context";

const Keyvisual = () => {
  const { isDesktop } = useContext(ContextProviderWrapper)!;

  const keyvisualRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(nameRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
      .fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0 },
        "-=0.8"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.8"
      )
      .fromTo(
        textRefs.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=0.5"
      );
  }, []);

  return (
    <KeyvisualContainer ref={keyvisualRef} className="md:pt-[132px]">
      <KeyvisualWrapper className="max-w-[1162px]">
        <div className="mx-auto md:flex">
          {!isDesktop && (
            <p ref={nameRef} className="text-name mb-[0] text-center">
              Hello! I Am <span>Ibrahim Memon</span>
            </p>
          )}
          <div ref={imageRef} className="keyvisual-left">
            <img
              src="/assets/images/keyvisual/keyvisual_img_01.png"
              width={165}
              height={223}
              loading="lazy"
              alt="Ty"
            />
          </div>
          <div className="keyvisual-right max-w-[385px]">
            {isDesktop && (
              <p ref={nameRef} className="text-name mb-[87px]">
                Hello! I Am <span>Ibrahim Memon</span>
              </p>
            )}
            <p
              ref={(el) => textRefs.current.push(el)}
              className="text-[17px] underline mb-[0]"
            >
              A Designer who
            </p>
            <h1
              ref={titleRef}
              className="title-keyvisual text-[50px] mb-[3px] leading-[126.664%]"
            >
              Judges a book by its <span>cover</span>...
            </h1>
            <p
              ref={(el) => textRefs.current.push(el)}
              className="text-small text-[11px]"
            >
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
        <div className="block-position mb-[69px]">
          <h2
            ref={(el) => textRefs.current.push(el)}
            className="text-[50px] mb-[0] leading-[1.3]"
          >
            I'm a Software Engineer.{" "}
          </h2>
          <p
            ref={(el) => textRefs.current.push(el)}
            className="position-small text-[21px] mb-[0]"
          >
            Currently, I'm a Software Engineer at <span>Facebook,</span>
          </p>
        </div>
        <p
          ref={(el) => textRefs.current.push(el)}
          className="text-[22px] mb-[0] max-w-[892px] tracking-[0.44px]"
        >
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </KeyvisualWrapper>
    </KeyvisualContainer>
  );
};

export default Keyvisual;
