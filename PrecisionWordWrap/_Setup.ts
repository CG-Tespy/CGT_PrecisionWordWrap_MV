import { PrecisionOverflowFinder } from './Structures/PrecisionOverflowFinder';
import { PrecisionWordWrapper } from './Structures/PrecisionWordWrapper';
import { PrecisionLineWrapper } from './Structures/PrecisionLineWrapper';

export let PrWoWr = 
{
    PrecisionOverflowFinder: PrecisionOverflowFinder,
    PrecisionWordWrapper: PrecisionWordWrapper,
};

let WordWrapper = CGT.WWCore.WordWrapper;

RegisterWrapper();

function RegisterWrapper()
{
    let lineWrapper = new PrecisionLineWrapper();
    let precisionWrapper = new WordWrapper(lineWrapper);
    precisionWrapper.WrapCode = "precision";

    CGT.WWCore.RegisterWrapper(precisionWrapper);
}

CGT.WWCore.UpdateActiveWrapper(); // For when this plugin's supposed to handle wrapping