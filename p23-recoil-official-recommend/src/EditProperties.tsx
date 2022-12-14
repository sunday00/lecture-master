import {InputGroup, InputRightElement, NumberInput, NumberInputField, Text, VStack} from '@chakra-ui/react'
import { selector, useRecoilState } from 'recoil';
import { selectedElementState } from './Canvas';
import { elementState, Element } from './components/Rectangle/Rectangle';
import React from 'react';

export const selectedElementProperties = selector<Element|undefined>({
  key: 'selectedElementProperties',
  get: ({get}) => {
    const selectedElementId = get(selectedElementState)
    if (typeof selectedElementId !== 'number') return

    return get(elementState(selectedElementId))
  },
  set: ({get, set}, newElement) => {
    const selectedElementId = get(selectedElementState)
    if (typeof selectedElementId !== 'number' || !newElement) return

    set(elementState(selectedElementId), newElement)
  }
})

export const EditProperties = () => {
  const [element, setElement] = useRecoilState(selectedElementProperties)

  if (!element) return null

  const updatePosition = (prop: 'top' | 'left', amount: number) => {
    setElement({
      ...element,
      style: {
        ...element.style,
        position: {
          ...element.style.position,
          [prop]: amount,
        }
      }
    })
  }

  const updateSize = (prop: 'width' | 'height', amount: number) => {
    setElement({
      ...element,
      style: {
        ...element.style,
        size: {
          ...element.style.size,
          [prop]: amount,
        }
      }
    })
  }

  return (
    <Card>
      <Section heading="Position">
        <Property label="Top" value={element.style.position.top} onChange={(top) => { updatePosition('top', top) }} />
        <Property label="Left" value={element.style.position.left} onChange={(left) => { updatePosition('left', left) }} />
      </Section>
      <Section heading="Size">
        <Property label="Width" value={element.style.size.width} onChange={(width) => { updateSize('width', width) }} />
        <Property label="Height" value={element.style.size.height} onChange={(height) => { updateSize('height', height) }} />
      </Section>
    </Card>
  )
}

const Section: React.FC<{heading: string}> = ({heading, children}) => {
  return (
    <VStack spacing={2} align="flex-start">
      <Text fontWeight="500">{heading}</Text>
      {children}
    </VStack>
  )
}

const Property = ({label, value, onChange}: {label: string; value: number; onChange: (value: number) => void}) => {
  return (
    <div>
      <Text fontSize="14px" fontWeight="500" mb="2px">
        {label}
      </Text>
      <InputGroup size="sm" variant="filled">
        <NumberInput value={value} onChange={(_, value) => onChange(value)}>
          <NumberInputField borderRadius="md" />
          <InputRightElement pointerEvents="none" children="px" lineHeight="1" fontSize="12px" />
        </NumberInput>
      </InputGroup>
    </div>
  )
}

const Card: React.FC = ({children}) => (
  <VStack
    position="absolute"
    top="20px"
    right="20px"
    backgroundColor="white"
    padding={2}
    boxShadow="md"
    borderRadius="md"
    spacing={3}
    align="flex-start"
    onClick={(e) => e.stopPropagation()}
  >
    {children}
  </VStack>
)