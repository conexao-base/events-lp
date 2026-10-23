import { stats } from "@/data/statistics";

export const Statistics = () => {
  return (
    <section id="statistics">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map(({ quantity, description }) => (
          <div key={description} className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {quantity}
            </h2>

            <p className="text-sm leading-5 text-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
