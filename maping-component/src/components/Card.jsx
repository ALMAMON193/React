
const Card = (props) => {
  const {name , email ,phone} = props
  return (
    <article className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-body">{email}</p>
      <p className="card-body">{phone}</p>
    </article> 
     
    
  )
}
export default Card