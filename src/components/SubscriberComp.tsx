function SubscriberComp() {
  return (
    <div>
      <div className="bg-[#8D28AD] py-24">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="text-3xl w-1/2 whitespace-pre-line font-bold text-white leading-10 line-clamp-2">
                Subscribe our newsletter for newest books updates
              </h3>
            </div>
            <div className="flex-1 flex justify-end ">
              <div className="flex w-3/4 space-x-4 items-stretch ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 bg-white/20 placeholder:text-white/50 text-white rounded-lg border-none"
                />
                <button className="bg-white uppercase font-bold text-base text-purple-700 px-6 py-4 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SubscriberComp;