

interface ExperienceItem {
  role: string;
  company: string;
  dateRange: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Product Designer",
    company: "Cool Craft",
    dateRange: "Nov 2024 - Now",
  },
  {
    role: "Design Specialist",
    company: "Amazing Pixel",
    dateRange: "Nov 2022 - Nov 2024",
  },
  {
    role: "UX/UI Designer",
    company: "Design Studio",
    dateRange: "Nov 2021 - Nov 2022",
  },
  {
    role: "Web Designer",
    company: "Freelancer",
    dateRange: "Nov 2018 - Nov 2021",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column: badge + heading */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1 text-sm font-medium text-gray-700 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            EXPERIENCE
          </span>
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
            My Work
            <br />
            Experience
          </h2>
        </div>

        {/* Right column: experience list */}
        <div className="flex flex-col">
          {experiences.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 gap-1">
                <h3 className="text-2xl font-medium text-gray-900">
                  {item.role}
                </h3>
                <div className="text-right sm:text-right">
                  <p className="text-blue-700 font-medium">{item.company}</p>
                  <p className="text-blue-700">{item.dateRange}</p>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <hr className="border-gray-300" />
              )}
            </div>
          ))}
          <hr className="border-gray-300 mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Experience;