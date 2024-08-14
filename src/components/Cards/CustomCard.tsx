import * as React from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";

export interface CustomCardProps extends CardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  description,
  actions,
  ...props
}) => {
  return (
    <Card {...props} sx={{ maxWidth: 400, borderRadius: 3, ...props.sx }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ bgcolor: "#ededed" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          minHeight={60}
          fontWeight={600}
          className="cardTitle"
          textTransform='capitalize'
          textAlign='center'
        >
          {title}
        </Typography>
        <div
          dangerouslySetInnerHTML={{ __html: description as any }}
          className="cardContent"
          style={{ fontSize: 16, opacity: 0.8 }}
        ></div>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center"}}
      >
        {actions}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
