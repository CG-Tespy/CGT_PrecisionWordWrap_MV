import { PrecisionTextMeasurer } from './PrecisionTextMeasurer';
let OverflowFinder = CGT.WWCore.Overflow.OverflowFinder;

export class PrecisionOverflowFinder extends OverflowFinder
{
    protected FullWrapSpace(args: IOverflowFindArgs): number
    {
        let textField = args.wordWrapArgs.textField;
        return textField.width;
    }

    protected get Params(): CoreWrapParams { return CGT.WWCore.Params; }

    constructor()
    {
        super();
        this.textMeasurer = new PrecisionTextMeasurer();
    }
}

type IOverflowFindArgs = CGT.WWCore.Overflow.IOverflowFindArgs;
type CoreWrapParams = CGT.WWCore.CoreWrapParams;