
export const Recommendedcards = ({item}) => {
    const {name,dis}=item;
  return (
    <div className="recommend-card">
        <img className="card-img" src={require(`../images/${name}.png`)} alt="" />
        <h3 className="recommend-card-topic">{name}</h3>
        <p className="recommend-card-dis">{dis}</p>
        <div className="footer-section">
            <div className="icon-section">
                <div className="img-con">
                    <img src={require("../images/Group 19.png")} alt="" />
                    <img src={require("../images/Group 18.png")} alt="" />
                    <img src={require("../images/Group 17.png")} alt="" />
                </div>
                <p>1000Kms</p>
            </div>
            <div className="price-section">
                <h3>$38,800</h3>
                <p>Approx 2 night trip</p>
            </div>
        </div>
    </div>
  )
}
