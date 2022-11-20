import React from "react";
import {
  simple,
  worldwide,
  customerService,
  payments,
  combinations,
} from "../../router/utillities-router";

import Button from "@mui/material/Button";
import StyledCard  from '../Card/Card.component'
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const BenefitsData = [
  {
    img: `${simple}`,
    headline: ". פשוט ומהיר -",
    paragraph: "חפשו, הזמינו, טוסו",
  },
  {
    img: `${worldwide}`,
    headline: "חופשות בכל העולם",
    paragraph: "הזמנה בכל רגע, בכל מקום ומכל מכשיר",
  },
  {
    img: `${customerService}`,
    headline: "שירות לקוחות בעברית",
    paragraph: "אנחנו כאן בשבילכם",
  },
  {
    img: `${payments}`,
    headline: "10 תשלומים ללא ריבית",
    paragraph: "לכל היעדים ולכל הטיסות",
  },
  {
    img: `${combinations}`,
    headline: "שילובי טיסות",
    paragraph: "לטוס עם חברה אחת ולחזור עם השנייה",
  },
];

export default function Benefits() {
  return (
    <>
      <div>Benefits</div>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {BenefitsData.map((obj,index) => 
              <Grid item xs={12} sm={4} md={2}>
              <StyledCard
                key={index}
                sx={{
                  height: "10vh",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    height: "5vh",
                    width: "5vh",
                    pt: "20%",
                  }}
                  image={obj.img}
                  alt="benefit"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {obj.headline}
                  </Typography>
                  <Typography>{obj.paragraph}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">more</Button>
                </CardActions>
              </StyledCard>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
