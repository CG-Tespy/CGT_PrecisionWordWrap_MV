let TextMeasurer = CGT.WWCore.Overflow.TextMeasurer;

export class PrecisionTextMeasurer extends TextMeasurer
{
    protected GetDefaultWidthOf(text: string, textField: Bitmap): number 
    {
        return textField.measureTextWidth(text); 
    }

}