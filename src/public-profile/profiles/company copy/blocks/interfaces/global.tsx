export interface IColorRange {
    color: string
}

export interface IStandardColorRange {
    stepMin: number | null
    stepMax: number | null
    color: string
    altText?: string
}

export interface IComparisonColorRange {
    maxColor: string
    minColor: string
    zeroColor: string
}

export interface IColorMetadata {
    minVal: number
    maxVal: number
}

export interface IComparisonMapDataConstructor {
    originalData: Array<any>
    negativeDataKey: string
    positiveDataKey: string
}

export interface IStandardMapDataConstructor {
    originalData: Array<any>
    dataKey: string
    comparison?: boolean
    dynamicColor?: boolean
    percentage?: boolean
    markerMap?: boolean
}

export interface ILeafletData {
    [key: string]: number
}

interface IPopupValue {
    title: string
    value: number
    percentage?: boolean
}

export interface IPopupData {
    [key: string]: Array<IPopupValue>
}

export interface IPopupContent {
    sourceKey: string
    title?: string
    percentage?: boolean
    titleStyle?: string
    titleClass?: string
    dataStyle?: string
    dataClass?: string
}