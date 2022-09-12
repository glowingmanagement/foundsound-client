import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ArtistCard = ({ details }) => {
  return (
    <Card sx={{ width: 345, margin: 5 }}>
      <CardHeader
        //DO WE NEED THIS AVATAR IF THERE IS A PICTURE OF THE ARTIST BELOW?
        // avatar={
        //   <Avatar sx={{ bgcolor: "#4A69FF" }} aria-label="recipe">
        //     A
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={
          <Typography
            variant="h5"
            color="#0A0A0A"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {details.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={details.imageUrl}
        alt={details.name}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="#0A0A0A"
          sx={{ textAlign: "center" }}
        >
          {details.description}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        href="#contained-buttons"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        View profile
      </Button>
      <CardActions
        disableSpacing
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};

export default ArtistCard;
