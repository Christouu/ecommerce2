import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDUwZWFjZjEwODQ2YmFiNTI4NDk1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkxNjMxNywiZXhwIjoxNjQ1MTc1NTE3fQ.mZpOsSwFE37dxaYNaXJPMinZ1nfETsUrPPAEEohb8B0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: "Bearer " + TOKEN },
});
