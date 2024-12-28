import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Tours from "./Tours";
import CircularIndeterminate from "./components/CircularIndeterminate";
import { Button } from "@material-tailwind/react";

const url = "https://www.course-api.com/react-tours-project";
export const RemoveItemConText = createContext();
const App = () => {
  const [tourData, setTourData] = useState([]);
  const [load, setLoad] = useState(true);

  const FetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setTourData(data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  function removeItem(id) {
    const newItem = tourData.filter((tour) => tour.id !== id);
    setTourData(newItem);
  }

  function resetItem() {
    setLoad(true);
    FetchData();
  }
  return (
    <main>
      <h1 className="text-2xl flex justify-center font-extrabold m-5">
        Our Tours
      </h1>
      {load ? (
        <CircularIndeterminate />
      ) : (
        <RemoveItemConText.Provider value={removeItem}>
          <Tours tourData={tourData} />
        </RemoveItemConText.Provider>
      )}
      {tourData.length === 0 && (
        <Button onClick={() => resetItem()} className="self-center">
          Reset
        </Button>
      )}
    </main>
  );
};
export default App;
