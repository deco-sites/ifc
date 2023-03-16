import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 634,
  site: "ifc",
  domains: ["deco-sites-ifc.deno.dev"],
});