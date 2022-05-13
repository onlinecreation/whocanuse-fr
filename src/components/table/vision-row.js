import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Tooltip,
} from '@chakra-ui/react'
import { Text, Flex } from '@chakra-ui/react'
import chroma from 'chroma-js'
import blinder from 'color-blind'
import {
  VisionRowWrapper,
  VisionCellWrapper,
  Simulation,
  SimulationFilter,
} from './styled'
import { renderPassFail } from './renderPassFail'
import { getWcagScore } from '../getWcagScore'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { formatContrast } from '../small-info-bars'
import { RGBDots } from './rbg-dots'

export const VisionRow = ({
  name,
  percent,
  description,
  foreground,
  background,
  simType,
  contrastModifier = 0,
  bold,
  fontSize,
}) => {
  let simulatedForeground = foreground
  let simulatedBackground = background
  if (simType === 'protanomaly') {
    simulatedForeground = blinder.protanomaly(foreground)
    simulatedBackground = blinder.protanomaly(background)
  }
  if (simType === 'protanopia') {
    simulatedForeground = blinder.protanopia(foreground)
    simulatedBackground = blinder.protanopia(background)
  }
  if (simType === 'deuteranomaly') {
    simulatedForeground = blinder.deuteranomaly(foreground)
    simulatedBackground = blinder.deuteranomaly(background)
  }
  if (simType === 'deuteranopia') {
    simulatedForeground = blinder.deuteranopia(foreground)
    simulatedBackground = blinder.deuteranopia(background)
  }
  if (simType === 'tritanomaly') {
    simulatedForeground = blinder.tritanomaly(foreground)
    simulatedBackground = blinder.tritanomaly(background)
  }
  if (simType === 'tritanopia') {
    simulatedForeground = blinder.tritanopia(foreground)
    simulatedBackground = blinder.tritanopia(background)
  }
  if (simType === 'achromatomaly') {
    simulatedForeground = blinder.achromatomaly(foreground)
    simulatedBackground = blinder.achromatomaly(background)
  }
  if (simType === 'achromatopsia') {
    simulatedForeground = blinder.achromatopsia(foreground)
    simulatedBackground = blinder.achromatopsia(background)
  }
  const contrast = chroma.contrast(simulatedForeground, simulatedBackground)

  const fontSizeNum = Number(fontSize)
  const modifiedContrast = contrast + contrast * contrastModifier

  let { wcagGrade } = getWcagScore(fontSizeNum, bold, modifiedContrast)
  const pass = wcagGrade !== 'FAIL'

  let wcagPercent
  let wcagColor
  let trackColor
  let bgColor

  if (wcagGrade === 'AAA') {
    wcagPercent = '100'
    wcagColor = 'green.500'
    trackColor = 'gray.200'
    bgColor = 'white'
  } else if (wcagGrade === 'AA') {
    wcagPercent = '50'
    wcagColor = 'green.500'
    trackColor = 'gray.200'
    bgColor = 'white'
  } else if (wcagGrade === 'FAIL') {
    wcagPercent = '50'
    wcagColor = 'red.500'
    trackColor = 'red.500'
    bgColor = 'red.50'
  }

  return (
    <VisionRowWrapper pass={pass}>
      <VisionCellWrapper style={{ marginRight: '15px' }}>
        <Flex
          justifyItems="center"
          alignItems="center"
          w="48px"
          h="48px"
          position="relative"
        >
          <CircularProgress
            zIndex={1}
            value={wcagPercent}
            color={wcagColor}
            trackColor={trackColor}
          >
            <Tippy
              content={`Contrast: ${formatContrast(contrast)}`}
              duration="0"
              arrow={true}
              placement="top"
              animation="shift-away"
            >
              <CircularProgressLabel>
                {renderPassFail(wcagGrade)}
              </CircularProgressLabel>
            </Tippy>
          </CircularProgress>
          <Box
            bgColor={bgColor}
            position="absolute"
            top="2px"
            left="2px"
            right="2px"
            bottom="2px"
            borderRadius="full"
          />
        </Flex>
      </VisionCellWrapper>
      <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
        <Flex flexDirection="column">
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize="md" fontWeight={700}>
              {name}
            </Text>
            <RGBDots simType={simType} />
          </Flex>
          <Text fontSize="13px" fontWeight="medium" color="gray.500">
            {description}
          </Text>
        </Flex>
      </VisionCellWrapper>
      <VisionCellWrapper style={{ marginLeft: '15px' }}>
        <Flex flexDirection="column" alignItems="end">
          <Simulation>
            <SimulationFilter
              className={simType}
              foreground={simulatedForeground}
              background={simulatedBackground}
              bold={bold}
              fontSize={fontSize}
            >
              What I see
            </SimulationFilter>
          </Simulation>
          <Tooltip label="Rough estimation of worldwide population with this vision impairment. Can vary between genders.">
            <Flex fontSize="xs" mt={2} ml="auto">
              <Text fontWeight={700} mr={1}>
                {percent}%
              </Text>
              <Text>affected</Text>
            </Flex>
          </Tooltip>
        </Flex>
      </VisionCellWrapper>
    </VisionRowWrapper>
  )
}
