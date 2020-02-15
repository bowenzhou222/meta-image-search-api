import { Request, Response, NextFunction } from 'express';
import { IFetchFeedsQuery } from 'feed';
import { getFeeds } from '../../clients';
import { sendSuccessResponse, sendFailResponse } from '../../utils/response';

export const get = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const query: IFetchFeedsQuery = req.query;
    const data = await getFeeds(query);
    return sendSuccessResponse(res, data, 200, req);
  } catch(err) {
    return sendFailResponse(res, err.name, err.message, err.statusCode, req);
  }
};
