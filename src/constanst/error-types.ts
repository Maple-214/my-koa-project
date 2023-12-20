import { ErrorTypes } from '../types';

export const ERRORS: ErrorTypes = {
  /**
   * token校验失败
   */
  TOKEN_CHECK_FAILED: {
    code: 10402,
    message: 'token校验失败'
  },
  /**
   * 服务器错误
   * 
   */
  COMMON_FAILED: {
    code: 500,
    message: '查询失败'
  }
};
