const PracticalExpForm = ({ data, handleChange, openForm }) => {
  return (
    <form>
      <h2>Practical Experience</h2>
      <label htmlFor="company">Company:</label>
      <input 
        id="company" 
        name="company" 
        value={data.company} 
        onChange={handleChange}  
      />

      <label htmlFor="position">Position:</label>
      <input 
        id="position" 
        name="position" 
        value={data.position} 
        onChange={handleChange}  
      />
      
      <label>Main Responsibilities:</label>
      <input name="resp1" value={data.resp1} onChange={handleChange} />
      <input name="resp2" value={data.resp2} onChange={handleChange} />
      <input name="resp3" value={data.resp3} onChange={handleChange} />

      <label htmlFor="date-from">Date From:</label>
      <input 
        id="date-from" 
        name="dateFrom" 
        type="date" 
        value={data.dateFrom} 
        onChange={handleChange} 
      />

      <label htmlFor="until">Until:</label>
      <input 
        id="until" 
        name="until" 
        type="date" 
        value={data.until} 
        onChange={handleChange} 
      />
      <button type="button" onClick={() => {openForm(null)}}>Hide Form</button>
    </form>
  );
};

export default PracticalExpForm;
