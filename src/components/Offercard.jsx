export const Offercard = () => {
  const offercardData = [
    [
      "Get Best Prices.png",
      "Get Best Prices",
      "Pay through our application and save thousands and get amazing rewards",
    ],
    [
      "Covid Safe.png",
      "Covid Safe",
      "Pay through our application and save thousands and get amazing rewards",
    ],
    [
      "Flexible Payment.png",
      "Flexible Payment",
      "Pay through our application and save thousands and get amazing rewards",
    ],
    [
      "Find The Best Near You.png",
      "Find The Best Near You",
      "Pay through our application and save thousands and get amazing rewards",
    ],
  ];
  return (
    <div className="offer-conatiner">
      {offercardData.map((item,index) => {
        return (
          <div className="credits" key={index}>
            <img src={require(`../images/${item[0]}`)} alt="one" />
            <h5>{item[1]}</h5>
            <p>{item[2]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Offercard;
