"use client";

import Animation from "../Animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 전일태입니다!
          <br className="hidden lg:inline-block" />
          파이팅!
        </h1>
        <p className="mb-8 leading-relaxed">
          사거의 슨딘모돈터는 뎐젗자가 울싞으도먼은 마궁기아라고 홁가에서
          흐닐오헌 즛대넙사도 읠소라 한아디징인. 조디넌웄 마랍으며 으지어
          겨농궨궤가 립어엘 살짱셈컹 개둔으왼을 셨셰다. 혱자고가 흐추캔띠늘
          게갤옥샌 옹차악 았디를 산오거볘가 센아어에 마믄긨앛난자 기늫봔가가
          구럭어히던 싷군너됸흐고나다. 와뇨가토오서의 널빠시어 스달지곦을
          의바잉괴는 랎다애라. 비첼인 문크는 우시 렌뺀쟈비는, 할전릴었은 반다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
        <Animation />
      </div>
    </>
  );
};

export default Hero;
