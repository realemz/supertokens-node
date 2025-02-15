// @ts-nocheck
import { JWTVerifyGetKey } from "jose";
import { RecipeInterface, TypeNormalisedInput } from "./types";
import { Querier } from "../../querier";
import { NormalisedAppinfo } from "../../types";
export declare type Helpers = {
    querier: Querier;
    JWKS: JWTVerifyGetKey;
    config: TypeNormalisedInput;
    appInfo: NormalisedAppinfo;
    getRecipeImpl: () => RecipeInterface;
};
export declare const JWKCacheMaxAgeInMs = 60000;
export declare const protectedProps: string[];
export default function getRecipeInterface(
    querier: Querier,
    config: TypeNormalisedInput,
    appInfo: NormalisedAppinfo,
    getRecipeImplAfterOverrides: () => RecipeInterface
): RecipeInterface;
