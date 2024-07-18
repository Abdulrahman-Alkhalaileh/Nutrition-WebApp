import * as React from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export interface CustomCardProps extends CardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  description,
  ...props
}) => {
  return (
    <Card {...props} sx={{ maxWidth: 400,borderRadius: 2, ...props.sx }}>
        <CardMedia component="img" height="200" image={imageUrl} alt={title} />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" minHeight={60} fontWeight={600} className="cardTitle">
            {title}
          </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: description as any }}
              className="cardContent"
              style={{fontSize: 16,opacity: 0.8}}
            ></div>
        </CardContent>
      <CardActions sx={{display:'flex', justifyContent: 'center',px:2,pb:2}}>
        <Button size="small" variant="outlined" fullWidth sx={{maxWidth: 150}} color="error">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
