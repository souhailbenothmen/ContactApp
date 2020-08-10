import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const styleNavbar = {
  textDecoration: "none",
  color: "white",
  margin: "1%",
  fontSize: "16px",
  fontFamily: "Arial",
  fontWeight: "500",
  cursor: "pointer",
};
const styleBoxNavbar = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
};
const useStylesBanner = makeStyles((theme) => ({
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
const useStylesSignIn = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export {
  useStylesModal,
  StyledTableCell,
  StyledTableRow,
  useStyles,
  styleNavbar,
  styleBoxNavbar,
  useStylesBanner,
  useStylesSignIn,
};
