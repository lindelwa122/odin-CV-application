const EducationalExpForm = ({ data, handleChange, openForm }) => {
  return (
    <form>
      <h2>Educational Experience</h2>
      <label htmlFor="school">School:</label>
      <input 
        id="school" 
        name="school" 
        value={data.school} 
        onChange={handleChange} 
      />

      <label htmlFor="major">Title of Study (Major):</label>
      <input 
        id="major" 
        name="major" 
        value={data.major} 
        onChange={handleChange} 
      />

      <label htmlFor="date-of-study">Date of Study:</label>
      <input 
        id="date-of-study" 
        name="dateOfStudy" 
        type="date" 
        value={data.dateOfStudy} 
        onChange={handleChange}  
      />
      <button type="button" onClick={() => {openForm(null)}}>Hide Form</button>
    </form>
  );
};

export default EducationalExpForm;
