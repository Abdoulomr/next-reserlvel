import FieldSearch from "@/components/layers/FieldSearch";
export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center bg-[url('/pitch.jpg')] bg-cover bg-no-repeat">
      <h1 className="text-slate-300 text-xl w-fit mx-auto sm:text-3xl uppercase font-bold mt-5">
        Trouvez votre espace de jeu
      </h1>
      <div className="flex flex-wrap h-fit w-fit justify-start gap-2">
        <FieldSearch />
      </div>
    </div>
  );
}
