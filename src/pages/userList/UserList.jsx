import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import image from './Images/eminem.jpg';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: params => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={image} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 130,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: 'Jon Snow',
      avatar: <img src={image} />,
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 2,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 3,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 4,
      username: 'Jon Snow',
      avatar: <img src={image} />,
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 5,
      username: 'Jon Snow',
      avatar: <img src={image} />,
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 6,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 7,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 8,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 9,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
    {
      id: 10,
      username: 'Jon Snow',
      avatar: <img src={image} />,

      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$250.00',
    },
  ];
  return (
    <div className='userList'>
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
