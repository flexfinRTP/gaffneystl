import { useState } from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material/'
import styles from '../styles/Home.module.css'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className={styles.card} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.mediaContainer}>
        {isHovered ? (
          <video 
            src={project.video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={styles.media}
          />
        ) : (
          <img src={project.image} alt={project.title} className={styles.media} />
        )}
      </div>
      <CardContent>
        <Typography variant="h5" component="h3" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.description}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.button}
        >
          View Project
        </Button>
      </CardContent>
    </Card>
  )
}