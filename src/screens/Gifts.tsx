import Background from "../components/Background";
import FlowersShell from "../components/FlowersShell";
import MainSection from "../components/MainSection";
import giftsData from "../data/gifts.json";

type Gift = {
  title: string;
  image: string;
  url: string;
};

// Tipando o array importado do JSON
const gifts: Gift[] = giftsData;

function Gifts() {
  return (
    <FlowersShell>
      <Background>
        <MainSection name="Sujestões de Presentes">
          <div className="bg-white p-2 rounded-2xl shadow-xl/20 mb-5">
            <p className="mb-2 text-shadow-lg font-bellota text-center text-lg">
              Á quem desejar fazer o envio direto as noivas: Rua Eduardo Romero,
              70, jardim Anápolis Cep: 85905-182
            </p>
          </div>

          <div className="bg-white p-2 rounded-2xl shadow-xl/20 mb-5">
            <p className="mb-2 text-shadow-lg font-bellota text-center text-lg text-red-600">
              Após a compra, envie o numero do item no whatsApp: (44)
              9-9829-5687
            </p>
          </div>
          {gifts.map((gift, index) => (
            <div key={index}>
              <a href={gift.url}>
                <div className="flex flex-col items-center mb-5 p-5 bg-white rounded-2xl shadow-xl/20">
                  <img className="rounded-md" src={gift.image} />
                  <p className="mt-2 lowercase text-shadow-lg font-bellota text-center text-lg">
                    <div className="m-1 bg-emerald-600 p-2 rounded-4xl">
                      <p className="lowercase text-white text-shadow-lg font-oleo-script text-2xl">
                        {index}
                      </p>
                    </div>
                    {gift.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </MainSection>
      </Background>
    </FlowersShell>
  );
}

export default Gifts;
