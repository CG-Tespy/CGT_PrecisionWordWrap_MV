import { PrecisionTextMeasurer } from "./PrecisionTextMeasurer";

let UnderflowCascader = CGT.WWCore.UnderflowCascader;

export class PrecisionUnderflowCascader extends UnderflowCascader
{
    constructor()
    {
        super();
        this.textMeasurer = new PrecisionTextMeasurer();
    }
}