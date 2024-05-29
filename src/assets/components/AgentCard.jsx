import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const AgentCard = ({ agent }) => {
  return (
    <Card sx={{ display: "flex", minWidth: 345 }}>
      <CardActionArea sx={{ display: "flex", alignItems: "stretch" }}>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={agent.image}
          alt={agent.name}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <Typography gutterBottom variant="h5" component="div">
            {agent.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {agent.company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {agent.phone}
          </Typography>
          <Typography>
            <b>{agent.totalSales}</b> Total Sales
          </Typography>
          <Typography>
            Price Range: &#8358;{agent.priceRange.min} - &#8358;
            {agent.priceRange.max}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

AgentCard.propTypes = {
  agent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    totalSales: PropTypes.number.isRequired,
    priceRange: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default AgentCard;
