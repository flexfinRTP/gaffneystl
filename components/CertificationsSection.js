import { motion } from 'framer-motion'
import { Typography, Grid, Paper } from '@mui/material'

const certifications = [
  {
    title: "Google Cloud Digital Leader",
    issuer: "Coursera",
    date: "Mar 2022",
    credentialId: "TTY992KX9JEX"
  },
  {
    title: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    date: "Jan 2022",
    credentialId: "001310774"
  },
  // Add more certifications here
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <Typography variant="h2" className="text-4xl font-bold mb-12 text-center text-white">
        Certifications
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper className="p-6 h-full" elevation={3}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {cert.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Issued by: {cert.issuer}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {cert.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Credential ID: {cert.credentialId}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}