import { DataGrid } from '@mui/x-data-grid';
import './datatable.css';
import { userRows,userColumns } from './datatableSource';


export default function DataTable() {

  return (
    <div className='table'>
      <DataGrid
        rows={userRows}
        columns={userColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  );
}