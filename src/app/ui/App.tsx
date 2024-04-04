import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { helloFunc, selectTest } from '../store/reducers/test/model/testSlice';

function App() {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector(selectTest);

  useEffect(() => {
    dispatch(helloFunc('Redux'));
  }, [dispatch]);
  console.log(name);

  return <Outlet />;
}

export default App;
