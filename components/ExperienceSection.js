import React from 'react'
import { motion } from 'framer-motion'
import { Typography, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/material'

const experiences = [
  {
    title: "Founder & CEO",
    company: "Arcus",
    period: "Oct 2023 - Present",
    description: "Leading the development of one-click Bitcoin Loans and Native Bitcoin Lending Pools. Driving innovation in the Bitcoin lending space."
  },
  {
    title: "Co-Founder & CTO",
    company: "GluBear",
    period: "Jul 2023 - Present",
    description: "Developing pediatric CGM solutions with smart teddy bears and mobile apps. Revolutionizing diabetes care for children."
  },
  {
    title: "Product Owner",
    company: "Equifax",
    period: "Feb 2023 - Present",
    description: "Managing Verification Storefront for 500k+ users including Fortune 500 companies and government agencies. Driving product strategy and innovation."
  },
  {
    title: "Founder",
    company: "DataLink DAO",
    period: "Jul 2022 - Aug 2023",
    description: "Developed global verifiable identities through decentralized services, combining ZK + DiD + DAO technologies."
  },
  {
    title: "Product Owner",
    company: "Maritz Motivation",
    period: "May 2022 - Feb 2023",
    description: "Led product strategy for E-Commerce Rewards Application, implementing Agile SCRUM methodologies and improving time-to-market."
  },
  {
    title: "Product Owner",
    company: "Equifax",
    period: "Nov 2021 - May 2022",
    description: "Managed Verification API product backlog, led on-premise to GCP migration, achieving 80% cost savings."
  },
  {
    title: "Frontend Developer Intern",
    company: "Treehouse Strategy",
    period: "Sep 2021 - Nov 2021",
    description: "Developed company website using WordPress and worked on frontend React applications."
  },
  {
    title: "Flexo Press Operator",
    company: "FS Label Manufacturing, Co.",
    period: "Feb 2020 - Sep 2020",
    description: "Operated MA 2200 8 color and MA 4120 flexo presses, producing prime PS labels for various industries."
  },
  {
    title: "Production Manager",
    company: "Accelemark, Inc.",
    period: "Mar 2019 - Feb 2020",
    description: "Managed production, accounting, & logistics for digital and print marketing materials for Financial Advisors."
  },
  {
    title: "Flexo Press Operator",
    company: "Prime Package & Label Co., LLC",
    period: "May 2018 - Feb 2019",
    description: "Operated advanced Mark Andy 17\" P5 12 color press, producing high-quality prime P/S labels."
  },
  {
    title: "Board Press Operator",
    company: "Rx Systems, Inc.",
    period: "Nov 2017 - May 2018",
    description: "Operated Mark Andy P7 & Allied Gear board presses, specializing in complex printing techniques."
  },
  {
    title: "Demo Room Print Assistant",
    company: "Mark Andy Inc.",
    period: "Sep 2015 - Sep 2017",
    description: "Managed warehouse logistics and prepared press demos for potential clients from around the globe."
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <Typography variant="h2" className="text-4xl font-bold mb-12 text-center text-white">
        Professional Journey
      </Typography>
      <Typography variant="body1" className="text-xl mb-8 text-gray-300 max-w-4xl mx-auto text-center">
        From mastering the intricacies of printing presses to pioneering blockchain solutions, my career exemplifies adaptability and continuous learning. This diverse background uniquely positions me to bridge traditional industries with cutting-edge technology.
      </Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <motion.div
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TimelineContent>
                <Typography variant="h6" component="span" className="text-blue-400">
                  {exp.title}
                </Typography>
                <Typography className="text-gray-300">{exp.company}</Typography>
                <Typography className="text-gray-400">{exp.period}</Typography>
                <Typography className="text-gray-400">{exp.description}</Typography>
              </TimelineContent>
            </motion.div>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}