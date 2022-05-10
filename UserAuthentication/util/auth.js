import axios from 'axios';

const API_KEY = 'AIzaSyDPVhqPjfPtBKlTL81KGEG73kYNtagLac4';

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=' +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
