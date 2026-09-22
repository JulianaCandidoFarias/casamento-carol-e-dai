import Background from "../components/Background";
import FlowersShell from "../components/FlowersShell";
import MainSection from "../components/MainSection";

function DogDonate() {
  return (
    <FlowersShell>
      <Background>
        <MainSection name="Doação De Ração">
          <div className="mb-4">
            <p className="text-shadow-sm font-oleo-script text-[#6D996A] text-4xl text-center">
              Um pedido com Amor
            </p>
          </div>

          <div className="bg-white rounded-3xl flex flex-col place-self-stretch shadow-xl/20 p-3">
            <p className="text-shadow-lg font-bellota text-center text-lg mb-2">
              Se puder, traga 1kg de ração para cachorro 🐶
            </p>
            <p className="text-shadow-lg font-bellota text-center text-lg">
              Vamos doar tudo para pessoas que cuidam com carinho de caẽs
              abandonados
            </p>
          </div>

          <div className="flex flex-col items-center mt-5 mb-5">
            <img className="w-90/100" src="src/assets/dog/doguinhos.png" />
          </div>

          <p className="text-shadow-lg font-bellota text-center text-xl mb-2 text-emerald-800">
            Juntos, vamos espalhar ainda mais amor nesse dia tão especial!
          </p>
        </MainSection>
      </Background>
    </FlowersShell>
  );
}

export default DogDonate;
