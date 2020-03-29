import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FormGroup from "@material-ui/core/FormGroup";
import contactsData from "../../data/contactsData";
import Contact from "../Contact/Contact";
import "./Contacts.css";

class Contacts extends Component {
  state = {
    contacts: contactsData,
    searchValue: "",
    filteredContacts: contactsData,
    checkedW: false,
    checkedM: false,
    checkedIt: false,
  };

  inputChangeHandler = (e) => {
    const contactsCopy = [...this.state.contacts];
    const currentValue = e.target.value.toLowerCase();
    let filteredContacts = contactsCopy.filter(
      (item) =>
        item.lastName.toLowerCase().includes(currentValue) ||
        item.firstName.toLowerCase().includes(currentValue) ||
        item.phone.toLowerCase().includes(currentValue)
    );
    this.setState({
      searchValue: currentValue,
      filteredContacts,
    });
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.checked,
    });
  };
//TODO: доделать чертову сортировку по полу
  genderFilterHandler = () => {
    const contactsCopy = [...this.state.contacts];
    const manGender = this.state.checkedM;
    const womenGender = this.state.checkedW;
    const itGender = this.state.checkedIt;
    console.log(manGender, womenGender, itGender)
    const mans = contactsCopy.filter((item) => {
      return manGender && item.gender === "male";
    });
    const women = contactsCopy.filter((item) => {
      return womenGender && item.gender === "female";
    });
    const it = contactsCopy.filter((item) => {
      return itGender && item.gender === undefined;
    });
    const result = [...mans, ...women, ...it];
    console.log(result)
    return result;
  };

  render() {
    this.genderFilterHandler(); //тест результатов фильтрации - тут все работает
    const GreenCheckbox = withStyles({
      root: {
        color: green[400],
        "&$checked": {
          color: green[600],
        },
      },
      checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const contacts = this.state.filteredContacts.map((contact, index) => {
      const telRef = `tel:${contact.phone}`;
      return <Contact key={index} {...contact} telRef={telRef} />;
    });

    return (
      <React.Fragment>
        <TextField
          onChange={(event) => this.inputChangeHandler(event)}
          id="filled-basic"
          label="Введите данные для поиска"
          variant="filled"
        />
        <div className="checkbox-section">
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedM}
                  onChange={this.handleChange}
                  name="checkedM"
                  color="primary"
                />
              }
              label="М"
            />

            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={this.state.checkedIt}
                  onChange={this.handleChange}
                  name="checkedIt"
                />
              }
              label="Не указан"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={this.state.checkedW}
                  onChange={this.handleChange}
                  name="checkedW"
                />
              }
              label="Ж"
            />
          </FormGroup>
        </div>

        <div className="contacts">
          {this.state.filteredContacts.length ? (
            <ul className="contacts-list">{contacts}</ul>
          ) : (
            <h2 className="search-failed">Нет результатов поиска</h2>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
