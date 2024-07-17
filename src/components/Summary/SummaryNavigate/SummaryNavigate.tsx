'use client';
import MotionSlide from '../../MotionSlide';

const SummaryNavigate = () => {
  const scrollNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MotionSlide delay={0.2}>
      <ul className="flex flex-col sm:gap-y-3 items-center">
        <li>
          <button
            className="underline"
            onClick={() => scrollNavigate('description-Front-end-section')}>
            ABOUT ME
          </button>
        </li>
        <li>
          <button
            className="underline"
            onClick={() => scrollNavigate('skills-section')}>
            SKILLS
          </button>
        </li>
        <li>
          <button
            className="underline"
            onClick={() => scrollNavigate('experience-section')}>
            WORK EXPERIENCE
          </button>
        </li>
        <li>
          <button
            className="underline"
            onClick={() => scrollNavigate('project-section')}>
            PROJECTS
          </button>
        </li>
        <li>
          <button
            className="underline"
            onClick={() => scrollNavigate('blog-section')}>
            BLOG
          </button>
        </li>
      </ul>
    </MotionSlide>
  );
};

export default SummaryNavigate;
