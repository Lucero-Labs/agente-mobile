import { IAgentConfig } from '../models';

const agentConfig: IAgentConfig = {
    dwnUrl: 'https://quarkid-dwn-dev.gcba.gob.ar',
    universalResolverUrl: 'https://proxyquarkid.extrimian.com',//'https://node-ssi.buenosaires.gob.ar',
    didMethod: 'did:quarkid',//'did:quarkid:zksync',
    entities: 'https://quarkid.org/.well-known/did.dev.json'
};

export default agentConfig;