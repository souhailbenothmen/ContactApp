import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTracker } from "meteor/react-meteor-data";
import { ContactCollection } from "../../collections/contact";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import {
  useStylesModal,
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from "../common/style";
import { useDispatch, useSelector } from "react-redux";
import { itemSelect } from "../actions/allActions";
import { useHistory } from "react-router-dom";

export const ListContact = () => {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const classes = useStyles();
  const classesModal = useStylesModal();
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    console.log(currentUser.loggedIn);
    if (currentUser.loggedIn === true) {
      console.log("logged user");
    } else {
      history.push("/signin");
    }
  }, []);
  const { contacts } = useTracker(() => {
    Meteor.subscribe("contact");
    const contacts = ContactCollection.find({}).fetch();
    return {
      contacts,
    };
  });

  const handleOpen = (row) => {
    setContact(row);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const setItemSlelected = (value) => {
    const item = { name: value };
    dispatch(itemSelect(item));
  };
  return (
    <div>
      <TableContainer component={Paper} style={{ marginTop: "10%" }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nom</StyledTableCell>
              <StyledTableCell align="right">Prenom</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.nom}
                </StyledTableCell>
                <StyledTableCell align="right">{row.prenom}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    onClick={(e) => {
                      handleOpen(row);
                      setItemSlelected(row?._id);
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    details
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesModal.paper}>
            <h2 id="transition-modal-title">Contact details</h2>
            <p id="transition-modal-description">
              {contact?.nom}
              <br />
              {contact?.prenom}
              <br />
              {contact?.email}
              <br />
              {contact?.telephone}
              <br />
              {contact?.adresse}
              <br />
              {contact?.ville}
              <br />
              {contact?.province}
              <br />
              {contact?.codePostal}
              <br />
              {contact?.pays}
              <br />
              {contact?.commentaire}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
