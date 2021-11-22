const base_url = 'http://localhost:3000';

export const getReservations = async (authToken) => {
  const response = await fetch(`${base_url}/api/v1/reservations`, {
    method: 'GET',
    headers: {
      Authorization: authToken,
    },
  });

  return response.json();
};

export const postReservation = async (authToken, destinationId, startDate, endDate) => {
  const response = await fetch(`${base_url}/api/v1/reservations`, {
    method: 'POST',
    headers: {
      Authorization: authToken,
    },
    body: JSON.stringify({
      destination_id: destinationId,
      start_date: startDate,
      end_date: endDate,
    }),
  });
  return response.json();
};

export const deleteReservation = async (authToken, id) => {
  await fetch(`${base_url}/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: authToken,
    },
    body: JSON.stringify({
      destination_id: id,
    }),
  });
  return response.json();;
};
