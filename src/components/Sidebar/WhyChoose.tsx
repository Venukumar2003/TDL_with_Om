import { whyChoose } from "./WhyChooseData";

const WhyChoose = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold text-violet-900">
        Why Choose TDL with Om?
      </h2>

      <div className="space-y-5">

        {whyChoose.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-violet-50 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                <Icon className="text-violet-700 text-lg" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
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