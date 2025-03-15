import PictureCircleSvg from "@/components/picture-circle-svg/picture-circle-svg";
import Layout from "./layout";
import WorkExperience, {
  WorkExperienceProps,
} from "@/components/workexperience/work-experience";
import experiences from "@/assets/work-experience";

// // import Image from "next/image";
// // import Link from "next/link";
// import classes from "./styles.module.css";
export default function Home() {
  return (
    <>
      <section className='my-8 flex flex-col items-center '>
        <PictureCircleSvg />
      </section>
      <section className='my-8'>
        <h2 className='text-2xl font-bold'>Work Summary</h2>
        {(experiences as WorkExperienceProps[]).map(
          (exp: WorkExperienceProps, index: number) => (
            <WorkExperience
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              summary={exp.summary}
              technologies={exp.technologies}
            />
          )
        )}
      </section>
      <section className='my-8'>
        <h2 className='text-2xl font-bold'>Contact Me</h2>
        <p>Email: kralev.dobromir@gmail.com</p>
        <p>Phone: +359887176281</p>
      </section>
    </>
  );
}
