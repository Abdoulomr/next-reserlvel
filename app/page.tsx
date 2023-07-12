import Test from "@/components/Test";
import FieldSearch from "@/components/layers/FieldSearch";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center bg-[url('/pitch.jpg')] bg-cover bg-no-repeat">
        <h1 className="text-slate-100 max-w-lg text-lg w-fit mx-auto sm:text-2xl uppercase font-bold mt-5">
          Trouvez vos meilleurs espaces de jeu
        </h1>
        <div className="flex flex-wrap h-fit w-fit justify-start gap-2">
          <FieldSearch />
        </div>
      </div>
      <Test />
    </>
  );
}
