import Axios from 'axios';
import { IFetchFeedsQuery } from 'feed';
import { config } from '../config';

export const getFeeds = async (query: IFetchFeedsQuery) => {
  const response = await Axios({
    method: 'GET',
    baseURL: config.flickr.host,
    url: config.flickr.path,
    params: query,
  })

  return response.data;
};
