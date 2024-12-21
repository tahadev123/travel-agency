"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TourDetailsBox from "../organisms/TourDetailsBox";

function TourDetails() {
  const query = usePathname();
  const id = query.split("/")[2];

  const [data, setData] = useState({});

  useEffect(() => {
    document.body.style.backgroundColor = "#f3f3f3";

    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:6500/tour/${id}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, [id]);

  return (
    <div className="page-content">
      <TourDetailsBox data={data} />
    </div>
  );
}

export default TourDetails;
