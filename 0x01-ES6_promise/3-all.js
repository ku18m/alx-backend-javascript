// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default () => Promise.all([uploadPhoto(), createUser()]).then(
  (values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`),
  () => console.log('Signup system offline'),
);
