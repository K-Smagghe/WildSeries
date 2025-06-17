import type { ReactNode } from "react";

type SerieType = {
  title: string;
  synopsis: string;
  artwork: string;
};

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: SerieType;
  onSubmit: (serie: SerieType) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const artwork = formData.get("artwork") as string;

        onSubmit({ title, synopsis, artwork });
      }}
    >
      <input type="text" name="title" defaultValue={defaultValue.title} />
      <textarea name="synopsis" defaultValue={defaultValue.synopsis} />
      <input type="text" name="artwork" defaultValue={defaultValue.artwork} />
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
