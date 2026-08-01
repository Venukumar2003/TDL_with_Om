import { resources } from "./ResourcesData";

const FreeResources = () => {
  return (
    <div id="freeResources" className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold text-violet-900">
        Free Learning Resources
      </h2>

      <div>

        {resources.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex cursor-pointer items-center gap-4 rounded-xl p-4 transition hover:bg-violet-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100">
                <Icon className="text-lg text-violet-700" />
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

export default FreeResources;