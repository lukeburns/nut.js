import {Image} from "../../image.class";
import {MatchResult} from "../../matchresult.class";

export interface IOpenCVProviderInterface {
    loadImage(path: string): any;
    loadImageWithAlphaChannel(path: string): any;
    loadImageWithoutAlphaChannel(path: string): any;
    findMatch(needle: any, haystack: any): Promise<MatchResult>;
    fromImageWithAlphaChannel(img: Image): Promise<any>;
    fromImageWithoutAlphaChannel(img: Image): Promise<any>;
    rgbToGrayScale(img: any): Promise<any>;
}
