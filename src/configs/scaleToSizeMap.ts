import {SizeEnum} from "../types/enums";

type scaleToSizeMap = {[size: number]: number}

export const scaleToSizeMap: scaleToSizeMap = [];

scaleToSizeMap[SizeEnum.small] = 0.6;
scaleToSizeMap[SizeEnum.big] = 0.7;
scaleToSizeMap[SizeEnum.bigger] = 0.8;
scaleToSizeMap[SizeEnum.giant] = 0.9;
scaleToSizeMap[SizeEnum.legendary] = 1;

