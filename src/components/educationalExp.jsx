import EducationalExpForm from "./educationalExpForm";

const EducationalExp = ({ data, openForm, handleChange }) => {
  return (
    <section className="educational-exp">
      <div className="header">
        <h2>Educational Experience</h2>
        <button onClick={() => {openForm('educationalExpForm')}}>Edit</button>
      </div>
      <div><span className="label">School: </span> {data.school}</div>
      <div><span className="label">Title of Study: </span> {data.major}</div>
      <div><span className="label">Date of Study: </span> {data.dateOfStudy}</div>
    </section>
  )
}

export default EducationalExp;