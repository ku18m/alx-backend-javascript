import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async (firstName, lastName, fileName) => Promise.allSettled([
  uploadPhoto(fileName), signUpUser(firstName, lastName)])
  .then((values) => values.map((value) => (value.status === 'fulfilled' ? value.value : value.reason)));
