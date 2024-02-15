import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites, deleteRestaurant } from "../../State/Customers/Restaurant/restaurant.action";

export default function RestaurantCard({ item }) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
const handleDeleteRestaurant=()=>{
  dispatch(deleteRestaurant(item.id))
}

  return (
    <Card sx={{ maxWidth: 345, m: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#67E6DC", color: "white" }}
            aria-label="recipe"
          >
            PS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader="February 2023"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={item.imageUrl}
        alt="Paella dish"
      /> */}
      <img className="h-[17rem] w-full object-cover" src={item.imageUrl} alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="flex w-full  justify-between">
          <div>
            <IconButton onClick={handleDeleteRestaurant}  aria-label="add to favorites">
              <DeleteIcon />
            </IconButton>
          </div>
          <div>
          <Button
  onClick={() => navigate(`/admin/restaurants/${item.id}`)}
  sx={{ bgcolor: "#00FFFF", color: 'white' }} // Set bgcolor to cyan and text color to white
>
  Dashboard
</Button>

          </div>
        </div>
      </CardActions>
    </Card>
  );
}
