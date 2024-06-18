import axios from "axios";

const login = async () => {
  const response = await axios.post(`http://20.244.56.144/test/auth`, {
    companyName: process.env.COMPANY_NAME,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    ownerName: process.env.OWNER_NAME,
    ownerEmail: process.env.OWNER_EMAIL,
    rollNo: process.env.ROLL_NO,
  });

  return response.data.access_token;
};

export { login };
