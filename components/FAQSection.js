// components/FAQSection.js
import { useState } from 'react';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What is Web3 and how can it benefit my business?",
    answer: "Web3 refers to the next generation of the internet, built on decentralized technologies like blockchain. It can benefit your business by enhancing security, transparency, and efficiency while opening up new opportunities for innovation and customer engagement."
  },
  {
    question: "How long does a typical blockchain integration project take?",
    answer: "The duration of a blockchain integration project can vary depending on its complexity and scope. Typically, it can range from a few months for simpler implementations to a year or more for large-scale enterprise solutions. We work closely with you to establish a realistic timeline based on your specific needs."
  },
  {
    question: "What industries can benefit from blockchain technology?",
    answer: "Blockchain technology has applications across various industries, including finance, healthcare, supply chain management, real estate, entertainment, and more. Any industry that can benefit from increased transparency, security, and efficiency can potentially leverage blockchain technology."
  },
  {
    question: "How do you ensure the security of blockchain implementations?",
    answer: "We prioritize security in all our blockchain implementations by following best practices in smart contract development, conducting thorough audits, and implementing robust security measures. We also stay up-to-date with the latest security trends and continuously monitor and update our solutions to address potential vulnerabilities."
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}