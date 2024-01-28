import React, { Component } from 'react';

export default class DataBinding extends Component {
  // cơ chế đưa giá trị js lên html

  prod = {
    id: 1,
  };
  //    viết renderTitle ở đây (thành phương thức)
  render() {
    let title = 'cybersoft';
    let prod = {
      id: 1,
      name: 'iphone',
      img: 'https://picsum.photos/200/200',
      age: 30,
    };
    const renderTitle = () => {
      let kq = 'abc';
      // có thể return string number, jsx ...
      //   không thể biding object
      return <div>{kq}</div>;
    };
    return (
      <div className="container">
        <h3>databinding</h3>
        {/* Ngày xưa */}
        <p id="txt"></p>

        {/* Bây giờ viết html trên js */}
        <p>{title}</p>

        <p>{renderTitle()}</p>
        {/* bs5 card */}
        <div className="card">
          <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{prod.name}</h4>
            <p className="card-text">{prod.age}</p>
          </div>
        </div>
      </div>
    );
  }
}
