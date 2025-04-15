import { authenticate } from "../shopify.server";
// import {LoaderFunctionArgs} from '@remix-run/node';

// import shopify from '~/shopify.server';

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};
