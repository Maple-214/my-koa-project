import type { Context } from 'koa';
import { AppDataSource } from '@/app/database';
import { User } from '../entity/Users';

const userInfo = async (ctx: Context) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const res = await userRepository.find();
    ctx.success('success', res);
  } catch (error: any) {
    ctx.emitError(error);
  }
};

export { userInfo };
