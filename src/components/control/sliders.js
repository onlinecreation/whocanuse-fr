import React from 'react'
import styled from '@emotion/styled'
import chroma from 'chroma-js'
import { Flex, Text } from '@chakra-ui/react'

export const SlidersWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  marginTop: '10px',
  flexDirection: 'column',
})

const SliderHueNumber = styled.input(
  {
    position: 'absolute',
    marginTop: '-34px',
    transform: 'translateX(-50%)',
    padding: '5px 10px',
    border: 0,
    borderRadius: '.3em',
    textAlign: 'center',
    color: 'white',
    background: 'rgba(0,0,0,.8)',
    font: 'inherit',
    fontSize: '14px',
    transition: '.3s left cubic-bezier(.17,.67,.49,1.48)',
    '&::-webkit-inner-spin-button': {
      opacity: 1,
    },
  },
  ({ percentage }) => ({
    left: `calc(100% * ${percentage})`,
  }),
)

const Label = styled('label')({
  position: 'relative',
  '&:not(:focus-within):not(:hover) > input[type=number]': {
    display: 'none',
  },
})

const SliderHue = styled.input(
  {
    display: 'block',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    appearance: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
    '&:focus': {
      outline: 0,
      boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.1)',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
  },
  ({ min, max, saturation, lightness }) => ({
    background: `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map(
        (_, i, a) =>
          `hsl(${min + ((max - min) / a.length) * i
          }, ${saturation}%, ${lightness}%)`,
      )
      .join(', ')})`,
  }),
)

const SliderSaturationNumber = styled.input(
  {
    position: 'absolute',
    marginTop: '-34px',
    transform: 'translateX(-50%)',
    padding: '5px 10px',
    border: 0,
    borderRadius: '.3em',
    textAlign: 'center',
    color: 'white',
    background: 'rgba(0,0,0,.8)',
    font: 'inherit',
    fontSize: '14px',
    transition: '.3s left cubic-bezier(.17,.67,.49,1.48)',
    '&::-webkit-inner-spin-button': {
      opacity: 1,
    },
  },
  ({ percentage }) => ({
    left: `calc(100% * ${percentage})`,
  }),
)

const SliderSaturation = styled.input(
  {
    display: 'block',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    appearance: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
    '&:focus': {
      outline: 0,
      boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.1)',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
  },
  ({ hue, lightness }) => ({
    background: `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map((_, i) => `hsl(${hue}, ${i * 10}%, ${lightness}%)`)
      .join(', ')})`,
  }),
)

const SliderLightnessNumber = styled.input(
  {
    position: 'absolute',
    marginTop: '-34px',
    transform: 'translateX(-50%)',
    padding: '5px 10px',
    border: 0,
    borderRadius: '.3em',
    textAlign: 'center',
    color: 'white',
    background: 'rgba(0,0,0,.8)',
    font: 'inherit',
    fontSize: '14px',
    transition: '.3s left cubic-bezier(.17,.67,.49,1.48)',
    '&::-webkit-inner-spin-button': {
      opacity: 1,
    },
  },
  ({ percentage }) => ({
    left: `calc(100% * ${percentage})`,
  }),
)

const SliderLightness = styled.input(
  {
    display: 'block',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    appearance: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
    '&:focus': {
      outline: 0,
      boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.1)',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
  },
  ({ min, max, hue }) => ({
    background: `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map(
        (_, i, a) => `hsl(${hue}, 0%, ${min + ((max - min) / a.length) * i}%)`,
      )
      .join(', ')})`,
  }),
)

export const Sliders = ({ color, updateColor }) => {
  const [hue, saturation, lightness] =
    color.valueKind === 'hsl' ? color.value : color.color.hsl()

  const hueValue = Math.round(isNaN(hue) ? 0 : hue)
  const saturationValue = Math.round(saturation * 100)
  const lightnessValue = Math.round(lightness * 100)
  return (
    <SlidersWrapper>
      <Label>
        <SliderHueNumber
          type="number"
          property="hueNumber"
          datatype="number"
          aria-label="HUE number"
          value={hueValue}
          min={0}
          max={360}
          step="1"
          percentage={hueValue / 360}
          onChange={(e) => {
            const newHue = e.currentTarget.value
            const color = chroma(newHue, saturation, lightness, 'hsl')
            updateColor({
              color: color,
              value: [newHue, saturation, lightness],
              valueKind: 'hsl',
            })
          }}
        />
        <Flex alignItems="center" mb={2}>
          <Text fontSize="xs" fontWeight="semibold" mr={2}>
            H
          </Text>
          <SliderHue
            type="range"
            property="hue"
            datatype="number"
            aria-label="Teinte"
            onChange={(e) => {
              const newHue = e.currentTarget.value
              const color = chroma(newHue, saturation, lightness, 'hsl')
              updateColor({
                color: color,
                value: [newHue, saturation, lightness],
                valueKind: 'hsl',
              })
            }}
            value={hueValue}
            lightness={lightness * 100}
            saturation={saturation * 100}
            min={0}
            max={360}
          />
        </Flex>
      </Label>
      <Label>
        <SliderSaturationNumber
          type="number"
          property="saturationNumber"
          datatype="number"
          aria-label="Indice de saturation"
          value={saturationValue}
          min={0}
          max={100}
          step="1"
          percentage={saturation}
          onChange={(e) => {
            const newSaturation = e.currentTarget.value / 100
            const color = chroma(hue, newSaturation, lightness, 'hsl')
            updateColor({
              color: color,
              value: [hue, newSaturation, lightness],
              valueKind: 'hsl',
            })
          }}
        />
        <Flex alignItems="center" mb={2}>
          <Text fontSize="xs" fontWeight="semibold" mr={2}>
            S
          </Text>
          <SliderSaturation
            type="range"
            property="saturation"
            datatype="number"
            aria-label="Saturation"
            onChange={(e) => {
              const newSaturation = e.currentTarget.value / 100
              const color = chroma(hue, newSaturation, lightness, 'hsl')
              updateColor({
                color: color,
                value: [hue, newSaturation, lightness],
                valueKind: 'hsl',
              })
            }}
            min={0}
            max={100}
            hue={hueValue}
            lightness={lightness * 100}
            value={saturation * 100}
          />
        </Flex>
      </Label>
      <Label>
        <SliderLightnessNumber
          type="number"
          property="lightnessNumber"
          datatype="number"
          aria-label="Indice de luminosité"
          value={lightnessValue}
          min={0}
          max={100}
          step="1"
          percentage={lightness}
          onChange={(e) => {
            const newLightness = e.currentTarget.value / 100
            const color = chroma(hue, saturation, newLightness, 'hsl')
            updateColor({
              color: color,
              value: [hue, saturation, newLightness],
              valueKind: 'hsl',
            })
          }}
        />
        <Flex alignItems="center" mb={2}>
          <Text fontSize="xs" fontWeight="semibold" mr={2}>
            L
          </Text>
          <SliderLightness
            type="range"
            property="lightness"
            datatype="number"
            aria-label="Luminosité"
            onChange={(e) => {
              const newLightness = e.currentTarget.value / 100
              const color = chroma(hue, saturation, newLightness, 'hsl')
              updateColor({
                color: color,
                value: [hue, saturation, newLightness],
                valueKind: 'hsl',
              })
            }}
            min={0}
            max={100}
            hue={hueValue}
            value={lightness * 100}
          />
        </Flex>
      </Label>
    </SlidersWrapper>
  )
}
