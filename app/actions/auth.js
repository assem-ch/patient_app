import axios from 'axios';
import { API_AUTHENTICATE, API_PATIENT_PROFILE } from '../config/Api';
import { UPDATE_LOGIN_INFO, UPDATE_PROFILE } from '../config/Constants';


const authUser = (uid, email, isLogged) => ({
  type: UPDATE_LOGIN_INFO,
  uid,
  email,
  isLogged,
});

const updateProfile = (data) => ({
  type: UPDATE_PROFILE,
  data,
});

const authentication = (email, password) => function(dispatch) {
  return new Promise((resolve, reject) => {
    // send the request to server
    axios.post(API_AUTHENTICATE, { email, password }).then((response) => {
      if (response && response.status === 200) {
        dispatch(authUser(response.data.uid, email, true));
        resolve();
      }
      reject();
    }).catch(error => {
      reject(error);
    });
  });
};

const getPatientProfile = (uid) => function (dispatch) {
  return new Promise((resolve, reject) => {
    axios.get(API_PATIENT_PROFILE(uid)).then((response) => {
      if (response && response.status === 200) {
        dispatch(updateProfile(response.data));
        resolve();
      } else {
        reject('Error loading profile');
      }
    }).catch((err) => {
      console.warn(err);
    })
  });
};

const updatePatientProfile = (profile) => function(dispatch) {
  return new Promise((resolve, reject) => {
    axios.put(
        API_PATIENT_PROFILE(profile._id),
        {
          name: profile.name,
          address: profile.address,
          phone: profile.phone,
          proche: profile.proche,
        })
      .then((response) => {
      if (response && response.status === 200) {
        dispatch(updateProfile(response.data));
        resolve();
      } else {
        reject('Error saving the profile');
      }
    }).catch((err) => {
      console.warn(err);
    })
  });
};

export {
  authentication,
  getPatientProfile,
  updatePatientProfile,
};