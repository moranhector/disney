import React from "react";

const CharacterList = ({ characters }) => {
  console.log("carateres",characters);
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.imageUrl} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Id: {item._id}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
