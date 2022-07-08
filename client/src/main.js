export async function fetchData(route='', data={}, methodType) {

    const response = await fetch(`${route}`, {
      method: methodType,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if(response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  }
  export async function deleteData(route = "") {
    const response = await fetch(`api${route}`, {
      method:"DELETE"
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  }