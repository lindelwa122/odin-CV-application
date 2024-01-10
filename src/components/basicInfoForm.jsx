const BasicInfoForm = ({ data, handleChange, openForm }) => {
  return (
    <form>
      <h2>Basic Info</h2>
      <label htmlFor="full-name">Full Name:</label>
      <input 
        id="full-name" 
        name="fullName" 
        value={data.fullName} 
        onChange={handleChange} 
      />

      <label htmlFor="email">Email:</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        value={data.email} 
        onChange={handleChange} 
      />

      <label htmlFor="phone-number">Phone Number:</label>
      <input 
        id="phone-number" 
        name="phoneNumber" 
        type="tel" 
        value={data.phoneNumber} 
        onChange={handleChange} 
      />
      <button type="button" onClick={() => {openForm(null)}}>Hide Form</button>
    </form>
  )
}

export default BasicInfoForm;