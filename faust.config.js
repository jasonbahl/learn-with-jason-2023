import { setConfig } from "@faustwp/core";
import templates from "./wp-templates";
import possibleTypes from "./possibleTypes.json";

// uncomment to add support for Get requests and/or persisted queries
import GetRequests from "./plugins/get-requests";

// uncomment to add support for persisted queries
import PersistedQueriesPlugin from "./plugins/persisted-queries";

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  experimentalPlugins: [
      // new GetRequests(),
      new PersistedQueriesPlugin(),
  ],
  possibleTypes,
});
