import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, CardActionArea } from "@mui/material";
import { gray } from "../../routes/Theme";

export default function HouseListingsCard({
  views,
  image,
  price,
  numberOfRooms,
  numberOfBathrooms,
  address,
  state,
  zipcode,
}) {
  return (
    <Card sx={{ maxWidth: 500, boxShadow: 2 }}>
      <CardHeader
        avatar={<VisibilityIcon />}
        title={
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={14}
            color={gray[500]}
            component="div">
            {views} Views
          </Typography>
        }
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Property image"
        />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ flex: "1 1 auto" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"left"}>
              &#8358; {price} &bull; {numberOfRooms} Rooms &bull;{" "}
              {numberOfBathrooms} Bathrooms
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"left"}>
              {address}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"left"}>
              {state} {zipcode}
            </Typography>
          </CardContent>
          <CardActions sx={{ alignSelf: "flex-start" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Box>
      </CardActionArea>
    </Card>
  );
}

HouseListingsCard.propTypes = {
  views: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  numberOfRooms: PropTypes.string.isRequired,
  numberOfBathrooms: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
};
