import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const LoadingContainer = () => {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <LoadingProducts />
      <LoadingProducts />
      <LoadingProducts />
    </div>
  );
};

const LoadingProducts = () => {
  return (
    <Card>
      <CardContent className='p-4'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='h-4 w-3/4 mt-4' />
        <Skeleton className='h-4 w-1/2 mt-4' />
      </CardContent>
    </Card>
  );
};
export default LoadingContainer;
