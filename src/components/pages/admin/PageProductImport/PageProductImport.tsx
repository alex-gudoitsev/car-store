import API_PATHS from '~/constants/apiPaths';
import ProductsTable from '~/components/pages/admin/PageProductImport/components/ProductsTable';
import CSVFileImport from '~/components/pages/admin/PageProductImport/components/CSVFileImport';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { fetchCars } from '~/api/fetchCars';
import { ICar } from '~/models/Car';

export default function PageProductImport() {
  const [data, setData] = useState<ICar[]>([]);
  const getCars = useCallback(async () => {
    try {
      const response = await fetchCars();

      if (response.status === 200) {
        setData(response.data.cars);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setData]);

  useEffect(() => {
    getCars();
  }, []);

  const handleSuccessUpload = () => {
    setTimeout(() => getCars(), 3000);
  };

  return (
    <Box py={3}>
      <Box mb={2} display="flex" justifyContent="space-between">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title="Import Products CSV"
          onSuccessUpload={handleSuccessUpload}
        />
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ alignSelf: 'end' }}
          component={Link}
          to={'/admin/product-form'}
        >
          Create product
        </Button>
      </Box>
      <ProductsTable data={data} />
    </Box>
  );
}
