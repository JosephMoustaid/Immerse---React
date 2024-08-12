import React, { useState } from 'react';
import SuccessModal from '../components/SuccessModal';
import Overview from "../components/DashboardComponents/Overview";
import Enrollment from "../components/DashboardComponents/Enrollment";
import CommitmentInsight from "../components/DashboardComponents/CommitmentInsight";
import ContinentInsights from "../components/DashboardComponents/ContinentInsights";
import CountryInsights from "../components/DashboardComponents/CountryInsights";

const ParentComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  /* script for the success modal
  const handleShowModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  */

  /* Data to test enrollement 
   
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const dataPoints = [50, 100, 150, 200, 120, 76, 350];
*/

/*Data for comitement compoonnent 

const testData = {
  complete: 120,
  audit: 45,
  uncommitted: 35,
};
*/
const testData = {
  
    "North America": 35,
    "Asia": 34,
    "Europe": 22,
    "South America": 5,
    "Africa": 2,
    "Oceania": 2
  
};


const testData2 = {
  
  "USA": 35,
  "Canada": 34,
  "Morocco": 12,
  "France": 5,
  "Egypt": 2,
  "Maltas": 2,
  "Croatia": 5,
  "Netherlands": 2,
  "Congo": 5,
  "South Africa": 2,

};



  return (
    <div>
      <div style={{maxWidth:"500px", height:"auto"}}>
        <ContinentInsights data={testData} />
      </div>
      <div style={{maxWidth:"500px", height:"auto"}}>
        <CountryInsights data={testData2} />
      </div>

      {/*  
        Overview component test
        <Overview totalLearners={108554} countries={181} emergingEconomies={49458} />
      */}
      {/* 
      succes modal test
      <button onClick={handleShowModal} className="custom-button2">Create Course</button>
      <SuccessModal
        show={modalVisible}
        onClose={handleCloseModal}
        roomCode="ABC123"
      />
      */}

      {/*  enrollement
        <div style={{maxWidth:"500px", height:"auto"}}>
          <Enrollment labels={labels} dataPoints={dataPoints} />
        </div>
      */}

      {/*  Comitement 
        <div style={{maxWidth:"500px", height:"auto"}}>
        <CommitmentInsight complete={testData.complete} audit={testData.audit} uncommitted={ testData.uncommitted} />
      </div>
      */}
    </div>
  );
};

export default ParentComponent;
