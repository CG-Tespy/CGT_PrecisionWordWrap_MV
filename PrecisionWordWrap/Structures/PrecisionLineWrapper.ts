import { PrecisionOverflowFinder } from './PrecisionOverflowFinder';
let LineWrapper = CGT.WWCore.LineWrapper;

export class PrecisionLineWrapper extends LineWrapper
{
    constructor()
    {
        super();
        this.overflowFinder = new PrecisionOverflowFinder();
    }
}