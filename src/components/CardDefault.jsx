import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { RemoveItemConText } from "../App";
import { useContext, useState } from "react";

function ReadMore({ text, maxLength = 200 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-gray-800">
      {/* Show truncated or full text based on state */}
      <p>{isExpanded ? text : `${text.slice(0, maxLength)}...`}</p>
      {/* Toggle button */}
      {text.length > maxLength && (
        <button
          className="text-blue-500 underline mt-2"
          onClick={toggleReadMore}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export function CardDefault({ id, name, image, price, info }) {
  const removeItem = useContext(RemoveItemConText);
  return (
    <Card className="mt-6 w-96" key={id}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          <ReadMore text={info} maxLength={200} />
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between ">
        <Button onClick={() => removeItem(id)}>{" Not Interested"}</Button>
        <Button className="bg-red-700">{`${price}$`}</Button>
      </CardFooter>
    </Card>
  );
}
