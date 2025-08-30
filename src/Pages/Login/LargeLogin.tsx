function LargeLogin() {
  return (
    <div className="hidden min-large:block">
      <div className="border-b border-b-[rgba(0,0,0,.17)] p-[14px_18px_18px] m-[0_auto] bg-[linear-gradient(to_bottom,#fff,#eee)]">
        <a href="#" className="flex justify-center">
          <i
            className="bg-[position:-2px_-167px] h-[31px] w-[103px] bg-[length:512px_256px] bg-no-repeat inline-block relative mr-1 "
            style={{
              backgroundImage: `url(https://m.media-amazon.com/images/S/sash/u-2N-$HzSM3vUnQ.png)`,
            }}
          ></i>
          <span className="bg-[0_0] align-sub text-sm inline-block leading-[20px] relative top-1 after:content-['.in']"></span>
        </a>
      </div>
      <div className="p-[14px_18px_18px] m-[0_auto] flex flex-cols justify-center">
        <div className="w-87.5 rounded-lg bg-white border border-[#d5d9d9] p-[20px_26px] ">
          <h1 className="mb-2 text-xl leading-[1.4] pb-1">
            Sign in or create account
          </h1>
          <p className="mb-1 font-fontBold p-0 m-[0_0_14px_0] text-sm leading-5">
            {" "}
            Enter mobile number or email
          </p>
          <div className="flex border border-[#888C8C] rounded-[3px] shadow-[0_1px_2px_rgba(15_17_17/15%)_inset] mb-1">
            <input
              type="text"
              className="border-none outline-0 flex-1 p-[5px_11px] h-8 rounded-sm relative"
            />
          </div>
          <button className="w-74 relative text-center bg-[#ffd814] border border-[#ffd814] inline-block rounded-[100px] h-8 mt-2 text-sm">
            Continue
          </button>
          <p className="mt-4 mb-3.5 text-[13px] leading-4">
            By continuing, you agree to Amazon's{" "}
            <span className="text-[#2162a1] underline">Conditions of Use</span>{" "}
            and <span className="text-[#2162a1] underline">Privacy Notice</span>
            .
          </p>
          <hr className="bg-transparent border-[#d5d9d9] h-px leading-[1.35] mb-[14px]" />
          <p className="mb-1 font-fontBold text-sm leading-5">
            Buying for work?
          </p>
          <p className="text-[#2162a1] text-sm">
            Create a free business account
          </p>
        </div>
      </div>
    </div>
  );
}

export default LargeLogin;
