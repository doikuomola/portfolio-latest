'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <React.Fragment key={skill}>
            <Skill skill={skill} index={index} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}

const fadeInVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type SkillProps = {
  skill: string;
  index: number;
};

function Skill({ skill, index }: SkillProps) {
  return (
    <motion.li
      className="bg-white border border-black/[0.1] py-3 px-5 rounded-lg dark:bg-white/10 dark:text-white/80"
      variants={fadeInVariant}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {skill}
    </motion.li>
  );
}
