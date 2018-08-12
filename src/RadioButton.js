import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component{
  constructor(props){
    super(props);
  }
    handleOnClick(event){
      //event.preventDefault();
      const {onClick} = this.props;
      onClick(event);
    }

    render(){
      const {id, value, radioOptions} = this.props;
      return(
        <div>
          {radioOptions.map((radioOption, index) =>
            <div key={index}>
              <input type="radio" id={id} value={radioOption} checked={value === radioOption}
                  onClick={this.handleOnClick} /> <span>{radioOption}</span>
            </div>
          )}
        </div>
      );
    }
}

RadioButton.propTypes = {
  id: PropTypes.string,
  radioOptions: PropTypes.array,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.bool]),
}

export default RadioButton;
