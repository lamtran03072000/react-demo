import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './components/DataBinding/DataBinding';

// tạo 1 root trên thẻ div có id là root
const root = ReactDOM.createRoot(document.getElementById('root'));
// jsx => html đc viết trên nền js gọi là jsx
// node module: có 2 cách cài cdn và tải thư mục về máy => tự tổ chức thư mục k có quy tắc
// package json : như là 1 cuốn nhật ký list lại những thư viện đã cài
root.render(
  <div>
    {/* <HomeLayout /> */}
    <DataBinding />
  </div>,
);
