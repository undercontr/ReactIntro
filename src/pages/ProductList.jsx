
import React, { useState ,useEffect} from "react";
import { Table } from "reactstrap";
import ProductService from "../services/productService";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  return (
    <div>
        
      <Table striped>
        <thead>
    
          <tr>
            <th>Kullanıcı id </th>
            <th>No</th>
            <th>Başlık</th>
            <th>Konu</th>
          </tr>
        </thead>
        <tbody> 
        {products?.map((p) => (
            <tr key={p.id} >
              <td>{p.postId} </td>
              <td>{p.id} </td>
              <td>{p.name} </td>
              <td>{p.email} </td>
              <td>{p.body} </td>
             
            </tr>
         ))}
        </tbody>
      </Table>
    </div>
  );
}
