import { useReducer, useEffect } from 'react';

const useFetchPhotos = () => {
  const [state, setState] = useReducer(
    (prev, action) => {
      switch (action.type) {
        case 'LOADING':
          return { photos: [], loading: true, error: null };
        case 'SUCCESS':
          return { photos: action.payload, loading: false, error: null };
        case 'ERROR':
          return { photos: [], loading: false, error: action.payload };
        default:
          return prev;
      }
    },
    { photos: [], loading: true, error: null }
  );

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=30');
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        setState({ type: 'SUCCESS', payload: data });
      } catch (error) {
        setState({ type: 'ERROR', payload: error.message });
      }
    };

    fetchPhotos();
  }, []);

  return state;
};

export default useFetchPhotos;
