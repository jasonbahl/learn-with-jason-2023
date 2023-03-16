import {HttpLink} from "@apollo/client";
import {getGraphqlEndpoint} from "@faustwp/core/dist/mjs/lib/getGraphqlEndpoint";

const httpGetLink = new HttpLink({ uri: getGraphqlEndpoint(), useGETForQueries: true });

export default class GetRequests {
    apply({ addFilter }) {
        addFilter('apolloClientOptions', 'faust', (apolloClientOptions) => {
            return {
                ...apolloClientOptions,
                link: httpGetLink,
            }
        })
    }
}
