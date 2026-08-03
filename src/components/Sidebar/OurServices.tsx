import { services } from "./ServicesData";

const OurServices = () => {
  return (
    <div id="services" className="rounded-2xl bg-white p-4 sm:p-6 shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-500">

      <h2 className="mb-5 text-2xl font-bold text-violet-900 sm:text-xl">
        Our Services
      </h2>

      <div className="space-y-5">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-violet-50 cursor-pointer"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 sm:h-12 sm:w-12">
                <Icon className="text-violet-700 text-lg" />
              </div>

              <div>
                <h3 className="text-sm font-semibold sm:text-base">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-500 sm:text-sm">
                  {service.subtitle}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default OurServices;