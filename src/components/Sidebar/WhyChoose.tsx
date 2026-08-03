import { whyChoose } from "./WhyChooseData";

const WhyChoose = () => {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-500">

      <h2 className="mb-6 text-2xl sm:text-xl font-bold text-violet-900">
        Why Choose TDL with Om?
      </h2>

      <div className="space-y-5">

        {whyChoose.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-violet-50 cursor-pointer"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-violet-100 shrink-0 ">
                <Icon className="text-violet-700 text-lg" />
              </div>

              <div>
                <h3 className="text-sm font-semibold sm:text-base">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 sm:text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default WhyChoose;