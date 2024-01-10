import PracticalExpForm from "./practicalExpForm";

const PracticalExp = ({ data, openForm }) => {
  return (
    <section className="practical-exp">
      <div className="header">
        <h2>Practical Experience</h2>
        <button onClick={() => {openForm("practicalExpForm")}}>Edit</button>
      </div>
      <div><span className="label">Company: </span> {data.company}</div>
      <div><span className="label">Position: </span> {data.position}</div>
      <div>
        <span className="label">Main Responsibilities: </span>
        <ul>
          <li>{data.resp1}</li>
          <li>{data.resp2}</li>
          <li>{data.resp3}</li>
        </ul>
      </div>
      <div><span className="label">Date from: </span> {data.dateFrom}</div>
      <div><span className="label">Until: </span> {data.until}</div>
    </section>
  )
}

export default PracticalExp;