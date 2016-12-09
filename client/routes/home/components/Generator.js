import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { generatePassword, updatePassword } from '../actions';

class Generator extends React.Component {
  onTextFieldClick(e) {
    const textField = e.target;
    setTimeout(() => {
      textField.setSelectionRange(0, 9999);
    }, 0);
  }

  onTextFieldChange(e) {
    console.log('textField changed to ', e.target.value);
    this.props.updatePassword(e.target.value);
  }

  render() {
    return (
      <div>
        <p>correct horse battery staple</p>
        <p>{this.props.password}</p>
        <input ref="textfield" 
          type="text" 
          value={this.props.password}
          onFocus={this.onTextFieldClick.bind(this)} 
          onChange={this.onTextFieldChange.bind(this)}
          />
        <input type="button" disabled={this.props.isGenerating} value="Generate" onClick={this.props.generatePassword} />
      </div>
    );
  }
}

Generator.propTypes = {
  generatePassword: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  isGenerating: PropTypes.bool.isRequired
};

const mapState = (state) => ({
  password: state.generator.password,
  isGenerating: state.generator.isGenerating,
});

const mapDispatch = {
  generatePassword,
  updatePassword
};

export default connect(mapState, mapDispatch)(Generator);
