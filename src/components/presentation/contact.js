import { useHistory } from "react-router-dom";
import { useState } from "react";

import * as actionTypes from "../../redux/actionTypes";
import {fieldCd} from './../../constants/typeCodes'
import { connect } from "react-redux";
import ResumePreview from "./resumePreview";

function Contact(props) {

 
   const [contact, setContact] = useState(props.contact);
  
  const onchange=(event)=>{
    var key =event.target.name;
    var val =event.target.value;
    // this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
    setContact({...contact,[key]:val})
}
let history = useHistory() ;
  const onSubmit = async () => {
    props.addContact(contact);
    history.push('/education');
  };

  const getFieldData=(key)=>{
    if(contact && contact[key]){
      return contact[key]
    }
    return "";
}
  return (
    <div className="container med contact">
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Personal Details</h2>
          <div className="form-section">
            <div className="input-group">
              <label>First Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.FirstName}
                  value={getFieldData(fieldCd.FirstName)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.LastName}
                  value={getFieldData(fieldCd.LastName)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group full">
              <label>Professional Summary</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ProfSummary}
                  value={getFieldData(fieldCd.ProfSummary)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Email</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Email}
                  value={getFieldData(fieldCd.Email)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Phone</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Phone}
                  value={getFieldData(fieldCd.Phone)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Profession</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Profession}
                  value={getFieldData(fieldCd.Profession)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Street</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Street}
                  value={getFieldData(fieldCd.Street)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>City</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.City}
                  value={getFieldData(fieldCd.City)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>State</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.State}
                  value={getFieldData(fieldCd.State)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group">
              <label>Country</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.Country}
                  value={getFieldData(fieldCd.Country)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="input-group">
              <label>Pin Code</label>
              <div className="effect">
                <input
                  type="text"
                  name={fieldCd.ZipCode}
                  value={getFieldData(fieldCd.ZipCode)}
                  onChange={onchange}
                />
                <span></span>
              </div>
              <div className="error"></div>
            </div>
            <div className="form-buttons">
              <button
                onClick={onSubmit}
                className="btn hvr-float-shadow"
                type="button"
              >
                Next
              </button>
              {/* <NavLink to="/getting-started" className="center">
                Back
              </NavLink> */}
            </div>
          </div>
        </div>

        <div className="preview-card">
          <ResumePreview
            contactSection={contact}
            skinCd={props.document.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state) ;
  return {
    document: state.documentReducer, //contains skin and id
    contact:state.contactReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch({ type: actionTypes.ADD_CONTACT, contact: contact });
    },
    updateContact: (contact) => {
        dispatch({ type: actionTypes.UPDATE_CONTACT, contact: contact });
        
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
