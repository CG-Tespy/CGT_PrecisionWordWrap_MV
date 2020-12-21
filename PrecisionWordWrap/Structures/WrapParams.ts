export class WrapParams
{
    /** How many pixels wide we treat the mugshots as being. */
    get MugshotWidth(): number { return this.mugshotWidth; };
    private mugshotWidth = 144; 
    set MugshotWidth(value) { this.mugshotWidth = value; }

    /** 
     * How many pixels wide we treat the space between the mugshot and the
     * text as being.
     */
    get MugshotPadding(): number { return this.mugshotPadding; }
    private mugshotPadding = 20;
    set MugshotPadding(value) { this.mugshotPadding = value; }

    static CreateFrom(stringifiedParam: string): WrapParams
    {
        return this.factory.CreateObjectFrom(stringifiedParam);
    }

    static factory: WrapParamsFactory;
}

let ParamCore = CGT.Core.PluginParams;
let ParamFactory = ParamCore.PluginParamObjectFactory;

class WrapParamsFactory extends ParamFactory<WrapParams, ParsedWrapParam>
{
    get Params(): WrapParams { return this.baseObject; }

    ApplyNumbers()
    {
        this.Params.MugshotWidth = Number(this.parsedParam.MugshotWidth);
        this.Params.MugshotPadding = Number(this.parsedParam.MugshotPadding);

    }
}

interface ParsedWrapParam
{
    MugshotWidth: number;
    MugshotPadding: number;
}

WrapParams.factory = new WrapParamsFactory();