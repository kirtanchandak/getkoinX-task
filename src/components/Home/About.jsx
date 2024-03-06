import calProfit from "../../assets/calProfit.png";
import calTax from "../../assets/calTax.png";

function About() {
  return (
    <>
      <div className="mt-5 ">
        <div className="bg-white md:py-6 py-6 px-6 rounded-lg mt-5">
          <div className="flex">
            <h1 className="text-2xl font-bold mt-1">About Bitcoin</h1>
          </div>
          <div className="mt-6">
            <div className="">
              <h1 className="text-lg font-bold mt-1">What is Bitcoin?</h1>
              <p className="font-medium">
                Bitcoin’s price today is US$16,951.82, with a 24-hour trading
                volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
                currently -7.70% from its 7-day all-time high of $18,366.66, and
                3.40% from its 7-day all-time low of $16,394.75. BTC has a
                circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
              </p>
            </div>
            <div className="mt-6">
              <h1 className="text-lg font-bold mt-1">
                Lorem ipsum dolor sit amet
              </h1>
              <div className="flex flex-col gap-5 mt-4 font-medium">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                  lobortis tristique pharetra. Diam id et lectus urna et tellus
                  aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                  ut sed. Quam scelerisque fermentum sapien morbi sodales odio
                  sed rhoncus. Ultricies urna volutpat pendisse enim facilisi
                  diam ut sed. Quam scelerisque fermentum sapien morbi sodales
                  odio sed rhoncus.
                </p>
                <p>
                  Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                  Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                  adipiscing cursus felis pellentesque interdum. Odio cursus
                  phasellus velit in senectus enim dui. Turpis tristique
                  placerat interdum sed volutpat. Id imperdiet magna eget eros
                  donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
                  turpis a. Integer dignissim augue viverra nulla et quis
                  lobortis phasellus. Integer pellentesque enim convallis
                  ultricies at.
                </p>
                <p>
                  Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                  aliquam massa vel convallis duis ac. Mi adipiscing semper
                  scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                  iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                  tincidunt volutpat in eget. Ullamcorper dui
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-lg font-bold mt-1">
                Already Holding Bitcoin?
              </h1>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div class="bg-gradient-to-br from-green-400 to-blue-600 flex p-5 rounded-lg gap-6">
                  <img src={calProfit} alt="" className="object-contain" />
                  <div>
                    <h1 className="text-white md:text-xl font-bold">
                      Calculate your <br /> Profits
                    </h1>
                    <button className="bg-white px-4 py-1 rounded-lg mt-3 font-bold">
                      Check Now
                    </button>
                  </div>
                </div>
                <div class="bg-gradient-to-br from-orange-400 to-red-600 flex p-5 rounded-lg gap-6">
                  <img src={calTax} alt="" srcset="" />
                  <div>
                    <h1 className="text-white text-xl font-bold">
                      Calculate your tax <br /> liability
                    </h1>
                    <button className="bg-white px-4 py-1 rounded-lg mt-3 font-bold">
                      Check Now
                    </button>
                  </div>
                </div>
              </div>
              <p className="font-medium mt-4">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
