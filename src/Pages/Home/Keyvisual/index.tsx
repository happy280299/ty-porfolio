import React from "react";
import { KeyvisualContainer, KeyvisualWrapper } from "./styled";

const Keyvisual = () => {
  return (
    <KeyvisualContainer className="pt-[132px]">
      <KeyvisualWrapper className="max-w-[1162px]">
        <div className="mx-auto flex">
          <div className="keyvisual-left">
            <img
              src="/assets/images/keyvisual/keyvisual_img_01.png"
              width={165}
              height={223}
              loading="lazy"
              alt="Ty"
            />
          </div>
          <div className="keyvisual-right max-w-[385px]">
            <p className="text-name mb-[87px]">
              Hello! I Am <span>Ibrahim Memon</span>
            </p>
            <p className="text-[17px] underline mb-[0]">A Designer who</p>
            <h1 className="title-keyvisual text-[50px] mb-[3px] leading-[126.664%]">
              Judges a book by its <span>cover</span>...
            </h1>
            <p className="text-small text-[11px]">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
        <div className="block-position mb-[69px]">
          <h2 className="text-[50px] mb-[0] leading-[1.3]">
            I'm a Software Engineer.|{" "}
          </h2>
          <p className="position-small text-[21px] mb-[0]">
            Currently, I'm a Software Engineer at <span>Facebook,</span>
          </p>
        </div>
        <p className="text-[22px] mb-[0] max-w-[892px] tracking-[0.44px]">
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
      </KeyvisualWrapper>
    </KeyvisualContainer>
  );
};

export default Keyvisual;
