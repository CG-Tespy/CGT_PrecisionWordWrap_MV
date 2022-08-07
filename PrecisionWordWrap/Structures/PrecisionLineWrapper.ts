import { PrecisionOverflowFinder } from './PrecisionOverflowFinder';
import { PrecisionUnderflowCascader } from './PrecisionUnderflowCascader';
let LineWrapper = CGT.WWCore.LineWrapper;

export class PrecisionLineWrapper extends LineWrapper
{
    constructor()
    {
        super();
        this.overflowFinder = new PrecisionOverflowFinder();
        this.underflowCascader = new PrecisionUnderflowCascader();
    }
}