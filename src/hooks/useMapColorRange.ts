// import { IColorRange, IStandardColorRange } from "@/pages/public-profile/profiles/company copy/blocks/interfaces/global"
import { IStandardColorRange, IColorRange } from "../public-profile/profiles/company copy/blocks/interfaces/global"
import { useCallback } from "react"

// Helper function to interpolate colors
const interpolateColor = (startColor, endColor, t) => {
  // Convert colors from hex to RGB
  const start = {
    r: parseInt(startColor.slice(1, 3), 16),
    g: parseInt(startColor.slice(3, 5), 16),
    b: parseInt(startColor.slice(5, 7), 16)
  }
  const end = {
    r: parseInt(endColor.slice(1, 3), 16),
    g: parseInt(endColor.slice(3, 5), 16),
    b: parseInt(endColor.slice(5, 7), 16)
  }

  // Interpolate each channel
  const r = Math.round(start.r + (end.r - start.r) * t)
  const g = Math.round(start.g + (end.g - start.g) * t)
  const b = Math.round(start.b + (end.b - start.b) * t)

  // Convert back to hex and return
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

const useMapColorRange = () => {
  const generateStepColors = (startColor: string = "#DDD", endColor: string = "#DDD", minimumValue: number, maximumValue: number, n: number) => {
    // Calculate the total range and step size
    const totalRange = maximumValue - minimumValue + 1
    const rawStepSize = totalRange / n

    const ranges: Array<any> = []
    let currentMin = minimumValue

    for (let i = 0; i < n; i++) {
        // Calculate step max (rounded)
        const stepMax = Math.round(currentMin + rawStepSize - 1)

        // Ensure the final step max is exactly the max value
        const adjustedStepMax = i === n - 1 ? maximumValue : stepMax

        // Interpolate color for this step
        const t = i / (n - 1) // Normalize t between 0 and 1
        const color = interpolateColor(startColor, endColor, t)

        ranges.push({
            stepMin: currentMin,
            stepMax: adjustedStepMax,
            color: color
        })

        // Update currentMin for the next range, ensuring no overlap
        currentMin = adjustedStepMax + 1
    }

    return ranges
}

  const calculateComparisonColorRange = useCallback((startColor: string, zeroColor: string, endColor: string, minimumValue: number, maximumValue: number, value: number) => {
    if (value < 0) {
      // Normalize value for negative range [minimumValue, 0]
      const t = (value - minimumValue) / (0 - minimumValue) // t is between 0 and 1
      return interpolateColor(startColor, zeroColor, t)
    } else if (value > 0) {
      // Normalize value for positive range [0, maximumValue]
      const t = value / maximumValue // t is between 0 and 1
      return interpolateColor(zeroColor, endColor, t)
    } else {
      // Zero value
      return zeroColor
    }
  }, [])

  const calculateStandardColorRange = useCallback((stepColors: Array<IStandardColorRange>, value: number) => {
    for (const step of stepColors) {
      if (value >= step.stepMin && value <= step.stepMax) {
        return step.color
      }
    }

    // Handle out-of-range values
    if (value < stepColors[0]?.stepMin) {
      return stepColors[0].color
    }

    if (value > stepColors[stepColors.length - 1]?.stepMax) {
      return stepColors[stepColors.length - 1].color
    }

    return "#DDD"
  }, [])

  const generateDynamicColorRange = useCallback((startColor: string, endColor: string, minimumValue: number, maximumValue: number) => {
    const stepColors = generateStepColors(startColor, endColor, minimumValue, maximumValue, 7)

    return stepColors
  }, [])

  return {
    generateStepColors,
    calculateComparisonColorRange,
    calculateStandardColorRange,
    generateDynamicColorRange
  }
}

export default useMapColorRange