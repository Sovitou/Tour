import { CardDefault } from "./components/CardDefault";

function Tours({ tourData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tourData.map((tour) => {
        return <CardDefault key={tour.id} {...tour} />;
      })}
    </div>
  );
}

export default Tours;
