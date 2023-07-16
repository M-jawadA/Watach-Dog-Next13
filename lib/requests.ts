export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tables');
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };