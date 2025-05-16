async function fetchGitaData() {
    try {
      const response = await fetch(`${API_URL}/api/gita`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch failed:', error);
      return null;  // or handle error appropriately
    }
  }
  