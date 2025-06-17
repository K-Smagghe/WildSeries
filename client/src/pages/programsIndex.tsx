import { useEffect, useState } from "react";

type serieType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: string;
};

const ProgramIndex = () => {
  const [programs, setPrograms] = useState([] as serieType[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: serieType[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <div className="programs">
      <h1>Liste des séries</h1>
      <ul className="list">
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.country}</p>
            <p>{program.year}</p>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramIndex;
