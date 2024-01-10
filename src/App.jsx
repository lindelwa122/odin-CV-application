import { useState } from 'react';
import './App.css';
import BasicInfo from './components/basicInfo';
import EducationalExp from './components/educationalExp';
import PracticalExp from './components/practicalExp';
import BasicInfoForm from './components/basicInfoForm';
import EducationalExpForm from './components/educationalExpForm';
import PracticalExpForm from './components/practicalExpForm';

const App = () => {
  const [ CVData, setCVData ] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    school: '',
    major: '',
    dateOfStudy: '',
    company: '',
    position: '',
    resp1: '',
    resp2: '',
    resp3: '',
    dateFrom: '',
    until: '',
  });

  const handleChange = (e) => {
    setCVData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const [ form, setForm ] = useState(null);

  let formDisplayed = null;
  if (form === 'basicInfoForm') {
    formDisplayed = <BasicInfoForm data={CVData} openForm={setForm} handleChange={handleChange} />
  } else if (form === 'educationalExpForm') {
    formDisplayed = <EducationalExpForm data={CVData} openForm={setForm} handleChange={handleChange} />
  } else if (form === 'practicalExpForm') {
    formDisplayed = <PracticalExpForm data={CVData} openForm={setForm} handleChange={handleChange} />
  }

  console.log("a rerender happened")

  return (
    <>
      <div className='sidebar'>{formDisplayed}</div>
      <main>
        <BasicInfo data={CVData} openForm={setForm} handleChange={handleChange} />
        <EducationalExp data={CVData} openForm={setForm} handleChange={handleChange} />
        <PracticalExp data={CVData} openForm={setForm} handleChange={handleChange} />
      </main>
    </>
  )
}

export default App;