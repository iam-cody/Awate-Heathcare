import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const team = [
  { name: "Dr. Vikram Patel", role: "Chief Medical Advisor", specialty: "Cardiology", img: doctor1 },
  { name: "Dr. Meera Nair", role: "Senior Consultant", specialty: "Oncology", img: doctor2 },
  { name: "Dr. Arjun Reddy", role: "Orthopedic Specialist", specialty: "Joint Replacement", img: doctor3 },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-card">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Meet Our Experienced Medical Team
          </h2>
          <p className="text-muted-foreground">
            Our advisory board includes top specialists from India's best hospitals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-5 overflow-hidden rounded-2xl shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 gradient-healthcare opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-bold font-display">{member.name}</h3>
              <p className="text-secondary text-sm font-medium">{member.specialty}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
