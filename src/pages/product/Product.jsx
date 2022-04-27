import { Link } from 'react-router-dom';
import './product.css';
import Chart from '../../component/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

export default function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://t3.ftcdn.net/jpg/02/75/37/12/240_F_275371280_uaaSlfWgZMNd28NcpZZI6Rwj0UldN6w8.jpg'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple Earpod</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>246</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>6546</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='ProductForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple Earpod' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://t3.ftcdn.net/jpg/02/75/37/12/240_F_275371280_uaaSlfWgZMNd28NcpZZI6Rwj0UldN6w8.jpg'
                alt=''
                className='productUploadImg'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
