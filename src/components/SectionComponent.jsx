import CardComponent from "./CardComponent";

function SectionComponent({ title, datas = [], formatDate }) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-2 py-3.5 bg-transparent">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">{title}<span className="font-semibold text-sm bg-[#FFE3CC] text-[#FF7401] px-2.5 py-1 rounded-md">{datas.length}</span></h2>
      </div>

      {datas.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {datas.map((data) => (
            <CardComponent
              key={data.id}
              id={data.id}
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
