import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

let initProduct: Product[] = [
  {
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  },
];
export default function Home() {
  const [data, setData] = useState<Product[]>(initProduct);
  async function getProduct() {
    let res = await fetch("https://fakestoreapi.com/products?limit=8");
    let products = await res.json();
    setData(products);
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Header />

      <div className='container' style={{ width: "1200px" }}>
        <h3>Danh sách sản phẩm</h3>
        <div className='row'>
          {data &&
            data.length &&
            data.map((item) => {
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
                      <Link to={`/detailproduct?id=${item.id}`}>
                        <h5 className='card-title'>{item.title}</h5>
                      </Link>

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
