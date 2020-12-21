import { PrecisionOverflowFinder } from './Structures/PrecisionOverflowFinder';
import { PrecisionWordWrapper } from './Structures/PrecisionWordWrapper';
import { WrapParams } from './Structures/WrapParams';
import { pluginParams } from './PluginParams/_Setup';

export let PrWoWr = 
{
    PrecisionOverflowFinder: PrecisionOverflowFinder,
    PrecisionWordWrapper: PrecisionWordWrapper,
    WrapParams: WrapParams,
    Params: pluginParams
};

RegisterWrapper();

function RegisterWrapper()
{
    let precisionWrapper = new PrecisionWordWrapper();
    CGT.WWCore.RegisterWrapper(precisionWrapper);
}

CGT.WWCore.UpdateActiveWrapper(); // For when this plugin's supposed to handle wrapping