import { PrecisionOverflowFinder } from './PrecisionOverflowFinder';

// Fetch dependencies
let WrapCoreShared = CGT.WWCore.Shared;
let Regexes = WrapCoreShared.Regexes;
let Strings = WrapCoreShared.Strings;
let spaceAsSeparator = Regexes.spaceAsSeparator;
let empty = Strings.emptyString;
let singleNewline = Strings.singleNewline;
let singleSpace = Strings.singleSpace;
let WordWrapper = CGT.WWCore.WordWrapper;
let ArrayEx = CGT.Core.Extensions.ArrayEx;

type SpacialOverflowFinder = CGT.WWCore.SpacialOverflowFinder;

export class PrecisionWordWrapper extends WordWrapper
{
    get WrapCode(): string { return "precision"; }

    // Note that the text does not contain the nametag
    protected AsWrappedLines(textField: Bitmap, text: string): string[]
    {
        this.OverflowFinder.TextField = textField;

        let lines: string[] = [];
        let words: string[] = text.split(spaceAsSeparator);
        let currentLine: string = empty;

        for (const currentWord of words)
        {
            let thereIsOverflow = this.OverflowFinder.FindFor(currentWord, currentLine);
            let foundLineBreak = this.IsLineBreak(currentWord);

            if (thereIsOverflow || foundLineBreak)
            {
                lines.push(currentLine);
                currentLine = empty;
            }

            if (foundLineBreak) // We don't want any line breaks added to the next line
                continue;
            currentLine += currentWord + singleSpace;
        }

        // Make sure the last line gets accounted for; it never gets
        // added in the above loop
        if (currentLine.length > 0)
            lines.push(currentLine);

        return lines;
    }

    IsLineBreak(text: string): boolean
    {
        return ArrayEx.Includes(this.LineBreakMarkers, text);
    }

    get LineBreakMarkers(): string[] { return CGT.WWCore.Params.LineBreakMarkers; }

    // This wrapper needs a finder that works off text fields, since for precision,
    // said fields need to be considered.
    get OverflowFinder(): SpacialOverflowFinder { return this.overflowFinder; }
    private overflowFinder: SpacialOverflowFinder;
    set OverflowFinder(value) { this.overflowFinder = value; }

    constructor(overflowFinder?: SpacialOverflowFinder)
    {
        super(overflowFinder);
        if (overflowFinder == null)
        {
            this.OverflowFinder = new PrecisionOverflowFinder();
        }
    }

}