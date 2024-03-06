import jhon from "../../assets/jhon.png";
import alina from "../../assets/elina.png";
import nick from "../../assets/nick.png";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      designation: "Founder",
      desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      img: jhon,
    },
    {
      id: 2,
      name: "Elina Gupta",
      designation: "Product",
      desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      img: alina,
    },
    {
      id: 3,
      name: "Nick Yadav",
      designation: "Product",
      desc: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      img: nick,
    },
  ];
  return (
    <>
      <div className="mt-5 ">
        <div className="bg-white md:py-6 py-6 px-6 rounded-lg mt-5">
          <div className="">
            <h1 className="text-2xl font-bold mt-1">Team</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
              arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id
              pretium quam. Facilisis purus convallis quam augue.
            </p>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-1 gap-5">
              {teamMembers.map((member) => (
                <div className="bg-[#E8F4FD] p-6 md:flex gap-6 rounded-lg">
                  <div className="md:w-1/2 flex flex-col justify-center items-center">
                    <div>
                      <img src={member.img} alt="" className="rounded-lg" />
                    </div>
                    <div className="mt-2">
                      <h1 className="font-bold">{member.name}</h1>
                      <p className="text-[#788F9B] text-sm text-center">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
