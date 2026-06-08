import { Context } from 'koa';

export function kick(ctx: Context, it: string | null | undefined): void {
  ctx.body = kickable(it);
}

function kickable(it: string | null | undefined): boolean {
  return it === "it";
}
