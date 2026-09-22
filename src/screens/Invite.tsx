import Background from "../components/Background";
import FlowersShell from "../components/FlowersShell";
import MainSection from "../components/MainSection";

function Invite() {
  return (
    <FlowersShell>
      <Background>
        <MainSection name="Convite">
          <div className="mb-4">
            <p className="text-shadow-lg font-bellota text-center text-lg">
              É com grande alegria que convidamos você para celebrar a nossa
              união!
            </p>

            <div className="m-3">
              <p className="text-shadow-lg font-oleo-script text-[#4B6249] text-6xl text-center">
                07.11.2026
              </p>
              <p className="text-shadow-lg font-oleo-script text-[#6D996A] text-3xl text-center">
                - ás 17h30 -
              </p>
            </div>

            <p className="text-shadow-lg fon-bellota text-center text-lg">
              Assermuto, Av. Nossa Senhora de Fátima, Jardin Anápolis -
              Toledo/PR.
            </p>

            <div className="felx flex-col shadow-xl/16 ml-1 mr-1 mt-5 mb-5 flex bg-[#6D996A] place-self-stretch h-40/100 rounded-3xl">
              <p className=" text-3xl m-1 text-white text-shadow-lg font-oleo-script text-center">
                Confirmação de Presença
              </p>
              <div className="flex flex-col items-center bg-[#DDF9E7] place-self-stretch h-full rounded-3xl p-4">
                <p className="text-shadow-lg font-bellota text-center text-lg">
                  Por favor confirme sua presença até:
                </p>
                <p className="m-1 text-shadow-lg font-oleo-script text-[#4B6249] text-4xl text-center">
                  05.10.2026
                </p>

                <div className="bg-[#82D89D] shadow-xl/8 rounded-4xl w-74/100 mb-1.5">
                  <p className="text-shadow-lg font-bellota text-center text-lg text-white">
                    Dai: (44) 9-9713-6212
                  </p>
                </div>

                <div className="bg-[#518C64] shadow-xl/8 rounded-4xl w-74/100">
                  <p className="text-shadow-lg font-bellota text-center text-lg text-white">
                    Carol: (45) 9-9994-2608
                  </p>
                </div>
              </div>
            </div>

            <p className="text-shadow-lg font-bellota text-center text-lg">
              {
                "Esperamos você para celebrarmos juntos esse dia tão especial <3"
              }
            </p>
          </div>
        </MainSection>
      </Background>
    </FlowersShell>
  );
}

export default Invite;
