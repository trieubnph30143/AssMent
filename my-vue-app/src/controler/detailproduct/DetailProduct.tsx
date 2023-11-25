import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useNavigate } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

let initProduct: Product = {
  id: 0,
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
};
export default function DetailProduct() {
  const [data, setData] = useState<Product>(initProduct);
  const [dataRelate, setDataRelate] = useState<Product[]>([]);
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const navigate = useNavigate();

  const id = searchParams.get("id");

  async function getProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const products = await res.json();
    setData(products);
    if(products){
      const resRelate = await fetch(`https://fakestoreapi.com/products/category/${products.category}`);
      const productsRelate = await resRelate.json();
      let arr = productsRelate.filter((item:Product)=>{
        return item.id!==Number(id)
      })
     setDataRelate(arr.slice(0,4))

      
      
    }
   

    
  }
  useEffect(() => {
    getProduct();
  }, []);
  
  
  return (
    <div>
      <Header />

      <div className='container' style={{ width: "1300px" }}>
        <h3>Chi tiết sản phẩm</h3>
        <div className='row'>
          <div className='col-4'>
            <div
              className='card'
              style={{
                width: "22rem",
                height: "402px",
                padding: "10px 0",
              }}>
              <img
                src={data && data.image}
                style={{
                  width: "248px",
                  margin: "0 auto",
                  height: "240px",
                  objectFit: "contain",
                }}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>{data && data.title}</h5>
                <p style={{ color: "red" }} className='card-text'>
                  {data && data.price}$
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{data && data.title}</h5>
                <p className='card-text'>{data && data.description}</p>
              </div>
            </div>
          </div>
        </div>
        <h3>Danh sách sản phẩm Liên Quan</h3>
        <div className='row'>
          {dataRelate &&
            dataRelate.length &&
            dataRelate.map((item) => {
              return (
                <div className='col-3' style={{ marginTop: "12px" }}>
                  <div
                    className='card'
                    style={{
                      width: "18rem",
                      height: "402px",
                      padding: "10px 0",
                    }}>
                    <img
                      src={item.image}
                      style={{
                        width: "248px",
                        margin: "0 auto",
                        height: "240px",
                        objectFit: "contain",
                      }}
                      className='card-img-top'
                      alt='...'
                    />
                    <div className='card-body'>
                      
                        <a href={`/detailproduct?id=${item.id}`}  className='card-title'>{item.title}</a>
                     

                      <p style={{ color: "red" }} className='card-text'>
                        {item.price}$
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      
      
      <Footer />
    </div>
  );
}
