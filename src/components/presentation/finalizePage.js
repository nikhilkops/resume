import React from "react";
import ResumePreview from "./resumePreview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { connect } from 'react-redux'

import { useFirestore } from 'react-redux-firebase';

function Finalize(props) {

    console.log(props.auth) ;
    const firestore = useFirestore();

  let educationSection = props.education;
  let contactSection = props.contact;
  let documentd = props.document;
  const saveToDatabase = async () => {
    console.log(props) ;
    let user = await firestore.collection('users').doc(props.auth.uid).get();
    user = user.data();
    console.log(user);
    let newObj = null;
    if (user["resumeIds"] != undefined) {
      newObj = {
        ...user["resumeIds"],
        [documentd.id]:{educationSection: educationSection,contactSection: contactSection,document: documentd}
      }
    }
    else {
      newObj = {
        [document.id]:{ educationSection:educationSection, contactSection: contactSection, document: document }}}
    await firestore.collection('users').doc(props.auth.uid).update({
      "resumeIds": newObj
    })
  };
  const downloadResume = () => {
    const input = document.getElementById("resumePreview");
    console.log(document);
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume.pdf");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container full finalize-page">
      <div className="funnel-section ">
        <div className="finalize-preview-card " id="resumePreview">
          <ResumePreview
            contactSection={contactSection}
            educationSection={educationSection}
            skinCd={props?.document?.skinCd}
          ></ResumePreview>
        </div>
        <div className="finalize-settings center">
          <div className=" download-resume resume-options">
            <p className="no-margin">Download Resume As PdF</p>
            <a style={{ cursor: "pointer" }} onClick={downloadResume}>
              download Resume
            </a>
          </div>
          <div className=" download-resume resume-options">
            <p className="no-margin">Save to Database</p>
            <a style={{ cursor: "pointer" }} onClick={saveToDatabase}>
              Save to Database
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
let mapStateToProps = (state) => {
    console.log(state);
    return {
      contact: state.contactReducer,
      education: state.educationReducer,
      document: state.documentReducer,
      auth: state.firebase.auth,
    }
  }
 
  // Use of this line    in finalize page
  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     documentActions: bindActionCreators(documentActions, dispatch)
  //   }
  // }

//   const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch({ type: actionTypes.UPDATE_SKIN, document: { skinCd,id } });
//     }
//   }
export default connect( mapStateToProps)(Finalize)  ;
 