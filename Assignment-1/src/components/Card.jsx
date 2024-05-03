export const CardUpcoming = (props) => {
  const { Name, number, Date, dateOfWeek, desc, numbersOfVideo, preeRecord } =
    props;
  return (
    <div>
      <h3>{Name}</h3>
      <h2>{number}</h2>
      <p>{Date}</p>
      <p>{dateOfWeek}</p>
      <h3>{desc}</h3>
      <h4>{numbersOfVideo}</h4>
      <h4>{preeRecord}</h4>
    </div>
  );
};
export const CardHeader = () => {
  return (
    <div className="card">
      <div className="card-body">
        <button className="btn btn-light">Module</button>
        <button className="btn btn-light">Assignment</button>
        <button className="btn btn-light">Resource</button>
        <button className="btn btn-light">Critificate</button>
      </div>
    </div>
  );
};

export const Product = () => {
  return (
    <article className="product">
      <img src="" alt="" />
      <div className="product__details">
        <h4 className="product__title">product title</h4>
        <p>Price: $ product price</p>
        <p>Rating: product rating rate/5</p>
        <p className="product__desc">Description: product.description</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};
