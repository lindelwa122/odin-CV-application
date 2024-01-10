import BasicInfoForm from "./basicInfoForm";

const BasicInfo = ({ data, openForm }) => {
  return (
    <section className="basic-info">
      <div className="header">
        <h2>Basic Info</h2>
        <button onClick={() => {openForm('basicInfoForm')}}>Edit</button>
      </div>
      <div><span className="label">Full Name: </span> {data.fullName}</div>
      <div><span className="label">Email: </span> {data.email}</div>
      <div><span className="label">Phone Number: </span> {data.phoneNumber}</div>
    </section>
  )
}

export default BasicInfo;