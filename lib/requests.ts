export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tables');
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const fetchCollections = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/collections');
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const fetchDonutChart = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/donutChart');
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const fetchScatterChart = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/scatterChart');
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };