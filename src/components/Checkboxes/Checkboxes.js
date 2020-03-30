import React from "react";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorder from "@material-ui/core/SvgIcon/SvgIcon";
import { withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Favorite from "@material-ui/icons/Favorite";
import "./Checkboxes.css";

const Checkboxes = ({ checkedM, checkedW, checkedIt, handleChange }) => {
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  return (
    <div className="checkbox-section">
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedM}
              onChange={handleChange}
              name="checkedM"
              color="primary"
            />
          }
          label="М"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkedIt}
              onChange={handleChange}
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
              checked={checkedW}
              onChange={handleChange}
              name="checkedW"
            />
          }
          label="Ж"
        />
      </FormGroup>
    </div>
  );
};

export default Checkboxes;
