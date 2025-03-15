export interface WorkExperienceProps {
  title: string;
  company: string;
  date: string;
  summary: string;
  technologies: string[];
}
export default function WorkExperience({
  title,
  company,
  date,
  summary,
  technologies,
}: WorkExperienceProps) {
  return (
    <div className='mb-8 p-4 border rounded-lg shadow-lg'>
      <h3 className='text-xl font-bold text-blue-900'>{title}</h3>
      <p className='text-gray-600'>
        {company} | {date}
      </p>
      <p className='mt-2'>{summary}</p>
      <p className='mt-2 text-gray-600'>
        Technologies: {technologies.join(", ")}
      </p>
    </div>
  );
}
