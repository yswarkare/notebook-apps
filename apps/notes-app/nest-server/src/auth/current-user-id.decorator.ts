import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const getCurrentUserIdByContext = (context: ExecutionContext) => {
  return context.switchToHttp().getRequest().user?.id;
};

export const CurrentUserId = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserIdByContext(context),
);
