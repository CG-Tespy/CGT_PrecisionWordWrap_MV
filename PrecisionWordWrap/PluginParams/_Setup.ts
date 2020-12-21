import { pluginName } from '../Shared/Strings';
import { WrapParams } from '../Structures/WrapParams';
let rawParams = PluginManager.parameters(pluginName);

if (typeof rawParams !== 'string')
    rawParams = JSON.stringify(rawParams);
    
export let pluginParams = WrapParams.CreateFrom(rawParams);
