import axios from 'axios';
import { UPDATE_DOCTORS } from './../config/Constants';
import { API_GET_DOCTORS } from './../config/Api';

const updateDoctorList = (doctors) => ({
  type: UPDATE_DOCTORS,
  doctors,
});

const getAllDoctors = () => function(dispatch) {
  return new Promise((resolve, reject) => {
    axios.get(API_GET_DOCTORS).then((response) => {
      if (response && response.status === 200) {
        dispatch(updateDoctorList(response.data));
        resolve(response.data);
        return;
      }
      reject(response.data.message);
    }).catch(err => {
      reject(err);
    })
  });
};

export {
  getAllDoctors,
};
