import { resources } from "./ResourcesData";

const FreeResources = () => {
  return (
    <div id="freeResources" className="rounded-2xl bg-white p-6 shadow-sm shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-500 ">

      <h2 className="mb-8 text-2xl font-bold sm:text-xl text-violet-900">
        Free Learning Resources
      </h2>

      <div>

        {resources.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex cursor-pointer items-start gap-3 rounded-xl p-4 transition hover:bg-violet-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                <Icon className="text-lg text-violet-700" />
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

export default FreeResources;