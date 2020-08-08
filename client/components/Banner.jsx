import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "fixed",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "70%",
    marginLeft: theme.spacing(-1),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  bannerContent: {
    position: "relative",
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(20),
      paddingRight: 0,
    },
  },
}));

export default function Banner(props) {
  const classes = useStyles();
  const { bannerProp } = props;

  return (
    <Paper
      className={classes.banner}
      style={{ backgroundImage: `url(${bannerProp.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={bannerProp.image}
          alt={bannerProp.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.bannerContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {bannerProp.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {bannerProp.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {bannerProp.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Banner.propTypes = {
  bannerProp: PropTypes.object,
};
