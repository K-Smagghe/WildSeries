import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProgramDeleteForm from "../components/ProgramDeleteForm";

type SerieType = {
  id: number;
  title: string;
  synopsis: string;
  artwork: string;
};

function ProgramDetail() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null as null | SerieType);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: SerieType) => {
        setSerie(data);
      });
  }, [id]);

  return (
    serie && (
      <div>
        <h1>{serie.title}</h1>
        <img src={serie.artwork} alt={serie.artwork} />
        <p>Synopsis : {serie.synopsis}</p>
        <Link to={`/programs/${id}/edit`}>Modifier</Link>
        <ProgramDeleteForm id={serie.id}>Supprimer</ProgramDeleteForm>
      </div>
    )
  );
}

export default ProgramDetail;
