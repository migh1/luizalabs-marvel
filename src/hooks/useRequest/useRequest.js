/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import axios from '../../services/axios';

function useRequest() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const startRequest = () => {
    setLoading(true);
    setError(null);
  };

  const handleResponse = (data = {}) => {
    setResponse(data);
    setLoading(false);
  };

  const handleError = (err) => {
    setError(err);
    setLoading(false);
  };

  const makeRequest = (requestFunc, url, params) => {
    startRequest();
    requestFunc(url, params)
      .then((res) => handleResponse(res.data))
      .catch((err) => handleError(err));
  };

  const _get = useCallback((url, params = {}) => makeRequest(axios.get, url, params), []);
  const _put = useCallback((url, params = {}) => makeRequest(axios.put, url, params), []);
  const _post = useCallback((url, params = {}) => makeRequest(axios.post, url, params), []);
  const _delete = useCallback((url, params = {}) => makeRequest(axios.delete, url, params), []);

  return { _get, _put, _post, _delete, response, loading, error };
}

export default useRequest;
