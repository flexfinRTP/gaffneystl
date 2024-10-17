// components/Breadcrumbs.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Breadcrumbs as MUIBreadcrumbs, Typography, Container } from '@mui/material';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment);

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          <Typography color="inherit">Home</Typography>
        </Link>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return isLast ? (
            <Typography color="textPrimary" key={segment}>
              {segment}
            </Typography>
          ) : (
            <Link href={href} passHref key={segment}>
              <Typography color="inherit">{segment}</Typography>
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Container>
  );
};

export default Breadcrumbs;