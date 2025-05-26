// components/TripSection.jsx
import CardComponent from "./CardComponent";

function SectionComponent({ title, datas = [], formatDate }) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-2 py-3.5 bg-transparent">
        <h2 className="font-semibold">{title}</h2>
        <span className="bg-[#d6efff] text-[#077cff] py-1 px-3 rounded-md text-sm font-medium">
          {datas.length}
        </span>
      </div>

      {datas.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {datas.map((data) => (
            <CardComponent
              key={data.id}
              title={data.title}
              startDate={formatDate(data.start_date)}
              endDate={formatDate(data.end_date)}
              initials={"AA"}
            />
          ))}
        </ul>
      ) : (
        <p>Aucune donnée...</p>
      )}
    </div>
  );
}

export default SectionComponent;
