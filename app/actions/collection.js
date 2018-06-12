import axios from 'axios';

import { 
  COLLECTION_IS_FETCHING,
  COLLECTION_FETCH_ERROR,
  COLLECTION_FETCH_SUCCESS
} from '../constants/index';

export function fetchCollection() {   
    return (dispatch) => {
        dispatch({
            type: COLLECTION_IS_FETCHING,
            isFetching: true
        });

        axios.get('https://archive.org/advancedsearch.php?q=collection%3A%28etree%29format%3A%28VBR+MP3%29creator%3A%28Dead%29&sort%5B%5D=date+desc&output=json', {
        params: {
        }
      })
      .then(function (response) {
        dispatch({
            type: COLLECTION_IS_FETCHING,
            isFetching: false
          });

          dispatch({
            type: COLLECTION_FETCH_SUCCESS,
            collection: response.data.response
          });
      })
      .catch(function (error) {
        dispatch({
            type: COLLECTION_IS_FETCHING,
            isFetching: false
          });
          dispatch({
            type: COLLECTION_FETCH_ERROR,
            error: error
          });
      });
    };
}