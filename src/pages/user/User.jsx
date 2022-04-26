import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://t3.ftcdn.net/jpg/04/10/26/72/240_F_410267286_J4jwbRXdZDTrgKVpsKcpzarD2eDgvL45.jpg'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUserName'>Anna Becker</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='UserShowIcon' />
              <span className='userShowInfoTitle'>annabeck99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='UserShowIcon' />
              <span className='userShowInfoTitle'>12-12-2012</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='UserShowIcon' />
              <span className='userShowInfoTitle'>+49 354 145 15</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='UserShowIcon' />
              <span className='userShowInfoTitle'>annabeck99@yahoo.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='UserShowIcon' />
              <span className='userShowInfoTitle'>Harmburg, Germany</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>UserName</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Becker'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='annabeck99@yahoo.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>UserName</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+49 354 145 15'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='Hamburg, Germany'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src='https://t3.ftcdn.net/jpg/04/10/26/72/240_F_410267286_J4jwbRXdZDTrgKVpsKcpzarD2eDgvL45.jpg'
                  alt=''
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
