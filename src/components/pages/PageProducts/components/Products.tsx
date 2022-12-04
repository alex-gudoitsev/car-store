import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { ICar } from '~/models/Car';
import { fetchCars } from '~/api/fetchCars';

export default function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState<ICar[]>([]);

  const getCars = useCallback(async () => {
    try {
      const response = await fetchCars();
      setIsLoading(false);
      if (response.status === 200) {
        setData(response.data.cars);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    getCars();
  }, []);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map((car, index) => (
        <Grid item key={car.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              sx={{ pt: '56.25%' }}
              image={`${car.image}?sig=${index}`}
            />

            <span style={{ padding: '10px' }}>
              {car.brand} - {car.model}
            </span>

            {/* <CardActions>
              <AddProductToCart product={product} />
            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
