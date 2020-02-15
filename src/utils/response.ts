import { Request, Response } from 'express';
import { config } from './../config';
import { ICustomFailedResponse } from 'globals';

export const globalFailResponse =
  (error: string, message: string, status: number, req: Request): ICustomFailedResponse => {
  return {
    statusCode: status || 400,
    error,
    message,
    meta: {
      apiVersion: config.appVersion,
    },
  };
};

export const sendSuccessResponse = (res: Response, data: any, status: number, req: Request): Response => {
  try {
    return res.status(status).json({
      statusCode: status || 200,
      meta: {
        appVersion: config.appVersion,
      },
      data,
    });
  } catch(err) {
    return res.status(500).json(globalFailResponse('Internal Error', '500 - Internal Error', 500, req));
  }
};

export const sendFailResponse =
  (res: Response, error: string, message: string, status: number, req: Request): Response => {
    try {
      return res.status(status).json(globalFailResponse(error, message, status || 500, req));
    } catch(err) {
      return res.status(500).json(globalFailResponse('Internal Error', '500 - Internal Error', 500, req));
    }
};
